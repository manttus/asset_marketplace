"use client";

import Lottie from "lottie-react";
import loader from "../../../public/lotte/no_connection.json";

export default function NoConnection() {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <Lottie className="h-72 w-72" animationData={loader} />
      <p className="text-[1.25rem]">Metamask Connection Required</p>
    </div>
  );
}
