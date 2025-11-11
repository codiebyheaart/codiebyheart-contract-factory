// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// @title CodieContract
/// @notice Simple contract created by CodieFactory that stores a name and an owner.
contract CodieContract {
    string public name;
    address public owner;
    uint256 public createdAt;

    event InfoUpdated(string newName);

    constructor(string memory _name, address _owner) {
        name = _name;
        owner = _owner;
        createdAt = block.timestamp;
    }

    function updateName(string calldata _newName) external {
        require(msg.sender == owner, "Only owner can update");
        name = _newName;
        emit InfoUpdated(_newName);
    }

    function getInfo() external view returns (string memory, address, uint256) {
        return (name, owner, createdAt);
    }
}
