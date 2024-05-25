"use client";

import { useForm } from "react-hook-form";
import {
  FileField,
  SelectField,
  TextArea,
  TextField,
} from "../components/common/elements";
import { useAccount } from "../feature/store/useAccount";
import { TokenType } from "../constants/options";
import useAsyncMutation from "../hooks/useAsyncMutation";
import mintService from "./services/mint_service";
import { IMintAsset } from "../interfaces/market";

interface IMintForm {
  asset: FileList;
  title: string;
  price: number;
  description: string;
  type: string;
}

export default function Home() {
  const form = useForm<IMintForm>({
    defaultValues: {
      type: "",
      description: "",
      price: 0,
      title: "",
    },
  });

  const { account } = useAccount();

  const { mutateAsync } = useAsyncMutation({
    key: ["mint"],
    fn: async (data: IMintAsset) => {
      const response = await mintService();
      const minted = await response.mint(data);
      console.log("Hello", minted);
      return minted;
    },
    onSuccess: (data) => {},
  });

  async function mintAsset(data: IMintForm) {
    await mutateAsync({
      ...data,
      type: data.type,
      category: "default",
      asset:
        "https://res.cloudinary.com/dqarajag2/image/upload/v1684408089/pmzikrcctceolylsmuy9.jpg",
      address: account,
    });
  }

  return (
    <main className="flex flex-grow overflow-y-auto justify-center items-center relative">
      <form
        onSubmit={form.handleSubmit(mintAsset)}
        className="flex flex-col gap-2 w-2/4 relative z-10"
      >
        <div className="flex flex-col justify-center items-center relative border border-dashed rounded border-[#3361FF] h-44 bg-[#2196F314] z-30">
          <FileField
            className="absolute w-full h-full opacity-0 z-20"
            name="asset"
            control={form.control}
          />
          {!form.watch("asset") ? (
            <>
              <p className="text-[1.25rem] text-[#000000DE]">
                <span className="underline text-[#2196F3] ">
                  Click to upload
                </span>{" "}
                or drag and drop
              </p>
              <p className="text-[#000000DE]">Only images allowed</p>
            </>
          ) : (
            <>Uploaded</>
          )}
        </div>
        <div className="flex gap-2">
          <TextField
            className="border border-gray-300 w-full px-2 py-2 focus:outline-[#3361FF]"
            name="title"
            control={form.control}
            placeholder="Name"
          />

          <TextField
            className="border border-gray-300 w-full px-2 py-2 focus:outline-[#3361FF]"
            type="number"
            name="price"
            control={form.control}
            placeholder="Price (ETH)"
          />
        </div>
        <SelectField
          className="border border-gray-300 w-full px-2 py-2 focus:outline-[#3361FF] bg-white"
          control={form.control}
          name="type"
          options={TokenType}
        />
        <TextArea
          className="border border-gray-300 w-full px-2 py-2 focus:outline-[#3361FF]"
          name="description"
          control={form.control}
          placeholder="Description"
        />
        <button className="border h-12 px-4 bg-[#3361FF] text-white text-[1rem]">
          Create Token
        </button>
      </form>
    </main>
  );
}
