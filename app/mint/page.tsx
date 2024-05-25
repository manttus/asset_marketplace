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
import usePinata from "../hooks/usePinata";
import { useState } from "react";
import mintFormResolver from "./resolver/mint_resolver";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useToastify from "../hooks/useToastify";
import { ethers } from "ethers";

interface IMintForm {
  asset: FileList;
  title: string;
  price: number;
  description: string;
  type: string;
  image: string;
}

export default function Home() {
  const form = useForm<IMintForm>({
    defaultValues: {
      type: "",
      description: "",
      price: 0,
      title: "",
      image: "",
    },
    resolver: zodResolver(mintFormResolver),
  });

  const { account, updateBalance } = useAccount();
  const { pinImage } = usePinata();
  const { success, error } = useToastify();

  const { mutateAsync } = useAsyncMutation({
    key: ["mint"],
    fn: async (data: IMintAsset) => {
      const response = await mintService();
      const minted = await response.mint(data);
      return minted;
    },
    onSuccess: async (data) => {
      success("Asset Minted");
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [account, "latest"],
      });
      updateBalance(+ethers.formatEther(balance).slice(0, 5));
    },
    onError: (_) => {
      error("Failed to mint");
    },
  });

  async function mintAsset(data: IMintForm) {
    const formData = new FormData();
    formData.append("file", data.asset[0]);
    formData.append(
      "pinataMetadata",
      JSON.stringify({ name: "File to upload" })
    );
    pinImage(formData)
      .then(async ({ IpfsHash }) => {
        await mutateAsync({
          ...data,
          type: data.type,
          asset: IpfsHash,
          address: account,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    form.reset({});
  }

  return (
    <main className="flex flex-grow overflow-y-auto justify-center items-center relative">
      <form
        onSubmit={form.handleSubmit(mintAsset)}
        className="flex flex-col gap-2 w-2/4 relative z-10"
      >
        <div className="flex flex-col justify-center items-center relative border border-dashed  border-[#3361FF] h-44 bg-[#2196F314] z-30 rounded-[1rem]">
          <FileField
            className="absolute w-full h-full opacity-0 z-20"
            name="asset"
            control={form.control}
          />
          {!form.watch("asset") ? (
            <>
              <p className="text-[1.25rem] text-[#000000DE]">
                <span className="underline text-[#2196F3]">
                  Click to upload
                </span>{" "}
              </p>
              <p className="text-[#000000DE]">Only images allowed</p>
            </>
          ) : (
            <>{form.watch("asset")[0].name}</>
          )}
        </div>
        <div className="flex gap-2">
          <TextField
            className="border border-gray-300 w-full px-2 py-2 focus:outline-[#3361FF] rounded-[1rem]"
            name="title"
            control={form.control}
            placeholder="Name"
          />
          <SelectField
            className="border border-gray-300 w-full px-2 py-2 focus:outline-[#3361FF] bg-white rounded-[1rem]"
            control={form.control}
            name="type"
            options={TokenType}
          />
        </div>
        <TextArea
          className="border border-gray-300 w-full px-2 py-2 focus:outline-[#3361FF] rounded-[1rem]"
          name="description"
          control={form.control}
          placeholder="Description"
        />
        <button className="border h-12 px-4 bg-[#3361FF] text-white text-[1rem] rounded-[1rem]">
          Mint Token
        </button>
      </form>
    </main>
  );
}
