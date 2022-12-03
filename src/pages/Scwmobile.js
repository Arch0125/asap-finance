import React from 'react';
import { Sdk, NetworkNames } from 'etherspot';
import { useState } from 'react';
window.Buffer = window.Buffer || require("buffer").Buffer; 


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
    
    const sendtx = async () => {
        // const sync = await sdk.syncAccount();
        // console.log(sync);
        await sdk.computeContractAccount();
        console.log(sdk.state.accountAddress);
        const output2 = await sdk.batchExecuteAccountTransaction({
            to: '0x95EC143788880B8b3Cb84EFc0286AA235bC14244',
            value: '0x016345785d8a0000',
        });
        console.log('batch execute account transaction', output2);
        const output = await sdk.estimateGatewayBatch();
        console.log('estimate gateway batch', output);
        const submit = await sdk.submitGatewayBatch();
        console.log('contract account', submit);
    }
    return ( 
        <div className='flex flex-col w-screen h-screen justify-center items-center' >
            <button onClick={()=>createScwallet()} className='bg-filler text-bgwhite p-2 rounded-md font-bold text-xl'>Deploy SCW</button>
            <p className='text-xl text-textcolor p-2 font-bold'>{(addr.toString()).slice(0,7)}...{(addr.toString()).slice(37)}</p>
            <button onClick={()=>sendtx()} className='bg-filler text-bgwhite p-2 rounded-md font-bold text-xl'>Send Tx</button>
        </div>
     );
}
 
export default Scwmobile;