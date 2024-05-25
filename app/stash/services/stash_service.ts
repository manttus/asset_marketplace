import { load } from "@/app/contracts";
import { Contract } from "ethers";

type StashListing = {
  id: string;
  name: string;
  price: number;
};

class StashService {
  market: Contract | undefined;
  constructor() {
    this.market = undefined;
  }
  async initialize() {
    const market = await load();
    this.market = market;
  }
  async getMinted(account: string): Promise<StashListing[]> {
    const response = await this.market?.mints(account);
    return response as StashListing[];
  }
  async listAsset(index: number, price: number) {
    const response = await this.market?.listToken(index, +price);
    return response;
  }
  async removeList(index: number) {
    const response = await this.market?.removeToken(index);
    return response;
  }
}
const stashService = new StashService();

async function createInitializedStashService(): Promise<StashService> {
  await stashService.initialize();
  return stashService;
}

export default createInitializedStashService;
