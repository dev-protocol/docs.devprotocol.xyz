// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@devprotocol/i-s-tokens/contracts/interfaces/ISTokensManager.sol";

contract usingstokenInterface {
    ISTokensManagerV2 internal STokenQuery;
    /**
    * Network: Ethereum Mainnet
    * Address: 0x50489Ff5f879A44C87bBA85287729D663b18CeD5
    */
    constructor() {
        STokenQuery = ISTokensManagerV2(0x50489Ff5f879A44C87bBA85287729D663b18CeD5);
    }

    /**
    * @dev Queries SToken Data.
    * @param _propertyaddress Property address of particular property to be queried
    * @param _owner address of SToken holder
    * @return uint256[] SToken position data of a particular property
    * @return uint256[] SToken positions held by particular address
    * @return uint256 current token id
    */
    function getSTokenData(
        address _propertyaddress, 
        address _owner
    ) public view 
    returns(uint256[] memory, uint256[] memory, uint256){
        uint256[] memory PropertyPositions = STokenQuery.positionsOfProperty(_propertyaddress);
        uint256[] memory OwnerPositions = STokenQuery.positionsOfOwner(_owner);
        uint256 CurrentTokenID = STokenQuery.currentIndex();
        return (PropertyPositions, OwnerPositions, CurrentTokenID);
    }
    // similarly you can call other functions from the interface
}