import { load } from "@/app/contracts";
import { Contract, ethers } from "ethers";

type MarketListing = {
  id: string;
  name: string;
  price: number;
};

class MarketService {
  market: Contract | undefined;
  constructor() {
    this.market = undefined;
  }
  async initialize() {
    const market = await load();
    this.market = market;
  }
  async getMarketData(address: string): Promise<MarketListing[]> {
    const response = await this.market!.listings(address);
    return response as MarketListing[];
  }

  async buyToken(index: number, price: number) {
    await this.market!.buyToken(index, {
      value: price.toString(),
    });
  }
}
const marketService = new MarketService();

async function createInitializedMarketService(): Promise<MarketService> {
  await marketService.initialize();
  return marketService;
}

export default createInitializedMarketService;
