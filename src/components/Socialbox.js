import React, { useEffect } from 'react';
import Socialabi from '../contracts/artifacts/contracts/Socials.sol/Socials.json';
import { ethers } from 'ethers';
import { useAccount, useSigner } from 'wagmi';
import { useParams } from 'react-router-dom';

const Socialbox = () => {

    const params = useParams();
    var userId = params.userId;

    const { data: signer } = useSigner();

    const[socialinks, setsocialinks] = React.useState([]);
    
    const socialcontract = new ethers.Contract('0xCE4f1F0b509c13332142E0404b2BE548BA3f5f98', Socialabi.abi, signer);

    const getsocials = async () => {
        const tx = await socialcontract.getSocials(userId);
        setsocialinks(tx);
    }

    useEffect(() => {
        getsocials();
        console.log(socialinks);
    })

    return ( 
        <div className='flex flex-col border-2 border-black h-fit w-[30%] justify-between '>
            <div className='flex flex-col justify-between items-center bg-filler w-full'>
                <p className='text-xl text-bgwhite p-2 font-bold'>Socials</p>
            </div>
            <div className='flex flex-col justify-between items-center w-full h-fit'>
                {/* <p className='text-xl text-textcolor p-2 font-bold'>Ethereum</p> */}
                {
                    socialinks.map((item) => {
                        return(
                            <div className='flex flex-row' > 
                            <p className='text-md text-textcolor py-2 font-semibold'>{item}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default Socialbox;