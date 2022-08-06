// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;


interface IMyNFT{
    // returns token ID owned by owner at a given index of it's token list
    // Use along with {balanceOf} to enumerate all of owner's tokens.
    function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256 tokenId);

    // number of tokens the address "owner" has
    function balanceOf(address owner) external view returns (uint256 balance);
}