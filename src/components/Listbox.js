import React from 'react';
import { useAccount, useSigner } from 'wagmi';
import Idenabi from '../contracts/artifacts/contracts/Identity.sol/Identity.json';
import { ethers } from 'ethers';
import { useParams } from 'react-router-dom';

const Listbox = () => {

    const{data: signer } = useSigner();
    const params = useParams();
    var userId = params.userId;
    const idencontract = new ethers.Contract('0x3922Ee5f7D47285Fe575DD8073FaeCed6A87f326', Idenabi.abi, signer);
    const[ethaddress, setethaddress] = React.useState([]);
    const[bscaddress, setbscaddress] = React.useState([]);
    const[polygonaddress, setpolygonaddress] = React.useState([]);

    const getaddrs = async () => {
        const ethaadr = await idencontract.getAddress(userId,'homestead');
        const polygonaddr = await idencontract.getAddress(userId,'maticmum');
        setethaddress(ethaadr);
        setpolygonaddress(polygonaddr);
        console.log(polygonaddr);
    }

    React.useEffect(() => {
        getaddrs();
    },[])

    console.log(polygonaddress);


    return ( 
        <div className='flex flex-col border-2 border-black h-fit w-[30%] justify-between '>
            <div className='flex flex-col justify-between items-center bg-filler w-full'>
                <p className='text-xl text-bgwhite p-2 font-bold'>Wallet Addresses</p>
            </div>
            <div className='flex flex-col justify-between items-center w-full h-fit'>
                {/* <p className='text-xl text-textcolor p-2 font-bold'>Ethereum</p> */}
                {
                    polygonaddress.map((item) => {
                        return(
                            <div className='flex flex-row' > 
                            <img src='https://cryptologos.cc/logos/polygon-matic-logo.svg?v=023' className='w-5 mr-2' /> 
                            <p className='text-md text-textcolor py-2 font-semibold'> {(item.toString()).slice(0,7)}...{(item.toString()).slice(37)}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default Listbox;