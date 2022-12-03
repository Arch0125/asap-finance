import React from 'react';
import Vaultabi from '../contracts/artifacts/contracts/Vault.sol/Vault.json';
import { ethers } from 'ethers';
import { useSigner } from 'wagmi';
import { useState } from 'react';

const Mpc = () => {

    const{data:signer}=useSigner();

    var CryptoJS = require('crypto-js')

    var key='0x28c2fe4f62665ebdda37f35166a557786c02587a1ca06a216a5ca88aba22b11f';
    var encry = CryptoJS.enc.Utf8.parse(key).toString(CryptoJS.enc.Base64);



    const vault1 = new ethers.Contract('0x6e0d6486Ae0991D6671729dBDc0ba99aD9fb4590',Vaultabi.abi,signer);
    const vault2 = new ethers.Contract('0x35f44B6123600cD1B1d5E68b46c1233Ca614f21d',Vaultabi.abi,signer);
    const vault3 = new ethers.Contract('0x1D6e5F9C6C32D36c6fB3fEC579077D21d90854C9',Vaultabi.abi,signer);


    const[addr1,setAddr1]=useState('');
    const[addr2,setAddr2]=useState('');
    const[addr3,setAddr3]=useState('');

    const confirmTx = async () => {
        await vault1.setApproval(addr1,encry.slice(0,22));
        await vault2.setApproval(addr2,encry.slice(22,44));
        await vault3.setApproval(addr3,encry.slice(44,65));
    }

    return ( 
        <div className='flex flex-col border-2 border-black h-fit w-full justify-between mt-14'>
            <div className='flex flex-col justify-between items-center bg-filler w-full '>
                <p className='text-xl text-bgwhite p-2 font-bold'>Add Guardians</p>
            </div>
            <div className='flex flex-col justify-between items-center w-full h-fit'>
            <input onChange={(e)=>setAddr1(e.target.value)} className='w-full mt-2 h-12 border-2 border-black rounded-md p-2' placeholder='1st Guardian Address' />
            <input onChange={(e)=>setAddr2(e.target.value)} className='w-full mt-2 h-12 border-2 border-black rounded-md p-2' placeholder='2nd Guardian Address' />
            <input onChange={(e)=>setAddr3(e.target.value)} className='w-full mt-2 h-12 border-2 border-black rounded-md p-2' placeholder='3rd Guardian Address' />
            <button onClick={()=>confirmTx()} className='w-full mt-2 h-12 bg-filler text-bgwhite border-2 border-black rounded-md p-2'>Confirm Guardians</button>
            </div>
        </div>
     );
}
 
export default Mpc;