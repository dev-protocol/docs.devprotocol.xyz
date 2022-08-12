// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

interface IDev{
    function depositFrom(address _from, address _to, uint256 _amount) external returns (bool);
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
}

contract UsingDevInterface{
    IDev internal DevQuery;
    /**
     * Network: Polygon Mumbai
     * Address: 0xcbc698ed514dF6e54932a22515d6D0C27E4DA091
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