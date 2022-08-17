// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import {IAddressConfig} from "@devprotocol/protocol/contracts/interface/IAddressConfig.sol";
import {IPropertyGroup} from "@devprotocol/protocol/contracts/interface/IPropertyGroup.sol";

contract TestContract {
	/**
	 * @dev validates property address.
	 * @param _property Property address for validation check
     * Network: Ethereum Mainnet
     * Address: 0x1D415aa39D647834786EB9B5a333A50e9935b796
     */
	function validatePropertyAddress(address _property) external view {
		IAddressConfig addressConfig = IAddressConfig(0x1D415aa39D647834786EB9B5a333A50e9935b796);
		IPropertyGroup propertyGroup = IPropertyGroup(addressConfig.propertyGroup());
		require(propertyGroup.isGroup(_property), "not property address");
	}
}