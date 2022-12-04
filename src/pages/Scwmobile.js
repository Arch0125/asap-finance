import React from 'react';
import { ethers } from "ethers";
import * as PushAPI from "@pushprotocol/restapi";
import { Sdk, NetworkNames } from 'etherspot';
import { useState } from 'react';
window.Buffer = window.Buffer || require("buffer").Buffer; 


const Scwmobile = () => {

    const[addr,setAddr]=useState('');

    const[recipient,setRecipient]=useState('');
    const[amount,setAmount]=useState('');
    
    let sdk = Sdk

    sdk = new Sdk('0x28c2fe4f62665ebdda37f35166a557786c02587a1ca06a216a5ca88aba22b11f', {
    networkName: 'matic'
    });

    const sendNotification = async() => {
        try {
          const PK = '2aab26bdb55aaf9c15cb1c0373b873608b5c008a3696d5bec39800e18332cedf'; // channel private key
          const Pkey = `0x${PK}`;
          const signer2 = new ethers.Wallet(Pkey);
          const apiResponse = await PushAPI.payloads.sendNotification({
            signer: signer2,
            type: 3, // target
            identityType: 2, // direct payload
            notification: {
              title: `SCW Created`,
              body: `SCW Created`
            },
            payload: {
              title: `SCW Created`,
              body: `SCW Created`,
              cta: '',
              img: ''
            },
            recipients: 'eip155:5:0xC5Db59D48700B6bC8D53cE773b21931d986DEa0E', // recipient address
            channel: 'eip155:5 :0xC5Db59D48700B6bC8D53cE773b21931d986DEa0E', // your channel address
            env: 'staging'
          });
          
          // apiResponse?.status === 204, if sent successfully!
          console.log('API repsonse: ', apiResponse);
        } catch (err) {
          console.error('Error: ', err);
        }
      }

    const createScwallet = async () => {
        const output = await sdk.computeContractAccount();
        setAddr(output.address);
        sendNotification();
        console.log('contract account', output);
    }
    
    const sendtx = async () => {
        // const sync = await sdk.syncAccount();
        // console.log(sync);
        await sdk.computeContractAccount();
        console.log(sdk.state.accountAddress);
        const output2 = await sdk.batchExecuteAccountTransaction({
            to: recipient,
            value: amount,
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
            <input type='text' placeholder='Recipient Address' className='bg-bgwhite text-textcolor p-2 rounded-md text-xl mb-2' onChange={(e)=>setRecipient(e.target.value)} />
            <input type='text' placeholder='Amount' className='bg-bgwhite text-textcolor p-2 rounded-md text-xl mb-2' onChange={(e)=>setAmount(e.target.value)} />
            <button onClick={()=>sendtx()} className='bg-filler text-bgwhite p-2 rounded-md font-bold text-xl'>Send Tx</button>
        </div>
     );
}
 
export default Scwmobile;