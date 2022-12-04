import React, { useEffect } from 'react';
import Idenabi from '../contracts/artifacts/contracts/Identity.sol/Identity.json';
import { ethers } from 'ethers';
import { useAccount, useSigner } from 'wagmi';
import { useParams } from 'react-router-dom';
import { Alchemy, Network } from "alchemy-sdk";

const Ens = () => {

    const params = useParams();
    var userId = params.userId;

    const { data: signer } = useSigner();

    const[socialinks, setsocialinks] = React.useState([]);
    const[ens, setens] = React.useState([]);
    
    const idencontract = new ethers.Contract('0xF88FCdef5A9662087d6b596766f9dcD890C94B29', Idenabi.abi, signer);
    const[polygonaddress, setpolygonaddress] = React.useState([]);

    const getaddrs = async () => {
        const ethaadr = await idencontract.getAddress(userId,'homestead');
        const polygonaddr = await idencontract.getAddress(userId,'matic');
        setpolygonaddress(polygonaddr);
        console.log(polygonaddr);
    }




    const config = {
        apiKey: "YzHKBAt0qAoVNBDuBz2StJ2uIXHy0ql-",
        network: Network.ETH_MAINNET
    };

    var enslist = [];

    const getens = async () => {

        const alchemy = new Alchemy(config);
        for(let i=0;i<polygonaddress.length;i++){
            try{
            console.log(polygonaddress[i]);
            const walletAddress = polygonaddress[i];
            const ensContractAddress = "0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85";
            const nfts = await alchemy.nft.getNftsForOwner(walletAddress, {
            contractAddresses: [ensContractAddress],
            });
            console.log(nfts.ownedNfts[0].title);
            setens((ens) => [...ens, nfts.ownedNfts[0].title]);}
            catch{
                console.log("error");
                continue;
            }

        }
    }


    useEffect(() => {
        getaddrs();
        getens();
        console.log(ens);
    },[])

    return ( 
        <div className='flex flex-col border-2 border-black h-fit w-[30%] justify-between '>
            <div className='flex flex-col justify-between items-center bg-filler w-full'>
                <p className='text-xl text-bgwhite p-2 font-bold'><button onClick={()=>getens()} >ENS Handles</button></p>
            </div>
            <div className='flex flex-col justify-between items-center w-full h-fit'>
                {
                   ens.map((item) => {
                        return(
                            <div className='flex flex-row' > 
                            <p className='text-md text-textcolor py-2 font-semibold'> {item}</p>
                            </div>
                        )
                   })
                }
            </div>
        </div>
     );
}
 
export default Ens;