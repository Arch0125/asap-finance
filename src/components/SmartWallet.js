import React, { useEffect } from 'react';
import { Sdk, MetaMaskWalletProvider } from 'etherspot';
import { useState } from 'react';

const SmartWallet = () => {

    const[loading,setLoading]=useState(false);
    const[wallet,setWallet]=useState('');
    const[status,setStatus]=useState('');

    const createScwallet = async () => {

        setLoading(true);


        if (!MetaMaskWalletProvider.detect()) {
            console.log('MetaMask not detected');
            return;
          }
        
          const walletProvider = await MetaMaskWalletProvider.connect();
        
          const sdk = new Sdk(walletProvider);
          const output = await sdk.computeContractAccount();
          setWallet(output.address);
          setStatus(output.status);

          setLoading(false);
        
          console.info('Smart Contract Wallet Address', output);
    }

    useEffect(() => {
        createScwallet();
    },[])


    return ( 
        <div className='flex flex-col border-2 border-black h-fit w-full justify-between mt-14'>
            <div className='flex flex-col justify-between items-center bg-filler w-full '>
                <p className='text-xl text-bgwhite p-2 font-bold'>Smart Contract Wallet</p>
            </div>
            <div className='flex flex-col justify-between items-center w-full h-fit'>
                {
                    loading ? <p className='text-xl text-textcolor p-2 font-bold'>Loading...</p> : <p className='text-xl text-textcolor p-2 font-bold'>{wallet}</p>
                }
            </div>
        </div>
     );
}
 
export default SmartWallet;