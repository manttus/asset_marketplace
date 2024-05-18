"use client";

import detectEthereumProvider from "@metamask/detect-provider";
import { useEffect } from "react";

export default function MetamaskDetectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  async function detectWallet() {
    const provider = await detectEthereumProvider();
    if (provider) {
      if (provider !== window.ethereum) {
        alert("Please install metamask");
      }
    } else {
      alert("Please install metamask");
    }
  }
  useEffect(() => {
    detectWallet();
  });

  return children;
}
