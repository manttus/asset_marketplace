// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

struct Token {
   uint256 id;
   address owner;
   string asset;
   string title;
   string description;
   string category;
   bool isForSale;
   uint256 price;
}

