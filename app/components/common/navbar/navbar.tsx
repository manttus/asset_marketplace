"use client";

import { useAccount } from "@/app/feature/store/useAccount";
import { ethers } from "ethers";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const { account, balance, add, remove } = useAccount();

  async function getAccount() {
    const request = await window.ethereum.request({
      method: "wallet_requestPermissions",
      params: [
        {
          eth_accounts: {},
        },
      ],
    });
    const accounts = request[0].caveats[0].value;
    if (accounts.length > 1) {
      alert("Choose a single account dumbass");
    } else {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      });
      console.log(balance);
      add({
        account: accounts[0],
        balance: +ethers.formatEther(balance).slice(0, 5),
      });
    }
  }

  async function removeAccount() {
    remove();
  }

  return (
    <div className="border h-20 flex justify-between items-center px-4">
      <div className="h-16 w-24 relative cursor-pointer">
        <Image
          src={"/logo.png"}
          alt="Logo"
          layout="fill"
          quality={100}
          onClick={() => router.push("/")}
        />
      </div>
      {!account ? (
        <button className="border h-12 px-4" onClick={getAccount}>
          Connect
        </button>
      ) : (
        <div className="flex gap-2">
          <button
            type="button"
            className="border h-12 px-4 bg-[#3361FF] text-white text-[1rem]"
            onClick={() => router.push("/mint")}
          >
            Create
          </button>
          <button className="border h-12 px-4" onClick={removeAccount}>
            {balance}
          </button>
          <button
            type="button"
            className="border h-12 px-4"
            onClick={() => router.push("/stash")}
          >
            Stash
          </button>
        </div>
      )}
    </div>
  );
}
