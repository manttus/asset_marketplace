import Image from "next/image";
import { TextField } from "../elements";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Card({
  id,
  image,
  name,
  isListed,
  submitHandler,
  removeHandler,
}: {
  image: string;
  name: string;
  id: string;
  isListed: boolean;
  submitHandler: (data: any) => any;
  removeHandler: (data: any) => any;
}) {
  const form = useForm<{ price: number }>({
    defaultValues: {
      price: 0,
    },
  });

  const [enable, setEnable] = useState<boolean>(false);

  function addToMarket(data: { price: number }) {
    submitHandler({ index: id, price: data.price });
    setEnable(false);
    form.reset({ price: 0 });
  }

  function removeFromMarket(data: { id: string }) {
    removeHandler({ index: data.id });
  }

  return (
    <div className="border border-gray-300 w-60 h-[17rem] flex flex-col justify-between items-center py-2 gap-2 rounded-[1rem]">
      <div className="border-y w-56 h-52 relative rounded-[1rem]">
        <p className=" flex justify-center items-center border border-gray-500 rounded-full absolute bg-gray-200 top-2 left-2 z-30 py-1 px-2">
          {name}
        </p>
        <Image
          className="rounded-[1rem]"
          src={`${process.env.NEXT_PUBLIC_PINATA_GATEWAY}/${image}`}
          layout="fill"
          alt="NFT"
        />
      </div>

      {!isListed && (
        <form
          className="flex w-56 gap-2"
          onSubmit={form.handleSubmit(addToMarket)}
        >
          {enable ? (
            <>
              <button className="border rounded-[1rem] h-12 px-4 bg-[#3361FF] text-white text-[1rem]">
                Sell
              </button>
              <div className="flex flex-grow">
                <TextField
                  type="text"
                  className="border rounded-l-[1rem] focus:outline-[#3361FF] px-2 w-full"
                  placeholder="Price (ETH)"
                  control={form.control}
                  name="price"
                />
                <div
                  className="bg-gray-200 rotate-50 rounded-r-[1rem] flex justify-center items-center px-2 cursor-pointer"
                  onClick={() => setEnable(false)}
                >
                  <p>x</p>
                </div>
              </div>
            </>
          ) : (
            <div
              className="border flex justify-center items-center w-full rounded-[1rem] h-12 bg-[#3361FF] text-white text-[1rem] cursor-pointer"
              onClick={() => setEnable(true)}
            >
              Add to Market
            </div>
          )}
        </form>
      )}
      {isListed && (
        <button
          className="border w-56 h-12 px-4 bg-[#3361FF] text-white text-[1rem] rounded-[1rem]"
          onClick={() => removeFromMarket({ id })}
        >
          Remove
        </button>
      )}
    </div>
  );
}
