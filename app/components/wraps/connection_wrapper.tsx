"use client";

import { useAccount } from "@/app/feature/store/useAccount";
import NoConnection from "../loading/no_connection";

export default function ConnectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { account } = useAccount();
  return account ? children : <NoConnection />;
}
