import React from 'react';
import { Sdk, MetaMaskWalletProvider } from 'etherspot';

const Finances = () => {

  const createScw = async () => {
    if (!MetaMaskWalletProvider.detect()) {
      console.log('MetaMask not detected');
      return;
    }
  
    const walletProvider = await MetaMaskWalletProvider.connect();
  
    const sdk = new Sdk(walletProvider);

    const output = await sdk.computeContractAccount();

    console.info('SDK created',sdk);
    console.log('contract account', output);
  
  }

  return (
    <div className="flex flex-col bg-white w-screen h-screen justify-center items-center font-mono text-textcolor">
      <div className="flex flex-row w-[80%] h-[80%] bg-bgwhite border-4 border-black shadow-solid ">
        <div className="flex flex-col w-[70%] h-full p-14 border-r-4 border-black"></div>
        <div className="flex flex-col w-[30%] h-full justify-center items-center">
          <div className="flex p-4  flex-col  justify-center content-center  items-center ">
            <div className="bg-blue-300 rounded-full w-40 h-40"> </div>
                <p>0xankush</p>
                <button className="text-2xl font-extrabold self-start mt-6 bg-filler text-bgwhite border-4 border-black shadow-solid px-4 py-2 w-[250px] hover:bg-bgwhite hover:text-filler">Pay</button>
                <button className="text-2xl font-extrabold self-start mt-6 bg-filler text-bgwhite border-4 border-black shadow-solid px-4 py-2 w-[250px] hover:bg-bgwhite hover:text-filler">Lend/Borrow</button>
                <button className="text-2xl font-extrabold self-start mt-6 bg-filler text-bgwhite border-4 border-black shadow-solid px-4 py-2 w-[250px] hover:bg-bgwhite hover:text-filler">Swap</button>
                <button className="text-2xl font-extrabold self-start mt-6 bg-filler text-bgwhite border-4 border-black shadow-solid px-4 py-2 w-[250px] hover:bg-bgwhite hover:text-filler">Bridge</button>
                <button onClick={()=>createScw()} className="text-2xl font-extrabold self-start mt-6 bg-filler text-bgwhite border-4 border-black shadow-solid px-4 py-2 w-[250px] hover:bg-bgwhite hover:text-filler">Create Contract</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finances;
