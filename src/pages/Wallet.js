import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { Box, Text, Grommet, Grid, Button, Footer } from 'grommet';

const theme = {
  // your theme configuration
};

// Replace with your token ABI
const TOKEN_ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_totalSupply",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Mint",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "retrieveTokens",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const WalletBalance = () => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const loadBalance = async () => {
      try {
        // Connect to the Sepolia network using Infura
        const web3 = new Web3('https://sepolia.infura.io/v3/a0ce7655b01f4ab98d4dc9871989a324');
        const developerAddress = '0x6595502eE1eA83f365D5A052751EB67b7cE207Da';
        const tokenContractAddress = '0xde1F1271c4043D700b684D3a71AE29798d65Cc21';

        // Create an instance of the token contract
        const tokenContract = new web3.eth.Contract(TOKEN_ABI, tokenContractAddress);

        // Call the balanceOf function on the token contract
        const tokenBalance = await tokenContract.methods.balanceOf(developerAddress).call();
        setBalance(tokenBalance);
      } catch (error) {
        console.error('Error loading token balance:', error);
      }
    };

    loadBalance();
  }, []);

  return (
  <Grommet theme={theme} full>
    <Box
      fill
      background={{
        image: `url(${require('./Walletheader.jpg')})`,
        repeat: 'no-repeat',
        size: 'cover',
        position: 'center',
        opacity: '0.4',
      }}
      justify="center"
    >
      <Box
        round="small"
        width="large"
        align="left"
      >
        <Text textAlign="start" size="53px" weight="bold" margin={{ left: '50px' }} color="#000000" style={{ fontFamily: 'Calibri' }}>
        Transparancy is Key
        </Text>
        <Text textAlign="start" size="23px" weight="normal" margin={{ left: '50px', top: '10px' }} color="#000000" style={{ fontFamily: 'Calibri' }}>
        We believe that future of organization is transparancy. Here our Decentralized Autonomous Organization provide record of our Account Balance and where it go. Including hourly record of balance
        </Text>
        <Text textAlign="start" size="18px" weight="normal" margin={{ left: '50px', top: '50px' }} color="#000000" style={{ fontFamily: 'Calibri' }}>
          Scroll below to read our documentation
        </Text>
      </Box>
    </Box>

  <Grid
          rows={['auto']}
          columns={['1']}
          gap="0px"
          width="1465px"
          margin={{ top: '0px' }}
        >
          <Box fill background={{ color: 'rgba(255, 255, 255, 1)'}}>
            <Text size="45px" weight="550" margin={{ bottom: '5px', top: '250px' }} style={{ fontFamily: 'Calibri' }} textAlign='center'>
            Real Time Account Balance
            </Text>
            <Text size="78px" weight="600" margin={{ bottom: '5px' }} style={{ fontFamily: 'Calibri' }} textAlign='center' color={"#00dff9"}>
            {balance} DRHJ
            </Text>
            <Text size="13px" weight="400" margin={{ bottom: '15px' }} style={{ fontFamily: 'Calibri' }} textAlign='center'>
            DRHJ is stablecoin which managed by us which used by our community to participate in many Decentralized Autonomous Organization developed by us
            </Text>
            <Text size="18px" weight="550" margin={{ bottom: '250px' }} style={{ fontFamily: 'Calibri' }} textAlign='center'>
            If you are curious about transparancy of us, you could visit here to read record of our balance and how it spend
            </Text>
          </Box>
  </Grid>

  <Box fill background="#212121" align="center" justify="center" height="0px">
      <Text textAlign="start" size="33px" weight="bold" color="white" style={{ fontFamily: 'Calibri' }}>
      Click Documentation Below to Read Daily Record of our finance
      </Text>
      <Grid
          rows={['auto']}
          columns={['1/4', '1/4', '1/4', '1/4']}
          gap="medium"
          width="xlarge"
          margin={{ top: 'medium' }}
        >
          <Box>
            <Button
              href="/walletjanuary2024"
              style={{ textDecoration: 'none' }}
              fill="vertical"
              primary
              label={
                <Text size="16px" weight="550" margin={{ left: '78px' }} style={{ fontFamily: 'Calibri' }}>
                  January 2024
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
              href="https://example.com"
              style={{ textDecoration: 'none' }}
              fill="vertical"
              primary
              label={
                <Text size="16px" weight="550" margin={{ left: '78px' }} style={{ fontFamily: 'Calibri' }}>
                  February 2024
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
              href="https://example.com"
              style={{ textDecoration: 'none' }}
              fill="vertical"
              primary
              label={
                <Text size="16px" weight="550" margin={{ left: '83px' }} style={{ fontFamily: 'Calibri' }}>
                  March 2024
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
              href="https://example.com"
              style={{ textDecoration: 'none' }}
              fill="vertical"
              primary
              label={
                <Text size="16px" weight="550" margin={{ left: '85px' }} style={{ fontFamily: 'Calibri' }}>
                  April 2024
                </Text>
              }
            />
          </Box>
        </Grid>

        <Grid
          rows={['auto']}
          columns={['1/4', '1/4', '1/4', '1/4']}
          gap="medium"
          width="xlarge"
          margin={{ top: 'small' }}
        >
          <Box>
            <Button
              href="https://example.com"
              style={{ textDecoration: 'none' }}
              fill="vertical"
              primary
              label={
                <Text size="16px" weight="550" margin={{ left: '89px' }} style={{ fontFamily: 'Calibri' }}>
                  May 2024
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
              href="https://example.com"
              style={{ textDecoration: 'none' }}
              fill="vertical"
              primary
              label={
                <Text size="16px" weight="550" margin={{ left: '93px' }} style={{ fontFamily: 'Calibri' }}>
                  June 2024
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
              href="https://example.com"
              style={{ textDecoration: 'none' }}
              fill="vertical"
              primary
              label={
                <Text size="16px" weight="550" margin={{ left: '93px' }} style={{ fontFamily: 'Calibri' }}>
                  July 2024
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
              href="https://example.com"
              style={{ textDecoration: 'none' }}
              fill="vertical"
              primary
              label={
                <Text size="16px" weight="550" margin={{ left: '80px' }} style={{ fontFamily: 'Calibri' }}>
                  August 2024
                </Text>
              }
            />
          </Box>
        </Grid>

        <Grid
          rows={['auto']}
          columns={['1/4', '1/4', '1/4', '1/4']}
          gap="medium"
          width="xlarge"
          margin={{ top: 'small' }}
        >
          <Box>
            <Button
              href="https://example.com"
              style={{ textDecoration: 'none' }}
              fill="vertical"
              primary
              label={
                <Text size="16px" weight="550" margin={{ left: '67px' }} style={{ fontFamily: 'Calibri' }}>
                  September 2024
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
              href="https://example.com"
              style={{ textDecoration: 'none' }}
              fill="vertical"
              primary
              label={
                <Text size="16px" weight="550" margin={{ left: '80px' }} style={{ fontFamily: 'Calibri' }}>
                  October 2024
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
              href="https://example.com"
              style={{ textDecoration: 'none' }}
              fill="vertical"
              primary
              label={
                <Text size="16px" weight="550" margin={{ left: '70px' }} style={{ fontFamily: 'Calibri' }}>
                  November 2024
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
              href="https://example.com"
              style={{ textDecoration: 'none' }}
              fill="vertical"
              primary
              label={
                <Text size="16px" weight="550" margin={{ left: '70px' }} style={{ fontFamily: 'Calibri' }}>
                  December 2024
                </Text>
              }
            />
          </Box>
        </Grid>
      </Box>
      
        <Box direction="column" margin={{ top: '60px', bottom: '70px' }}>
        <Box pad="medium" align="center">
            <Text size="30px" weight="550" style={{ fontFamily: 'Calibri' }}>
              Orphanage DAO
            </Text>
        </Box>
        <Box direction="row" justify="between" fill="horizontal">
          <Box pad="medium">
            <Text size="18px" weight="400" style={{ fontFamily: 'Calibri' }}>
              Developed by Joseph Seed
            </Text>
            <Text size="18px" weight="400" style={{ fontFamily: 'Calibri' }}>
              Street 69, City, State, Country
            </Text>
            <Text size="18px" weight="400" style={{ fontFamily: 'Calibri' }}>
              contact@Orphanage.org
            </Text>
          </Box>
          <Box pad="medium" width="800px">
            <Text size="18px" weight="400" style={{ fontFamily: 'Calibri' }} textAlign='center'>
              We are only Web3 Company which provide platform to connect Donators with Receiver of Endowment through usage of Decentralized Technology which still little explored, for purpose of increasing transparancy in philanthropic organization that could audited by everyone
            </Text>
          </Box>
          <Box pad="medium">
            <Text size="18px" weight="400" style={{ fontFamily: 'Calibri' }} textAlign='right'>
              Developed by Joseph Seed
            </Text>
            <Text size="18px" weight="400" style={{ fontFamily: 'Calibri' }}>
              Street 69, City, State, Country
            </Text>
            <Text size="18px" weight="400" style={{ fontFamily: 'Calibri' }}>
              contact@Orphanage.org
            </Text>
          </Box>
        </Box>
      </Box>
      
    </Grommet>

);
}
export default WalletBalance;