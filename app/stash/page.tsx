"use client";

import Card from "../components/common/card/card";
import Loader from "../components/loading/loader";
import { useAccount } from "../feature/store/useAccount";
import useAsyncMutation from "../hooks/useAsyncMutation";
import { useAsyncQuery } from "../hooks/useAsyncQuery";
import listingAdapter from "./adapter/listing_adapter";
import stashService from "./services/stash_service";

export default function Home() {
  const { account } = useAccount();

  const { data, isLoading, isError } = useAsyncQuery({
    key: ["stash"],
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
  });

  const { mutateAsync: removeMutateAsync } = useAsyncMutation({
    key: ["remove"],
    fn: async (data) => {
      const response = await stashService();
      return response.removeList(data.index);
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    console.log(isError);
  }

  return (
    <main className="flex w-full overflow-y-auto">
      <div className="flex p-4">
        {data.map((item: any) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
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
