"use client";

import { PROJECT_TITLE } from "~/lib/constants";
import { NFTMintFlow } from "~/components/nft-mint-flow";

export default function App() {
  return (
    <div className="w-[400px] mx-auto py-8 px-4 min-h-screen flex flex-col items-center justify-center">
      {/* TEMPLATE_CONTENT_START - Replace content below */}
      <div className="space-y-8 text-center w-full max-w-[350px]">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight">
            Mint Your NFT
          </h1>
          <p className="text-base text-muted-foreground">
            Connect your wallet and mint with just two clicks
          </p>
        </div>
        
        <NFTMintFlow
          contractAddress="0x036721e5A681E71B96200AAEF81De8b0d59be7A3"
          tokenId="1"
          network="base"
          buttonText="Mint NFT"
        />
      </div>
      {/* TEMPLATE_CONTENT_END */}
    </div>
  );
}
