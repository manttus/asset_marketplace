import Image from "next/image";
import { TextField } from "../elements";
import { useForm } from "react-hook-form";

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

  function addToMarket(data: { price: number }) {
    submitHandler({ index: id, price: data.price });
  }

  function removeFromMarket(data: { id: number }) {
    removeHandler({ index: id });
  }

  return (
    <div className="border border-gray-200 shadow-md w-60 flex flex-col justify-between items-center py-2 gap-2">
      <p>{name}</p>
      <div className="border-y w-52 h-52 relative border border-gray-400">
        <Image src={image} layout="fill" alt="NFT" />
      </div>

      {!isListed && (
        <form
          className="flex w-52 gap-2"
          onSubmit={form.handleSubmit(addToMarket)}
        >
          <button className="border h-12 px-4 bg-[#3361FF] text-white text-[1rem]">
            Sell
          </button>
          <div className="flex flex-grow">
            <TextField
              type="number"
              className="border focus:outline-[#3361FF] px-2 w-full"
              placeholder="Price (ETH)"
              control={form.control}
              name="price"
            />
          </div>
        </form>
      )}
      {isListed && (
        <button
          className="border w-52 h-12 px-4 bg-[#3361FF] text-white text-[1rem]"
          onClick={() => removeFromMarket({ id })}
        >
          Remove Listing
        </button>
      )}
    </div>
  );
}
