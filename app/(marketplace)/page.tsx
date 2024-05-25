"use client";

import { ethers } from "ethers";
import MarketCard from "../components/common/market/card/market_card";
import Loader from "../components/loading/loader";
import NoResult from "../components/loading/no_result";
import { useAccount } from "../feature/store/useAccount";
import useAsyncMutation from "../hooks/useAsyncMutation";
import { useAsyncQuery } from "../hooks/useAsyncQuery";
import useToastify from "../hooks/useToastify";
import marketAdapter from "./adapters/market_adapter";
import marketService from "./services/market_service";

type MarketListing = {
  id: string;
  name: string;
  price: number;
};

export default function Home() {
  const { account, updateBalance } = useAccount();

  const { data, isLoading } = useAsyncQuery({
    key: ["market", account],
    fn: async () => {
      const response = await marketService();
      return response.getMarketData(account);
    },
    adapter: marketAdapter,
  });

  const { success, error } = useToastify();

  const { mutateAsync } = useAsyncMutation({
    key: ["buy"],
    fn: async (payload: { index: string; price: string }) => {
      const response = await marketService();
      return response.buyToken(payload.index, payload.price);
    },
    onSuccess: async (data) => {
      success("Asset purchased succesfully");
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [account, "latest"],
      });
      updateBalance(+ethers.formatEther(balance).slice(0, 5));
    },
    onError: (_) => {
      error("Failed to buy asset");
    },
    invalidate: ["stash", "market"],
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="flex flex-wrap h-full p-5">
      {data.length === 0 && <NoResult />}
      {data.map((item: any) => (
        <MarketCard
          key={item.id}
          id={item.id}
          name={item.title}
          image={item.image}
          price={item.price}
          buy={async (id: string, price: string) =>
            mutateAsync({ index: id, price: price })
          }
        />
      ))}
    </main>
  );
}
