// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "./types/token.sol";
import "./events/events.sol";

contract Marketplace is events {
    address private owner;
    uint256 private _index = 0;

    mapping(uint256 => Token) private tokens;
    mapping(string => bool) private titles;
    mapping(string => bool) private assets;

    constructor() {
        owner = msg.sender;
    }

    function mint(
        address minter,
        string memory title,
        string memory description,
        string memory category,
        string memory asset
    ) external returns (uint256) {
        require(!titles[title] && !assets[asset], "Duplicate NFT");
        _index += 1;
        titles[title] = true;
        assets[asset] = true;
        tokens[_index] = Token({
            id: _index,
            owner: minter,
            asset: asset,
            title: title,
            description: description,
            category: category,
            isForSale: false,
            price: 0
        });
        emit Transfer(address(0), minter, _index);
        return _index;
    }

    function listings(address viewer) public view returns (Token[] memory) {
        uint256 forSaleCount = 0;
        for (uint256 i = 1; i <= _index; i++) {
            if (tokens[i].isForSale && tokens[i].owner != viewer) {
                forSaleCount++;
            }
        }

        Token[] memory list = new Token[](forSaleCount);
        uint256 _idx = 0;
        for (uint256 i = 1; i <= _index; i++) {
            if (tokens[i].isForSale && tokens[i].owner != viewer) {
                list[_idx] = tokens[i];
                _idx++;
            }
        }
        return list;
    }

    function mints(address minter) public view returns (Token[] memory) {
        uint256 count = 0;
        for (uint256 i = 1; i <= _index; i++) {
            if (tokens[i].owner == minter) {
                count++;
            }
        }

        Token[] memory list = new Token[](count);
        uint256 _idx = 0;
        for (uint256 i = 1; i <= _index; i++) {
            if (tokens[i].owner == minter) {
                list[_idx] = tokens[i];
                _idx++;
            }
        }
        return list;
    }

    function listToken(uint256 index, uint256 price) external returns (bool) {
        require(tokens[index].id == index, "No Token Found");
        require(tokens[index].owner == msg.sender, "You are not the owner");
        tokens[index].isForSale = true;
        tokens[index].price = price;
        return true;
    }

    function removeToken(uint256 index) external {
        require(tokens[index].id == index, "No Token Found");
        require(tokens[index].owner == msg.sender, "You are not the owner");
        tokens[index].isForSale = false;
        tokens[index].price = 0;
    }

    function buyToken(uint256 index) external payable {
        require(tokens[index].isForSale, "Token is not for sale");
        require(msg.value >= tokens[index].price, "Insufficient funds");
        address previousOwner = tokens[index].owner;
        tokens[index].owner = msg.sender;
        tokens[index].isForSale = false;
        tokens[index].price = 0;
        payable(previousOwner).transfer(msg.value);
        emit Transfer(previousOwner, msg.sender, index);
    }
}

