//SPDX-License-Identifier:MIT
pragma solidity ^0.8.17;

contract Identity{

    struct profile{
        mapping (string => string[])addrs;
    }


    mapping (string => string) profileids;

    event AddressRegistered(
        string addr
    );

    mapping(string => profile) profiles;

    function createAccount(string memory _name, string memory _address, string memory chain )public {
        profiles[_name].addrs[chain].push(_address);
        profileids[_address]=_name;
        emit AddressRegistered(_address);
    }

    function addAddress(string memory _name, string memory _address, string memory chain ) public {
        profiles[_name].addrs[chain].push(_address);
        emit AddressRegistered(_address);
    }

    function getAddress(string memory _name, string memory chain) public view returns(string[] memory) {
        return profiles[_name].addrs[chain];
    }

    function getID(string memory _address) public view returns(string memory){
        return profileids[_address];
    }

}