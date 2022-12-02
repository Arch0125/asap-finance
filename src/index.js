import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './index.css';
import App from './App';
import Homepage from './Homepage';
import reportWebVitals from './reportWebVitals';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import Login from './pages/Login';
import Identity from './pages/Identity';
import Finances from './pages/Finances';
const { chains, provider } = configureChains(
  [chain.polygon, chain.polygonMumbai],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
   
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
     
      <Router>
      <Routes>
                <Route path="/" element={<App/>} />
                <Route path='/identity' element={<Identity/>}/>
                <Route path="/Homepage/:userId" element={<Homepage />} />     
                <Route path="/finances" element={<Finances/>}/>  
            </Routes>
       </Router> 
    </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
 
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
