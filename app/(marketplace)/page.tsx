"use client";

import { useAsyncQuery } from "../hooks/useAsyncQuery";
import marketService from "./services/market_service";

type MarketListing = {
  id: string;
  name: string;
  price: number;
};

export default function Home() {
  const { data, isLoading } = useAsyncQuery({
    key: ["market"],
    fn: async () => {
      const response = await marketService();
      return response.getMarketData();
    },
  });

  if (isLoading) {
    return <>Loading....</>;
  }
  return (
    <main>
      {(data as MarketListing[]).map((item: any) => (
        <>{JSON.stringify(item)}</>
      ))}
    </main>
  );
}
