import { load } from "@/app/contracts";
import { Contract } from "ethers";

type StashListing = {
  id: string;
  name: string;
  price: number;
};

class StashService {
  nft: Contract | undefined;
  constructor() {
    this.nft = undefined;
  }
  async initialize() {
    const { nft } = await load();
    this.nft = nft;
  }
  async getStash(account: string): Promise<StashListing[]> {
    const response = await this.nft?._getTokens(account);
    return response as StashListing[];
  }
}
const stashService = new StashService();

async function createInitializedStashService(): Promise<StashService> {
  await stashService.initialize();
  return stashService;
}

export default createInitializedStashService;
