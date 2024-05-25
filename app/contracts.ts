import { ethers } from "ethers";
import market_contract from "../contract_data/Marketplace.json";

export async function load() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const market = new ethers.Contract(
    market_contract.address,
    market_contract.contract.abi,
    signer
  );
  return market;
}
