// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import {IAddressRegistry} from "@devprotocol/protocol-v2/contracts/interface/IAddressRegistry.sol";
import {IPropertyFactory} from "@devprotocol/protocol-v2/contracts/interface/IPropertyFactory.sol";

contract TestContract {
    /**
	 * @dev validates property address.
	 * @param _property Property address for validation check
     * Network: Mumbai Testnet
     * Address: 0xe2C16936413D74c667aeF0D040c920BF639067d4
     */
    function validatePropertyAddress(address _property) external view {
        IAddressRegistry registry = IAddressRegistry(0xe2C16936413D74c667aeF0D040c920BF639067d4);
        IPropertyFactory propertyFactory = IPropertyFactory(registry.registries("PropertyFactory"));
        require(propertyFactory.isProperty(_property), "not property address");
    }
}