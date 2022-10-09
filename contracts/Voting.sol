// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "hardhat/console.sol";

interface IVerifier {
    function verify(bytes calldata) external view returns (bool);
}

contract Poll is Ownable, ReentrancyGuard {

    mapping(bytes32 => bool) public choices;
    mapping(bytes32 => uint256) public votes;

    bytes32 public root;
    address public creator;

    // a nullifier is necessary to prevent someone from voting twice
    mapping(bytes32 => bool) public nullifierHashes;
    // we store all commitments just to prevent repeated voting
    mapping(uint256 => bool) public commitments;

    IVerifier public verifier;

    event Vote(bytes32 indexed commitments, uint32 leafIndex, uint256 timestamp);
    event Withdrawal(address to, bytes32 nullifierHashes);


    constructor(
        IVerifier _verifier,
        bytes32 _root,
        uint256[] memory _commitments,
        bytes32[] memory _choices
        // Hasher _hasher Will need a hasher to switch to an on-chain merkle tree
    ) {
        verifier = _verifier;
        root = _root;
        for (uint i = 0; i < _commitments.length; i++) {
            commitments[_commitments[i]] = true;
        }
        for (uint i = 0; i < _choices.length; i++) {
            choices[_choices[i]] = true;
            votes[_choices[i]] = 0;
        }
    }


    function updateCreator(address newCreatorAddress) public onlyOwner() {
        require(newCreatorAddress != address(0), "New token address is invalid");

        creator = newCreatorAddress;
    }

    function updateRoot(bytes32 newRoot) public onlyOwner() {
        root = newRoot;
    }

    function updateRoot(uint256[] memory newCommitments) public onlyOwner() {
        for (uint i = 0; i < newCommitments.length; i++) {
            commitments[newCommitments[i]] = true;
        }
    }

    function updateChoices(bytes32[] memory newChoices) public onlyOwner() {
        for (uint i = 0; i < newChoices.length; i++) {
            choices[newChoices[i]] = true;
        }
    }


    function vote(
        bytes calldata proof,
        bytes32 _root,
        uint256 _commitment,
        bytes32 choice
    ) external nonReentrant {
        bytes32 _nullifierHash;
        assembly {
                _nullifierHash := calldataload(add(calldataload(0x04), 0x44))
        } 

        // checks 
        require(!nullifierHashes[_nullifierHash], "The vote has already been cast");
        require(root == _root, "Cannot find your merkle root");
        require(commitments[_commitment], "Commitment is not found in the set!");
        require(choices[choice], "Choice does not exist");
    
        bool proofResult = verifier.verify(proof);
        require(proofResult, "Invalid withdraw proof");

        // add one vote to choice
        votes[choice] += 1;

        // Set nullifier hash to true
        nullifierHashes[_nullifierHash] = true;
    }

}

