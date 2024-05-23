import { ethers } from "ethers";
import market_contract from "../contract_data/Market.json";
import nft_contract from "../contract_data/NFT.json";

export async function load() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const market = new ethers.Contract(
    market_contract.address,
    market_contract.contract.abi,
    signer
  );
  const nft = new ethers.Contract(
    nft_contract.address,
    nft_contract.contract.abi,
    signer
  );
  return { market, nft };
}
