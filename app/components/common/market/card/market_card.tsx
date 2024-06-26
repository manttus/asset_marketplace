import Image from "next/image";

export default function MarketCard({
  id,
  image,
  name,
  price,
  buy,
}: {
  image: string;
  name: string;
  id: string;
  price: string;
  buy: (id: string, price: string) => Promise<void>;
}) {
  return (
    <div className="border border-gray-300 w-60 h-72 flex flex-col justify-between items-center py-3 gap-2 rounded-[1rem]">
      <div className="border-y w-52 h-52 relative border border-gray-400 rounded-[1rem]">
        <p className=" flex justify-center items-center border border-gray-500 rounded-full absolute bg-gray-200 top-2 left-2 z-30 py-1 px-2">
          {name}
        </p>
        <p className=" flex justify-center items-center border border-gray-500 rounded-full h-6 w-6 absolute bg-gray-200 top-2 right-2 z-30 p-4">
          {parseInt(price)}
        </p>
        <Image
          className="rounded-[1rem]"
          src={`${process.env.NEXT_PUBLIC_PINATA_GATEWAY}/${image}`}
          layout="fill"
          alt="NFT"
        />
      </div>
      <button
        type="button"
        onClick={() => buy(id, price)}
        className="border w-52 h-12 px-4 bg-[#3361FF] text-white text-[1rem] rounded-[1rem]"
      >
        Purchase
      </button>
    </div>
  );
}
