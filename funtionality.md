Currently, there's an anonymous proof of membership enabling withdrawls

    -- Add deposit (into mixer) functionality 
        -- displays your private note (i.e. treat as private key)
        -- store encrypted notes on-chain
    -- Withdraw (Note + recipient address)
    -- Display anonymity set
    -- Transfer funcionality inside circuit?

    -- Expand circuit 
        -- Computes MiMC([left, right]) hash for recursively constructing merkle root
        -- Verifies merkle proof is correct for merkle root and leaf
        -- Computes Pedersen(nullifier + secret) hash

    -- Currently supported circuit functionality
        -- Verify commitment corresponds to secret/nullifier pair in merkle tree


    -- Worklflow:
        -- Inside frontend (request user inputs (witnesses))
        -- Create a proof from compiled circuit.was
        -- after creating proof, supply proof along with other inputs to verifier contract through solidity smart contract

Description:

Coin mixers = provide on-chain privacy by breaking transaction link between sender and reciever addresses using ZKP

    deposit = provide commitment (hash(nullifier, secret)), merkle tree root of commitments stored in smart contract
    withdraw = provide nullifier (unique ID), ZKP proves connection without revealing which nulliifer is associated with which commitment
        -- zkp proves your commitment is in merkle tree + nullifier to ensure withdraw only once
        -- The commitment is generated from the nullifier and a secret by hashing