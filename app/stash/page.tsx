"use client";

import Card from "../components/common/card/card";
import { useAccount } from "../feature/store/useAccount";
import { useStash } from "../hooks/useContract";

export default function Home() {
  const { account } = useAccount();
  const { isLoading, listing, isListed } = useStash(account);

  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <main className="flex w-full overflow-y-auto">
      <div className="flex p-4">
        {listing.map((item, index) => {
          // const indi = await isListed(item[0])
          return (
            <Card
              key={index}
              id={item[0]}
              isListed={false}
              image={item[2]}
              name={item[5]}
            />
          );
        })}
      </div>
    </main>
  );
}
