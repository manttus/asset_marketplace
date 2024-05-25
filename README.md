<!-- GETTING STARTED -->
## Getting Started

To get a local copy of your asset marketplace application up and running, follow these simple steps

### Prerequisites

Ensure you have the following installed on your local machine
* npm
  ```sh
  npm install npm@latest -g
  ```
* Metamask Wallet: https://metamask.io/download/

### Installation

1. Get JWT Key at [https://www.pinata.cloud/](https://www.pinata.cloud/) for Image pinning
2. Clone the repo
   ```sh
   git clone git@github.com:manttus/asset_marketplace.git
   ```
3. Install NPM packages
   ```sh
   cd asset_marketplace && npm install
   ```
4. Enter the Pinata config in `.env`
   ```js
   NEXT_PUBLIC_PINATA_JWT='ENTER YOUR PINATA JWT FROM STEP 1'
   NEXT_PUBLIC_PINATA_GATEWAY='ENTER THE PINATA GATEWAY FROM YOUR PINATA PROFILE'
   ```
5. Also update the pinata config in `next.config.mjs` for images
   ```js
   {
     hostname: "ENTER THE PINATA GATEWAY FROM YOUR PINATA PROFILE",
   },
   ```
6. Run you local blockchain using hardhat
   ```sh
   npm run node
   ```
   
7. Add the RPC URL and accounts provided by hardhat in you metamask wallet
   
8. Deploy the smart contract
   ```sh
   npm run deploy:contract
   ```
   
9. Run the application
   ```sh
   npm run dev
   ```
