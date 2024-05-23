import type { Metadata } from "next";
import { JetBrains_Mono, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "./components/common/navbar/navbar";
import MetamaskDetectionWrapper from "./components/wraps/metamask_detection_wrap";
import QueryProviderWrapper from "./components/wraps/query_wrapper";

const jet_brains = JetBrains_Mono({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Asset Marketplace",
  description: "An ethereum based assets marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <div className="flex flex-col w-screen h-screen">
          <QueryProviderWrapper>
            <MetamaskDetectionWrapper>
              <Navbar />
              {children}
            </MetamaskDetectionWrapper>
          </QueryProviderWrapper>
        </div>
      </body>
    </html>
  );
}
