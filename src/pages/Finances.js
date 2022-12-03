import React from 'react';
import { Sdk, MetaMaskWalletProvider } from 'etherspot';
import PayReq from '../components/PayReq';
import { useState } from 'react';

const Finances = () => {

  const[selection,setSelection]=useState('1')

  return (
    <div className="flex flex-col bg-white w-screen h-screen justify-center items-center font-mono text-textcolor">
      <div className="flex flex-row w-[80%] h-[80%] bg-bgwhite border-4 border-black shadow-solid ">
        <div className="flex flex-col w-[70%] h-full p-14 border-r-4 border-black">
          {
            selection == '1' ? <PayReq/> : <p>2</p>
          }
        </div>
        <div className="flex flex-col w-[30%] h-full justify-center items-center">
          <div className="flex p-4  flex-col  justify-center content-center  items-center ">
            <div className="bg-blue-300 rounded-full w-40 h-40"> </div>
                <p>0xankush</p>
                <button onClick={()=>setSelection(1)} className="text-2xl font-extrabold self-start mt-6 bg-filler text-bgwhite border-4 border-black shadow-solid px-4 py-2 w-[250px] hover:bg-bgwhite hover:text-filler">Pay</button>
                <button onClick={()=>setSelection(2)} className="text-2xl font-extrabold self-start mt-6 bg-filler text-bgwhite border-4 border-black shadow-solid px-4 py-2 w-[250px] hover:bg-bgwhite hover:text-filler">Lend/Borrow</button>
                <button onClick={()=>setSelection(3)} className="text-2xl font-extrabold self-start mt-6 bg-filler text-bgwhite border-4 border-black shadow-solid px-4 py-2 w-[250px] hover:bg-bgwhite hover:text-filler">Swap</button>
                <button onClick={()=>setSelection(4)} className="text-2xl font-extrabold self-start mt-6 bg-filler text-bgwhite border-4 border-black shadow-solid px-4 py-2 w-[250px] hover:bg-bgwhite hover:text-filler">Bridge</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finances;
