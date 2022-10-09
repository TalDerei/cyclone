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

contract Subscription is Ownable, ReentrancyGuard {
    bytes32 public preRoot;
    bytes32 public subRoot;
    uint256 public pricePerWeek;  // price of sub for 1 week
    uint256 public minSubWeeks;
    address public token;  // currency of sub
    address public creator;

    mapping (address => IERC20) public tokenERC20Map;

    // a nullifier is necessary to prevent someone from performing the same withdrawal twice
    mapping(bytes32 => bool) public preNullifierHashes;
    // we store all commitments just to prevent accidental deposits with the same commitment
    mapping(uint256 => bool) public preCommitments;

    // a nullifier is necessary to prevent someone from performing the same withdrawal twice
    mapping(bytes32 => bool) public subNullifierHashes;
    // we store all commitments just to prevent single sub from being used forever
    mapping(uint256 => uint256) public subCommitments;

    IVerifier public verifier;

    event Subscribe(address to, bytes32 nullifierHashes);


    constructor(
        IVerifier _verifier,
        uint256 _pricePerWeek,
        bytes32 _preRoot,
        bytes32 _subRoot,
        uint256 _minSubWeeks,
        address _token,
        uint256[] memory _preCommitments,
        uint256[] memory _subCommitments,
        uint256[] memory _subDeadlines
        // Hasher _hasher Will need a hasher to switch to an on-chain merkle tree
    ) {
        require(_subCommitments.length == _subDeadlines.length, "subCommitments and subDeadlines should be same length");
        verifier = _verifier;
        pricePerWeek = _pricePerWeek;
        preRoot = _preRoot;
        subRoot = _subRoot;
        minSubWeeks = _minSubWeeks;
        token = _token;
        tokenERC20Map[_token] = IERC20(_token);
        for (uint i = 0; i < _preCommitments.length; i++) {
            preCommitments[_preCommitments[i]] = true;
        }
        for (uint i = 0; i < _subCommitments.length; i++) {
            subCommitments[_subCommitments[i]] = _subDeadlines[i];
        }
    }

    function updateOwner(address newOwner) public onlyOwner {
        require(newOwner != address(0), "New owner address is invalid");
        transferOwnership(newOwner);
    }


    function updateCreator(address newCreatorAddress) public onlyOwner() {
        require(newCreatorAddress != address(0), "New token address is invalid");

        creator = newCreatorAddress;
    }

    function updatePreRoot(bytes32 newPreRoot) public onlyOwner() {
        preRoot = newPreRoot;
    }

    function updateSubRoot(bytes32 newSubRoot) public onlyOwner() {
        subRoot = newSubRoot;
    }

    function updatePricePerWeek(uint256 newPricePerWeek) public onlyOwner() {
        pricePerWeek = newPricePerWeek;
    }

    function updateMinSubDuration(uint256 newMinSubWeeks) public onlyOwner() {
        minSubWeeks = newMinSubWeeks;
    }


    function isSub(
        bytes calldata proof,
        bytes32 _root,
        uint256 _commitment
    ) public view returns (bool) {
        bytes32 _nullifierHash;
        assembly {
                _nullifierHash := calldataload(add(calldataload(0x04), 0x44))
        } 

        // checks 
        require(subNullifierHashes[_nullifierHash], "Sub nullifier hash not found");
        require(subRoot == _root, "Cannot find your merkle root");
        require(subCommitments[_commitment] >= block.timestamp, "Sub has expired");
    
        bool proofResult = verifier.verify(proof);
        return proofResult;
    }


    function subscribe(
        bytes calldata proof,
        bytes32 _root,
        uint256 _commitment,
        uint256 amount
    ) external payable nonReentrant {
        uint256 recipient;
        bytes32 _nullifierHash;
        assembly {
                _nullifierHash := calldataload(add(calldataload(0x04), 0x44))
                recipient := calldataload(add(calldataload(0x04), 0x64))
        } 
        address payable _recipient = payable(address(uint160(recipient)));

        // checks 
        require(!preNullifierHashes[_nullifierHash], "The note has been already spent");
        require(preRoot == _root, "Cannot find your merkle root");
        require(preCommitments[_commitment], "Commitment is not found in the set!");
        require(amount >= pricePerWeek, "amount needs to be higher than minimum price");
    
        bool proofResult = verifier.verify(proof);
        require(proofResult, "Invalid subscribe proof");

        // Set nullifier hash to true
        preNullifierHashes[_nullifierHash] = true;

        uint256 numWeeks = amount / (amount % pricePerWeek);
        uint256 actualAmount = numWeeks * pricePerWeek;

        // check approval to transfer from
        uint256 allowance = tokenERC20Map[token].allowance(msg.sender, address(this));
        require(allowance >= actualAmount, "check token allowance");

        tokenERC20Map[token].transferFrom(msg.sender, creator, actualAmount);

        uint256 addedSeconds = numWeeks * 1 weeks;

        if (subCommitments[_commitment] < block.timestamp) {
            subCommitments[_commitment] = block.timestamp + addedSeconds;
        } else {
            subCommitments[_commitment] += addedSeconds;
        }

        emit Subscribe(_recipient, _nullifierHash);
    }

}
