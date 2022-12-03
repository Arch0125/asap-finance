import { useParams } from "react-router-dom";
import Listbox from "./components/Listbox";
import Idenabi from "./contracts/artifacts/contracts/Identity.sol/Identity.json";
import { ethers } from "ethers";
import { useSigner } from "wagmi";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import { useState } from "react";
import Socialbox from "./components/Socialbox";
import SmartWallet from "./components/SmartWallet";

function Homepage() {
  const params = useParams();
  var userId = params.userId;

  const { data: signer } = useSigner();
  const { data: account } = useAccount();
  const [loading, setLoading] = useState(false);
  const [onchainid, setonchainid] = useState("");
  const [approved, setapproved] = useState(false);

  const idencontract = new ethers.Contract(
    "0x157ae817FCAd5a0d07E0Cc4BDcAC6dd525a1bef1",
    Idenabi.abi,
    signer
  );

  const getprofile = async () => {
    console.log(signer);
    const tx = await idencontract.getID(signer._address);
    setonchainid(tx);
    console.log(tx);
  };

  useEffect(() => {
    setLoading(true);
    getprofile();
    if (userId == onchainid) {
      setapproved(true);
    }
    setLoading(false);
  });

  return !loading ? (
    approved ? (
      <div className="flex flex-col bg-white w-screen h-screen justify-center items-center font-mono text-textcolor">
        <div className="flex  flex-row w-[80%] h-[80%] bg-bgwhite border-4 border-black shadow-solid ">
          <div className="flex flex-col w-[80%] h-full p-14 border-r-4 border-black">
            <p className="text-4xl font-bold">
              Welcome to ASAP! <br />
              Your web3 world in a single dashboard{" "}
            </p>
            <div className="flex flex-row mt-4 w-full justify-between ">
              <Listbox />
              <Socialbox />
            </div>
              <SmartWallet/>
          </div>
          <div className="flex p-4  flex-col  justify-center content-center  items-center ">
            <div className="bg-blue-300 rounded-full w-40 h-40"> </div>
            <p className="text-2xl font-bold mt-4"> {onchainid} </p>
          </div>
        </div>
        <a href="/finances">
          <button className="flex  flex-row w-[80%] p-4 mt-5 bg-filler border-4 border-4 border-black shadow-solid">
            <p className="text-2xl text-bgwhite font-bold">
              Manage your onchain Finances →
            </p>
          </button>
        </a>
      </div>
    ) : (
      <div className="flex flex-col bg-white w-screen h-screen justify-center items-center font-mono text-textcolor">
        <p className="text-4xl font-bold">You are not authorized</p>
      </div>
    )
  ) : (
    <div className="flex flex-col bg-white w-screen h-screen justify-center items-center font-mono text-textcolor">
      <p className="text-4xl font-bold">Loading...</p>
    </div>
  );

  // <>
}
export default Homepage;
