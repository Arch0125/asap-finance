
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '../App.css';
import { useAccount } from 'wagmi';

function Signup() {

const { address, isConnecting, isDisconnected } = useAccount()

  return (
    <div className='flex flex-col bg-white w-screen h-screen justify-center items-center font-mono text-textcolor' >
      <div className='flex flex-row w-[80%] h-[80%] bg-bgwhite border-4 border-black shadow-solid ' >
        <div className='flex flex-col w-[70%] h-full p-14 border-r-4 border-black'>
            <p className='text-4xl font-bold'>"Not your keys, Not your Crypto"</p>
            <p className='text-2xl mt-4 mb-7 font-bold'>Well not from now, we bring you the most secure way to store and recover you private key</p>
            <ConnectButton/>
            {
                address?(
                    <div className='mt-7'>
                    <br/>

                    <p className='text-2xl font-bold'>Enter the details below</p>
                    <input className='w-full mt-2 h-12 border-2 border-black rounded-md p-2' placeholder='Private Key'/>
                    <input className='w-full mt-2 h-12 border-2 border-black rounded-md p-2' placeholder='Guardian Wallet Address'/>
                    <input className='w-full mt-2 h-12 border-2 border-black rounded-md p-2' placeholder='Email (You will be contacted through this while recovery)'/>
                    
                    <div className='flex flex-col mt-4 justify-between w-full h-fit mt-2' >
                        <button className='text-2xl font-extrabold self-start mt-4 bg-filler text-bgwhite border-4 border-black shadow-solid px-4 py-2  hover:bg-bgwhite hover:text-filler ' > 
                            <p>Continue</p>
                        </button>
                        <button className='text-xl font-extrabold self-start mt-4 bg-filler text-bgwhite border-4 border-black shadow-solid px-4 py-1  hover:bg-bgwhite hover:text-filler ' > 
                            <p>Skip ></p>
                        </button>
                    </div>
                    </div>
                ):(
                    <div className='mt-7'>
                        <p className='text-2xl font-bold'>Return to this page when you get 12-key seed phrase</p>
                        <br/>
                        <hr className='border-textcolor' />
                        <br/>
                        <p className='text-2xl justify-end self-end font-bold'>Already have a wallet ? <span className='text-filler'>Click Here</span> </p>
                    </div>
                )
            }
        </div>
      </div>
    </div>
  )
}

export default Signup