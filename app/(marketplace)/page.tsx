"use client";
import { useMarket } from "../hooks/useContract";

export default function Home() {
  const { isLoading, listing } = useMarket();
  if (isLoading) {
    return <>Loading....</>;
  }
  console.log(listing);
  return <main></main>;
}
