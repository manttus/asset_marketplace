"use client";

import { useEffect, useState } from "react";
import { load } from "../contracts";

const { market } = load();

export function useMarket() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [listing, setListing] = useState([]);

  async function getMarketListing() {
    market._getListings().then((data) => {
      setListing(JSON.parse(JSON.stringify(data)));
      setLoading(false);
    });
  }

  function refetch() {
    getMarketListing();
  }

  useEffect(() => {
    getMarketListing();
  }, []);

  return { isLoading, listing, refetch };
}
