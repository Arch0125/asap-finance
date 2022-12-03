//SPDX-License-Identifier:MIT
pragma solidity^0.8.17;

contract Vault{

    address immutable owner;

    constructor(){
        owner=msg.sender;
    }

    mapping(address => string) public encrypkey;
    mapping(address => bool) public approved;

    function setApproval(address guardian, string memory _key) public {
        encrypkey[msg.sender]=_key;
        approved[guardian]=true;
    }

    function getKeys()public view returns(string memory){
        require(msg.sender == owner || approved[msg.sender]==true);
        return encrypkey[owner];
    }
}