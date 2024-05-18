import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface IAccountStore {
  account: string;
  add: (payload: { account: string; balance: number }) => void;
  remove: () => void;
  balance: number;
}

export const useAccount = create<IAccountStore>()(
  persist(
    (set, _) => ({
      account: "",
      balance: 0.0,
      add: (payload: { account: string; balance: number }) =>
        set({ account: payload.account, balance: payload.balance }),
      remove: () => set({ account: "" }),
    }),
    {
      name: "account",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
