
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '../App.css';
import App from '../App';
import { useAccount } from 'wagmi';

function Login() {

const { address, isConnecting, isDisconnected } = useAccount()

  return (
    <div className='flex flex-col bg-white w-screen h-screen justify-center items-center font-mono text-textcolor' >
      <div className='flex flex-row w-[80%] h-[80%] bg-bgwhite border-4 border-black shadow-solid ' >
        <div className='flex flex-col w-[70%] h-full p-14 border-r-4 border-black'>
            <p className='text-4xl font-bold'>New to DeFi? <br/>Welcome to the easiest gateway<br/>Connect Account and get started</p>
            <ConnectButton/>
            {
                address?(
                    <div className='mt-7'>
                    <br/>
                    <p className='text-2xl font-bold'> Store your seedphrase the non-custodial way. </p>
                    <br/>
                    <div className='flex flex-row justify-between w-full h-fit' >
                        <input className='w-[15%] h-12 border-2 border-black rounded-md p-2' placeholder='1st Word'/>
                        <input className='w-[15%] h-12 border-2 border-black rounded-md p-2' placeholder='2nd Word'/>
                        <input className='w-[15%] h-12 border-2 border-black rounded-md p-2' placeholder='3rd Word'/>
                        <input className='w-[15%] h-12 border-2 border-black rounded-md p-2' placeholder='4th Word'/>
                        <input className='w-[15%] h-12 border-2 border-black rounded-md p-2' placeholder='5th Word'/>
                        <input className='w-[15%] h-12 border-2 border-black rounded-md p-2' placeholder='6th Word'/>
                    </div>
                    <div className='flex flex-row mt-4 justify-between w-full h-fit mt-2' >
                        <input className='w-[15%] h-12 border-2 border-black rounded-md p-2' placeholder='7th Word'/>
                        <input className='w-[15%] h-12 border-2 border-black rounded-md p-2' placeholder='8th Word'/>
                        <input className='w-[15%] h-12 border-2 border-black rounded-md p-2' placeholder='9th Word'/>
                        <input className='w-[15%] h-12 border-2 border-black rounded-md p-2' placeholder='10th Word'/>
                        <input className='w-[15%] h-12 border-2 border-black rounded-md p-2' placeholder='11th Word'/>
                        <input className='w-[15%] h-12 border-2 border-black rounded-md p-2' placeholder='12th Word'/>
                    </div>
                    <div className='flex flex-col mt-4 justify-between w-full h-fit mt-2' >
                        <p className='text-2xl font-bold'>(Make sure the keys are correct)</p>
                        <button onClick={<App/>} className='text-2xl font-extrabold self-start mt-4 bg-filler text-bgwhite border-4 border-black shadow-solid px-6 py-2  hover:bg-bgwhite hover:text-filler ' > 
                            <p>Continue</p>
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

export default Login