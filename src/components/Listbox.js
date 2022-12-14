import React from 'react';
import { useAccount, useSigner } from 'wagmi';
import Idenabi from '../contracts/artifacts/contracts/Identity.sol/Identity.json';
import { ethers } from 'ethers';
import { useParams } from 'react-router-dom';

const Listbox = () => {

    const{data: signer } = useSigner();
    const params = useParams();
    var userId = params.userId;
    const idencontract = new ethers.Contract('0xF88FCdef5A9662087d6b596766f9dcD890C94B29', Idenabi.abi, signer);
    const[ethaddress, setethaddress] = React.useState([]);
    const[bscaddress, setbscaddress] = React.useState([]);
    const[polygonaddress, setpolygonaddress] = React.useState([]);

    const getaddrs = async () => {
        const ethaadr = await idencontract.getAddress(userId,'homestead');
        const polygonaddr = await idencontract.getAddress(userId,'matic');
        setethaddress(ethaadr);
        setpolygonaddress(polygonaddr);
        console.log('Address',polygonaddr);
    }

    React.useEffect(() => {
        getaddrs();
    },[])

    return ( 
        <div className='flex flex-col border-2 border-black h-fit w-[30%] justify-between '>
            <div className='flex flex-col justify-between items-center bg-filler w-full'>
                <p className='text-xl text-bgwhite p-2 font-bold'>Wallet Addresses</p>
            </div>
            <div className='flex flex-col justify-between items-center w-full h-fit'>
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
            <div className='flex flex-col justify-between items-center bg-filler w-full'>
                <a href={`/addaddress/${userId}`} ><button className='text-xl text-bgwhite p-2 font-bold'>Add Address </button></a>
            </div>
        </div>
     );
}
 
export default Listbox;