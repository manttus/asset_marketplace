import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex flex-grow items-center justify-center">
      <div className="h-3/4 w-3/4 relative">
        <Image src={"404.svg"} layout="fill" alt="Not Found" />
      </div>
    </main>
  );
}
