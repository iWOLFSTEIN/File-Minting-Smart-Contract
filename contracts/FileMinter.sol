//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.14;
import "hardhat/console.sol";

contract FileMinter{

    struct FileMetaData{
        address ownerWalletAddress;
        bool isExist;
    }

mapping(bytes32 => FileMetaData) records;
mapping(address => bytes32[]) users;

event mintSuccessful(address walletAddress,bytes32 fileHash);

function mintFile(address walletAddress, bytes32 fileHash) public{

    if (records[fileHash].isExist){
         revert('File Already Minted to Someone');
    }


    records[fileHash] = FileMetaData(walletAddress, true);

    bytes32 [] storage allMintedFiles  =  users[walletAddress];
    allMintedFiles.push(fileHash);

    users[walletAddress] = allMintedFiles;
    

    emit mintSuccessful(walletAddress, fileHash);
}

function myMintFiles(address walletAddress) public view returns(bytes32[] memory){
        
    bytes32 [] storage allMintedFiles = users[walletAddress];

    return allMintedFiles;

}

function isConnectionExtablished() public pure returns(bool){
    return true;
}

}

