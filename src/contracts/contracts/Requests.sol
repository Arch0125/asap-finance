//SPDX-License-Identifier:MIT
pragma solidity^0.8.17;

contract Requests{

    struct reqdata{
        string profileid;
        string chain;
        string amount;
        string sender;
    }

    event reqemitter(string profileid, string chain, string amount, string sender);

    mapping(uint256 => reqdata)public reqdatas;
    uint256 reqid=0;

    function createReqs(string memory _profileid, string memory _chain, string memory _amount, string memory _sender) public {
        reqid++;
        reqdatas[reqid]=reqdata(_profileid,_chain,_amount,_sender);
        emit reqemitter(_profileid,_chain,_amount,_sender);
    }

    function getReqs(uint256 id) public view returns(reqdata memory){
        return reqdatas[id];
    }

    function getid()public view returns(uint256){
        return reqid;
    }

}