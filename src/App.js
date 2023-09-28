import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

import Navbar from './Navbar';

function App() {
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      try {
        if (typeof window.ethereum !== 'undefined') {
          // Modern dapp browsers
          const ethereum = window.ethereum;
          await ethereum.request({ method: 'eth_requestAccounts' });
          const web3Instance = new Web3(ethereum);
          setWeb3(web3Instance);
        } else if (typeof window.web3 !== 'undefined') {
          // Legacy dapp browsers
          const web3Instance = new Web3(window.web3.currentProvider);
          setWeb3(web3Instance);
        } else {
          // Fallback for non-dapp browsers
          console.error('Web3 not found. Please install MetaMask or use a dapp browser.');
        }
      } catch (error) {
        console.error('Error initializing web3:', error);
      }
    };

    initWeb3();
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
}



export default App;

