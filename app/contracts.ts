import { ethers } from "ethers";
import market_contract from "../contract_data/Market.json";
import nft_contract from "../contract_data/NFT.json";

export function load() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const market = new ethers.Contract(
    market_contract.address,
    market_contract.contract.abi,
    provider
  );
  const nft = new ethers.Contract(
    nft_contract.address,
    nft_contract.contract.abi,
    provider
  );
  return { market, nft };
}
