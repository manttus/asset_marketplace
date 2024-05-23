import { load } from "@/app/contracts";
import { Contract } from "ethers";

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
    const { market } = await load();
    this.market = market;
  }
  async getMarketData(): Promise<MarketListing[]> {
    const response = await this.market?._getListings();
    return response as MarketListing[];
  }
}
const marketService = new MarketService();

async function createInitializedMarketService(): Promise<MarketService> {
  await marketService.initialize();
  return marketService;
}

export default createInitializedMarketService;
