import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='flex flex-col bg-white w-screen h-screen justify-center items-center font-mono text-textcolor' >
      <div className='flex flex-row w-[80%] h-[80%] bg-bgwhite border-4 border-black shadow-solid ' >
        <div className='flex flex-col w-[70%] h-full p-14 border-r-4 border-black'>
          <p className='text-2xl font-extrabold ' >0xC4D5QA... is hard</p>
          <p className='text-2xl font-extrabold ' >urawesome.eth is costly</p>
          <br/>
          <div className='flex flex-col w-full h-fit p-5 bg-black text-bgwhite' >
          <p className='text-3xl font-extrabold ' >Simple. Free. Forever</p>
          <p className='text-3xl font-extrabold ' >asap.fi/arch0125</p>
          </div>
          <br/>
          {/* <p className='text-2xl font-extrabold ' >Pay3 is a decentralized, open-source, and free service that allows you to create a unique, memorable, and easy-to-share ID that you can use to receive payments from anyone, anywhere, at any time.</p> */}
          <p className='text-xl' >Do anything with it</p>
          <ul>
            <li className='text-xl' >Request payments</li>
            <li className='text-xl' >Send payments</li>
            <li className='text-xl' >Subscriptions</li>
            <li className='text-xl' >...</li>
          </ul>
          <a href='/identity' >
          <button className='text-2xl font-extrabold self-start mt-10 bg-filler text-bgwhite border-4 border-black shadow-solid px-6 py-2  hover:bg-bgwhite hover:text-filler ' > 
            <p>Get yours right now</p>
          </button>
          </a>
        </div>
        <div className='flex flex-col w-[30%] h-full justify-center items-center'>
          <p className='text-6xl font-extrabold text-textcolor' >AS<span className='text-filler' >AP</span></p>
          <p className='text-2xl font-extrabold text-textcolor mb-5' ><span className='text-filler' >As simple</span> as possible</p>
          <div className='flex flex-col w-[90%] h-fit border-2 border-black shadow-solid-s p-2 m-3' >
            <p className='text-md font-bold' >Gas Staking</p>
            <p className='text-md' >Earn returns on your gas fees while you enjoy gasless txs</p>
          </div>
          <div className='flex flex-col w-[90%] h-fit border-2 border-black shadow-solid-s p-2 m-3' >
            <p className='text-md font-bold' >Instant Swaps</p>
            <p className='text-md'>Got different tokens? Swap it here without any hassle</p>
          </div>
          <div className='flex flex-col w-[90%] h-fit border-2 border-black shadow-solid-s p-2 m-3' >
            <p className='text-md font-bold' >Custom Channels</p>
            <p className='text-md'>Get paid often? Subscriptions at your ease</p>
          </div>
          <div className='flex flex-col w-[90%] h-fit border-2 border-black shadow-solid-s p-2 m-3' >
            <p className='text-md font-bold' >Gas Refill</p>
            <p className='text-md'>Get tokens to pay for your gas in exchange</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
