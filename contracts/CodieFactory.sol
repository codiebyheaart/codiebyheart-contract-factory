// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./CodieContract.sol";

/// @title CodieFactory
/// @notice Factory contract that deploys CodieContract instances and keeps a registry.
contract CodieFactory {
    event ContractCreated(address indexed contractAddress, address indexed owner, string name);

    address[] public allContracts;

    function createContract(string calldata _name) external returns (address) {
        CodieContract c = new CodieContract(_name, msg.sender);
        address addr = address(c);
        allContracts.push(addr);
        emit ContractCreated(addr, msg.sender, _name);
        return addr;
    }

    function getAllContracts() external view returns (address[] memory) {
        return allContracts;
    }

    function count() external view returns (uint256) {
        return allContracts.length;
    }
}
