"use client";

import Lottie from "lottie-react";
import loader from "../../../public/lotte/loader.json";

export default function Loader() {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <Lottie className="h-44 w-44" animationData={loader} />
    </div>
  );
}
