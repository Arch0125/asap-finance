import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Reqabi from '../contracts/artifacts/contracts/Requests.sol/Requests.json';
import Idenabi from '../contracts/artifacts/contracts/Identity.sol/Identity.json';

import { useParams } from 'react-router-dom';
import { useSigner } from 'wagmi';



const Pay = () => {
    
    const params = useParams();
    var userId = params.userId;
    const[chain,setChain]=useState('');
    const[addr,setAddr]=useState('');
    const[amount,setAmount]=useState('');
    const[profileid,setProfileid]=useState('');

    const { data: signer } = useSigner();

    const reqcontract = new ethers.Contract('0x06075abF9F473a679b9D5e4B2a5bc72357f7cfa1', Reqabi.abi, signer);
    const idencontract = new ethers.Contract('0xF88FCdef5A9662087d6b596766f9dcD890C94B29', Idenabi.abi, signer);
    const[ethaddress, setethaddress] = React.useState([]);
    const[bscaddress, setbscaddress] = React.useState([]);
    const[polygonaddress, setpolygonaddress] = React.useState([]);

    const getaddrs = async () => {
        const ethaadr = await idencontract.getAddress(userId,'homestead');
        const polygonaddr = await idencontract.getAddress(userId,'matic');
        setethaddress(ethaadr);
        setpolygonaddress(polygonaddr);
        console.log(polygonaddr);
    }


    return ( 
         <div className='flex flex-col bg-white w-screen h-screen justify-center items-center font-mono text-textcolor' >
            <div className='flex flex-row w-[80%] h-[80%] bg-bgwhite border-4 border-black shadow-solid ' >
                <div className='flex flex-col w-[70%] h-full p-14 border-r-4 border-black'>
                    <p className='text-4xl font-bold'>Pay {userId}</p>
                    <button className='mt-5 bg-filler text-bgwhite w-[40%] h-fit text-xl' onClick={()=>getaddrs()}>Get Addresses</button>
                </div>
                <div className='flex flex-col w-[30%] h-full p-14 border-r-4 border-black'>

                </div>
            </div>
        </div>
     );
}
 
export default Pay;