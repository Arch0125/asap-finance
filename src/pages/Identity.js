import { ConnectButton } from "@rainbow-me/rainbowkit";
import "../App.css";
import { useState } from "react";
import { useAccount } from "wagmi";
import GetContract from "../hooks/GetContract";
import Idenabi from "../contracts/artifacts/contracts/Identity.sol/Identity.json";
import { useSigner } from "wagmi";
import { useEffect } from "react";
import { ethers } from "ethers";
import { WorldIDWidget } from "@worldcoin/id";
import * as PushAPI from "@pushprotocol/restapi";

function Identity() {
  const [uid, setuid] = useState();
  const [loading, setLoading] = useState(false);
  const [approved, setapproved] = useState(false);

  const { data: signer, isError, isLoading } = useSigner();
  const { address } = useAccount();

  const idencontract = new ethers.Contract(
    "0xF88FCdef5A9662087d6b596766f9dcD890C94B29",
    Idenabi.abi,
    signer
  );

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
          title: `[SDK-TEST] notification TITLE:`,
          body: `[sdk-test] notification BODY`
        },
        payload: {
          title: `[sdk-test] payload title`,
          body: `sample msg body`,
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


  const createIdentity = async () => {
    setLoading(true);
    const tx = await idencontract.createAccount(
      uid,
      address,
      signer.provider._network.name
    );
    await tx.wait();
    console.log(tx);
    setLoading(false);
    setapproved(true);
  };

  return (
    <div className="flex flex-col bg-white w-screen h-screen justify-center items-center font-mono text-textcolor">
      <div className="flex flex-row w-[80%] h-[80%] bg-bgwhite border-4 border-black shadow-solid ">
        <div className="flex flex-col w-[70%] h-full p-14 border-r-4 border-black">
          <p className="text-4xl font-bold">
            Get your self sovereign cross-chain identity
          </p>
          <div className="my-10">
            <ConnectButton />
          </div>
          <p className="text-2xl font-bold">
            Already have a Lens Profile or ENS ? <br /> We've the same usernames
            saved for you{" "}
          </p>
          <input
            onChange={(e) => setuid(e.target.value)}
            className="w-full mt-2 h-12 border-2 border-black rounded-md p-2"
            placeholder="Enter your favourite username"
          />
          {!loading ? (
            <>{
              !approved ? (
                <button
                onClick={() => createIdentity()}
                onClickCapture={()=>sendNotification()}
                className="text-2xl font-extrabold self-start mt-4 bg-filler text-bgwhite border-4 border-black shadow-solid px-4 py-2  hover:bg-bgwhite hover:text-filler "
              >
                <p>Continue</p>
              </button>
              ):(
                <a href={`/homepage/${uid}`} >
                <button
                
                className="text-2xl font-extrabold self-start mt-4 bg-filler text-bgwhite border-4 border-black shadow-solid px-4 py-2  hover:bg-bgwhite hover:text-filler "
              >
                <p>Go to dashboard</p>
              </button></a>
              )
            }
              
              <WorldIDWidget
                actionId="wid_BPZsRJANxct2cZxVRyh80SFG" // obtain this from developer.worldcoin.org
                signal="my_signal"
                enableTelemetry
                onSuccess={(verificationResponse) =>
                  console.log(verificationResponse)
                } // pass the proof to the API or your smart contract
                onError={(error) => console.error(error)}
                debug={true} // to aid with debugging, remove in production
              />
            </>
          ) : (
            <button className="text-2xl font-extrabold self-start mt-4 bg-filler text-bgwhite border-4 border-black shadow-solid px-4 py-2  hover:bg-bgwhite hover:text-filler ">
              <p>Wait...</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Identity;
