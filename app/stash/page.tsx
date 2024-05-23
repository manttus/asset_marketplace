"use client";

import { useAccount } from "../feature/store/useAccount";
import { useAsyncQuery } from "../hooks/useAsyncQuery";
import stashAdapter from "./adapter/stash_adapter";
import stashService from "./services/stash_service";

export default function Home() {
  const { account } = useAccount();

  const { data, isLoading, isError } = useAsyncQuery({
    key: ["stash"],
    fn: async () => {
      const response = await stashService();
      return response.getStash(account);
    },
    adapter: stashAdapter,
  });

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    console.log(isError);
  }

  console.log(data);

  return (
    <main className="flex w-full overflow-y-auto">
      <div className="flex p-4"></div>
    </main>
  );
}
