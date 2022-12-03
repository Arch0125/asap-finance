import React from 'react';
import { Sdk, NetworkNames } from 'etherspot';
import { useState } from 'react';

const Scwmobile = () => {

    const[addr,setAddr]=useState('');
    
    let sdk = Sdk

    sdk = new Sdk('0x28c2fe4f62665ebdda37f35166a557786c02587a1ca06a216a5ca88aba22b11f', {
    networkName: 'matic'
    });

    const createScwallet = async () => {
        const output = await sdk.computeContractAccount();
        setAddr(output.address);
        console.log('contract account', output);
    }

    return ( 
        <div className='flex flex-col w-screen h-screen justify-center items-center' >
            <button onClick={()=>createScwallet()} className='bg-filler text-bgwhite p-2 rounded-md font-bold text-xl'>Deploy SCW</button>
            <p className='text-xl text-textcolor p-2 font-bold'>{(addr.toString()).slice(0,7)}...{(addr.toString()).slice(37)}</p>
        </div>
     );
}
 
export default Scwmobile;