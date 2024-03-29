// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

interface IDev{
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
}

contract UsingDevInterface{
    IDev internal DevQuery;
    /**
     * Network: Ethereum Mainnet
     * Address: 0x5caf454ba92e6f2c929df14667ee360ed9fd5b26
     */
    constructor() {
        DevQuery = IDev(0xcbc698ed514dF6e54932a22515d6D0C27E4DA091);
    }
    /**
     * Returns the balance of particular address
     */
    function fetchBalance(address _address) public view returns(uint256){
        uint256 balance = DevQuery.balanceOf(_address);
        return balance;
    }
    /**
     * Add/Remove functions as per use case
     */
}