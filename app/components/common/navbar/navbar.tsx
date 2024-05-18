"use client";

import { useAccount } from "@/app/feature/store/useAccount";
import { ethers } from "ethers";
import Image from "next/image";

export default function Navbar() {
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
      add({
        account: accounts[0],
        balance: ethers.formatEther(balance).slice(0, 5),
      });
    }
  }

  async function removeAccount() {
    remove();
  }

  return (
    <div className="border h-20 flex justify-between items-center px-4">
      <div className="h-16 w-24 relative">
        <Image src={"/logo.png"} alt="Logo" layout="fill" quality={100} />
      </div>
      {!account ? (
        <button className="border h-12 px-4" onClick={getAccount}>
          Connect
        </button>
      ) : (
        <button className="border h-12 px-4" onClick={removeAccount}>
          {balance}
        </button>
      )}
    </div>
  );
}
