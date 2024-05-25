import { load } from "@/app/contracts";
import { IMintAsset } from "@/app/interfaces/market";
import { Contract } from "ethers";

type Listing = {
  id: string;
  name: string;
  price: number;
};

class MintService {
  market: Contract | undefined;
  constructor() {
    this.market = undefined;
  }
  async initialize() {
    const market = await load();
    this.market = market;
  }
  async mint(data: IMintAsset) {
    const response = await this.market!.mint(
      data.address,
      data.title,
      data.description,
      data.type,
      data.asset
    );
    return response;
  }
}
const mintService = new MintService();

async function createInitializedMintService(): Promise<MintService> {
  await mintService.initialize();
  return mintService;
}

export default createInitializedMintService;
