import React, { useEffect } from 'react';
import { Sdk, MetaMaskWalletProvider } from 'etherspot';

const SmartWallet = () => {

    const createScwallet = async () => {
        if (!MetaMaskWalletProvider.detect()) {
            console.log('MetaMask not detected');
            return;
          }
        
          const walletProvider = await MetaMaskWalletProvider.connect();
        
          const sdk = new Sdk(walletProvider);
          const output = await sdk.computeContractAccount();
        
          console.info('Smart Contract Wallet Address', output);
    }


    return ( 
        <div className='flex flex-col border-2 border-black h-fit w-full justify-between mt-14'>
            <div className='flex flex-col justify-between items-center bg-filler w-full '>
                <p className='text-xl text-bgwhite p-2 font-bold'>Smart Contract Wallet</p>
            </div>
            <div className='flex flex-col justify-between items-center w-full h-fit'>
                <button onClick={()=>createScwallet()} >Create SCW</button>
            </div>
        </div>
     );
}
 
export default SmartWallet;