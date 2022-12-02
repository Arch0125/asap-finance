//SPDX-License-Identifier:MIT
pragma solidity^0.8.17;

contract Socials{
    mapping(string => string[]) public socials;

    function addSocials(string memory _profile,string memory _link)public{
        socials[_profile].push(_link);
    }

    function getSocials(string memory _profile) public view returns (string[] memory){
        return socials[_profile];
    }
}