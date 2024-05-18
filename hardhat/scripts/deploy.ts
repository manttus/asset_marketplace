import { Contract } from "ethers";
import hardhat from "hardhat";
import path from "path";
import fs from "fs";

function saveContractData(name: string, contract: Contract, address: string) {
  const contracts_data = path.join(__dirname, "../..", "contract_data");

  if (!fs.existsSync(contracts_data)) {
    fs.mkdirSync(contracts_data);
  }
  const artifact = hardhat.artifacts.readArtifactSync(name);
  const filePath = path.join(contracts_data, `${name}.json`);
  fs.writeFileSync(
    filePath,
    JSON.stringify({ address: address, contract: artifact }, undefined, 2)
  );
}

async function main() {
  const [deployer] = await hardhat.ethers.getSigners();
  const nft = await hardhat.ethers.getContractFactory("NFT");
  const nft_contract = await nft.deploy();
  const marketplace = await hardhat.ethers.getContractFactory("Market");
  const marketplace_contract = await marketplace.deploy(
    await nft_contract.getAddress()
  );
  saveContractData("NFT", nft_contract, await nft_contract.getAddress());
  saveContractData(
    "Market",
    marketplace_contract,
    await marketplace_contract.getAddress()
  );
}

main().catch((error) => {
  console.error(error);
});
