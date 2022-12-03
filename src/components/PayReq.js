import React, { useState } from 'react';
import { ethers } from 'ethers';
import Reqabi from '../contracts/artifacts/contracts/Requests.sol/Requests.json';
import Idenabi from '../contracts/artifacts/contracts/Identity.sol/Identity.json';

import { useParams } from 'react-router-dom';
import { useSigner } from 'wagmi';



const PayReq = () => {
    
    const params = useParams();
    var userId = params.userId;
    const[chain,setChain]=useState('');
    const[addr,setAddr]=useState('');
    const[amount,setAmount]=useState('');
    const[profileid,setProfileid]=useState('');

    const { data: signer } = useSigner();

    const reqcontract = new ethers.Contract('0x06075abF9F473a679b9D5e4B2a5bc72357f7cfa1', Reqabi.abi, signer);
    const idencontract = new ethers.Contract('0xF88FCdef5A9662087d6b596766f9dcD890C94B29', Idenabi.abi, signer);

    const confirm = async()=>{
        var addr = await idencontract.getAddress(profileid.toString(),'matic');
        console.log(addr)
        setAddr(addr);
    }

    const sendReq = async()=>{
        const tx = await reqcontract.createReqs(profileid.toString(),chain.toString(),amount.toString(),signer._address);
        await tx.wait();
        console.log(tx);
    }


    return ( 
        <div className='flex flex-col border-2 border-black h-fit w-[45%] justify-between '>
        <div className='flex flex-col justify-between items-center bg-filler w-full'>
            <p className='text-xl text-bgwhite p-2 font-bold'>Request Payment</p>
        </div>
        <div className='flex flex-col justify-between items-center w-full h-fit'>
            <input onChange={(e)=>setProfileid(e.target.value)} type='text' className='border-2 border-black w-[80%] h-10 mt-4' placeholder='Profile ID' />
            <select className='flex flex-col w-[80%] mt-4' onClick={(e)=>setChain(e.target.value)} >
                <option value='homestead'>Ethereum</option>
                <option value='matic'>Polygon</option>
            </select>
            <input onChange={(e)=>setAmount(e.target.value)} type='text' className='border-2 border-black w-[80%] h-10 mt-4 mb-4' placeholder='Amount' />
            <p className='text-md text-textcolor py-2 font-semibold'>{(addr.toString()).slice(0,7)}...{(addr.toString()).slice(37)}</p>
            <button className='bg-filler text-bgwhite w-[80%] h-10 mt-4 mb-2' onClick={()=>confirm()}>Confirm</button>
            <button className='bg-filler text-bgwhite w-[80%] h-10 mt-2 mb-4' onClick={()=>sendReq()}>Send Request</button>

        </div>
    </div>
     );
}
 
export default PayReq;