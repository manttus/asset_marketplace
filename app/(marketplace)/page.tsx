"use client";

import MarketCard from "../components/common/market/card/market_card";
import Loader from "../components/loading/loader";
import { useAccount } from "../feature/store/useAccount";
import useAsyncMutation from "../hooks/useAsyncMutation";
import { useAsyncQuery } from "../hooks/useAsyncQuery";
import marketAdapter from "./adapters/market_adapter";
import marketService from "./services/market_service";

type MarketListing = {
  id: string;
  name: string;
  price: number;
};

export default function Home() {
  const { account } = useAccount();

  const { data, isLoading } = useAsyncQuery({
    key: ["market"],
    fn: async () => {
      const response = await marketService();
      return response.getMarketData(account);
    },
    adapter: marketAdapter,
  });

  const { mutateAsync } = useAsyncMutation({
    key: ["buy"],
    fn: async (payload: { index: number; price: number }) => {
      const response = await marketService();
      return response.buyToken(BigInt(payload.index), payload.price);
    },
    onSuccess: (data) => {},
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="flex p-5">
      {(data as MarketListing[]).map((item: any) => (
        <MarketCard
          key={item.id}
          id={item.id}
          name={item.title}
          image={item.image}
          price={item.price}
          buy={async (id: number, price: number) =>
            mutateAsync({ index: id, price: price })
          }
        />
      ))}
    </main>
  );
}
