import React from 'react';
import Idenabi from "../contracts/artifacts/contracts/Identity.sol/Identity.json";
import { useState } from 'react';
import { ethers } from 'ethers';
import Reqabi from '../contracts/artifacts/contracts/Requests.sol/Requests.json';

import { useParams } from 'react-router-dom';
import { useSigner } from 'wagmi';


const AddAddr = () => {

    const params = useParams();
    var userId = params.userId;

    const { data: signer } = useSigner();
    const[chain,setChain]=useState("");
    const[addr,setAddr]=useState("");

    const idencontract = new ethers.Contract(
        "0x157ae817FCAd5a0d07E0Cc4BDcAC6dd525a1bef1",
        Idenabi.abi,
        signer
    );

    const addAddress= async () => {
        const tx = await idencontract.addAddress(userId,addr,chain);
    }

    return ( 
        <div className='flex flex-col w-screen h-screen justify-center items-center shadow-solid' >
            <div className='flex flex-col border-2 border-black h-fit w-[45%] justify-between '>
        <div className='flex flex-col justify-between items-center bg-filler w-full'>
            <p className='text-xl text-bgwhite p-2 font-bold'>Add Address</p>
        </div>
        <div className='flex flex-col justify-between items-center w-full h-fit'>
            <input onChange={(e)=>setAddr(e.target.value)} type='text' className='border-2 my-2 border-black w-[80%] h-10 rounded-md p-2' placeholder='Enter Address' />
            <select onChange={(e)=>setChain(e.target.value)} >
                <option value='homestead'>Ethereum</option>
                <option value='matic'>Polygon</option>
            </select>
            <button onClick={addAddress} className='text-xl bg-filler text-bgwhite p-2 my-2 font-bold'>Add Address </button>
        </div>
    </div>
        </div>
     );
}
 
export default AddAddr;