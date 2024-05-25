"use client";

import Card from "../components/common/card/card";
import Loader from "../components/loading/loader";
import NoResult from "../components/loading/no_result";
import { useAccount } from "../feature/store/useAccount";
import useAsyncMutation from "../hooks/useAsyncMutation";
import { useAsyncQuery } from "../hooks/useAsyncQuery";
import useToastify from "../hooks/useToastify";
import listingAdapter from "./adapter/listing_adapter";
import stashService from "./services/stash_service";

export default function Home() {
  const { account } = useAccount();
  const { success, error } = useToastify();

  const { data, isLoading, isError } = useAsyncQuery({
    key: ["stash", account],
    fn: async () => {
      const response = await stashService();
      return response.getMinted(account);
    },
    adapter: listingAdapter,
  });

  const { mutateAsync } = useAsyncMutation({
    key: ["list"],
    fn: async (data) => {
      const response = await stashService();
      return response.listAsset(data.index, data.price);
    },
    onSuccess: (data) => {
      success("Asset listed in market");
    },
    onError: (_) => {
      error("Failed to list asset");
    },
    invalidate: ["stash", "market"],
  });

  const { mutateAsync: removeMutateAsync } = useAsyncMutation({
    key: ["remove"],
    fn: async (data) => {
      const response = await stashService();
      return response.removeList(data.index);
    },
    onSuccess: (data) => {
      success("Asset removed from market");
    },
    onError: (_) => {
      error("Failed to remove asset");
    },
    invalidate: ["stash", "market"],
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    console.log(isError);
  }

  return (
    <main className="flex w-full h-full overflow-y-auto">
      {data.length === 0 && <NoResult />}
      <div className="flex p-4 gap-8">
        {data.map((item: any) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.title}
            image={item.image}
            isListed={item.isForSale}
            submitHandler={async (data) => mutateAsync(data)}
            removeHandler={async (data) => removeMutateAsync(data)}
          />
        ))}
      </div>
    </main>
  );
}
