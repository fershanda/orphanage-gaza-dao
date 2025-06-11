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
    <Box fill background={{ image: `url(${require('./Homeheader.jpg')})`, repeat: 'no-repeat', size: 'cover', position: 'center' }} justify="center" style={{ position: 'relative' }}>
    <Box fill background={{ color: 'rgba(68, 84, 106, 0.45)', zIndex: 1 }}>
      <Box round="xlarge" width="65%" align="center" justify="center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
        <Text textAlign="center" size="47px" weight="bold" color="#ffffff" style={{ fontFamily: 'Calibri' }}>
          Orphanage DAO
        </Text>
        <Text textAlign="center" size="20px" weight="normal" margin={{ top: '10px' }} color="#ffffff" style={{ fontFamily: 'Calibri' }}>
        DAO stand for Decentralized Autonomous Organization. Where Donators have direct participation to vote for policy which better for Organization Sustainability. DAO also have advantage of having more transparancy so its auditible for everyone who could access it. Since we built upon Web3 then our database is cannot being changed or manipulated. Our Bank Account also could being monitored everytime and where its flow of money go
        </Text>
        <Text textAlign="center" size="18px" weight="normal" margin={{ top: '50px' }} color="#ffffff" style={{ fontFamily: 'Calibri' }}>
          Scroll below to read our documentation
        </Text>
      </Box>
    </Box>
  </Box>

  <Grid
          rows={['auto']}
          columns={['1']}
          gap="0px"
          width="1465px"
          margin={{ top: '0px' }}
        >
          <Box fill background={{ color: 'rgba(150, 255, 87, 1)'}}>
            <Text size="35px" weight="550" margin={{ bottom: '5px', top: '250px' }} style={{ fontFamily: 'Calibri' }} textAlign='center'>
            Real Time Account Balance
            </Text>
            <Text size="60px" weight="600" margin={{ bottom: '5px' }} style={{ fontFamily: 'Calibri' }} textAlign='center' color={"White"}>
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

  <Grid
          rows={['auto']}
          columns={['1/2', '1/2']}
          gap="0px"
          width="1465px"
          margin={{ top: '0px' }}
        >
          <Box fill background={{ color: 'rgba(167, 223, 249, 1)'}}>
            <Text size="28px" weight="550" margin={{ bottom: '25px', top: '150px' }} style={{ fontFamily: 'Calibri' }} textAlign='center'>
            Decentralized Autonomous Organization
            </Text>
            <Text size="18px" weight="500" margin={{ bottom: '5px' }} style={{ fontFamily: 'Calibri' }} textAlign='center'>
            Donator have right to determine policy of Organization
            </Text>
            <Text size="18px" weight="500" margin={{ bottom: '5px' }} style={{ fontFamily: 'Calibri' }} textAlign='center'>
            Transparancy is priority, all people could audited it
            </Text>
            <Text size="18px" weight="500" margin={{ bottom: '5px' }} style={{ fontFamily: 'Calibri' }} textAlign='center'>
            Built upon Web3, data cannot being manipulated
            </Text>
            <Text size="18px" weight="500" margin={{ bottom: '5px' }} style={{ fontFamily: 'Calibri' }} textAlign='center'>
            People could track where money flow
            </Text>
            <Text size="18px" weight="500" margin={{ bottom: '150px' }} style={{ fontFamily: 'Calibri' }} textAlign='center'>
            Variable Development Fee cut, depend on agreement of Community
            </Text>
          </Box>
          <Box fill background={{ color: 'rgba(249, 223, 167, 1)'}}>
            <Text size="28px" weight="550" margin={{ bottom: '25px', top:'150px' }} style={{ fontFamily: 'Calibri' }} textAlign='center'>
            Traditional Organization
            </Text>
            <Text size="18px" weight="500" margin={{ bottom: '5px' }} style={{ fontFamily: 'Calibri' }} textAlign='center'>
            Donator don’t have any right or function
            </Text>
            <Text size="18px" weight="500" margin={{ bottom: '5px' }} style={{ fontFamily: 'Calibri' }} textAlign='center'>
            Transparancy is still stuck at paper age and cannot accessed by everyone
            </Text>
            <Text size="18px" weight="500" margin={{ bottom: '5px' }} style={{ fontFamily: 'Calibri' }} textAlign='center'>
            There is possibility of data being manipulated
            </Text>
            <Text size="18px" weight="500" margin={{ bottom: '5px' }} style={{ fontFamily: 'Calibri' }} textAlign='center'>
            No one could track where money flow
            </Text>
            <Text size="18px" weight="500" margin={{ bottom: '150px' }} style={{ fontFamily: 'Calibri' }} textAlign='center'>
            No transparancy on Fee Cut and controlled by smaller circle
            </Text>
          </Box>
    </Grid>

    <Box fill background={{ image: `url(${require('./Homeheader2.jpg')})`, repeat: 'no-repeat', size: 'cover', position: 'center' }} justify="center" style={{ position: 'relative' }}>
    <Box fill background={{ color: 'rgba(0, 0, 0, 0.65)', zIndex: 1 }}>
      <Box round="xlarge" width="65%" align="center" justify="center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
        <Text textAlign="center" size="47px" weight="bold" color="#ffffff" style={{ fontFamily: 'Calibri' }}>
        Who are we ?
        </Text>
        <Text textAlign="center" size="20px" weight="normal" margin={{ top: '10px' }} color="#ffffff" style={{ fontFamily: 'Calibri' }}>
        DAO also have advantage of having more transparancy so its auditible for everyone who could access it. Since we built upon Web3 then our database cannot being changed or manipulated. Our Bank Account also could being monitored everytime and where its flow of money go
        </Text>
      </Box>
    </Box>
  </Box>

  <Box fill background="#258cf5" align="center" justify="center" height="50px" >
      <Text textAlign="center" size="33px" weight="bold" color="white" style={{ fontFamily: 'Calibri' }} margin={{ bottom: '23px' }} >
      We separate Important Documentary into 3 part
      </Text>
      <Grid
          rows={['auto']}
          columns={['1/3', '1/3', '1/3']}
          gap="medium"
          width="xlarge"
          margin={{ top: 'medium' }}
        >
          <Box>
            <Text size="20px" weight="550" margin={{ bottom: '5px' }} style={{ fontFamily: 'Calibri' }} textAlign='center'>
              Courier
            </Text>
            <Text size="16px" weight="500" margin={{ bottom: '10px' }} style={{ fontFamily: 'Calibri' }} textAlign='center'>
              To operate efficiently while creating positive impact, we need Courier to deliver Endowment Package to Orphans. We like to hire trusted 3rd party to done this while we evaluate them annually to improve our service. 
            </Text>
            <Button
            href="/Courier"
            style={{ textDecoration: 'none', width: '215px', margin: '0 auto',  borderRadius: '0' }} // Adjust the width to your desired value
            size="small" // Sets the button size to small (compact)
            primary
            color="#ffffff"
            label={
              <Text size="16px" weight="550" style={{ fontFamily: 'Calibri' }} color="#000000">
                Visit Our Documentation
              </Text>
            }
          />
          </Box>
          <Box>
            <Text size="20px" weight="550" margin={{ bottom: '5px' }} style={{ fontFamily: 'Calibri' }} textAlign='center'>
              Receiver of Endowment
            </Text>
            <Text size="16px" weight="500" margin={{ bottom: '10px' }} style={{ fontFamily: 'Calibri' }} textAlign='center'>
              Receiver of Endowment are people who Token Holders are agree to given benefit such as Endowment Package. It could be Orphans who need support to be independent youth for future generation. 
            </Text>
            <Button
            href="/Receiver"
            style={{ textDecoration: 'none', width: '215px', margin: '0 auto',  borderRadius: '0' }} // Adjust the width to your desired value
            size="small" // Sets the button size to small (compact)
            primary
            color="#ffffff"
            label={
              <Text size="16px" weight="550" style={{ fontFamily: 'Calibri' }} color="#000000">
                Visit Our Documentation
              </Text>
            }
          />
          </Box>
          <Box>
            <Text size="20px" weight="550" margin={{ bottom: '5px' }} style={{ fontFamily: 'Calibri' }} textAlign='center'>
              3rd Party in Contract
            </Text>
            <Text size="16px" weight="500" margin={{ bottom: '10px' }} style={{ fontFamily: 'Calibri' }} textAlign='center'>
              To scale and reduce risk, we need 3rd Party to operate our key operation which delivers Token Holders Fund to Receiver of Endowment. We need 3rd Party such as those who making Endowment Package. We evaluate them annually to improve service. 
            </Text>
            <Button
            href="/Thirdparty"
            style={{ textDecoration: 'none', width: '215px', margin: '0 auto',  borderRadius: '0' }} // Adjust the width to your desired value
            size="small" // Sets the button size to small (compact)
            primary
            color="#ffffff"
            label={
              <Text size="16px" weight="550" style={{ fontFamily: 'Calibri' }} color="#000000">
                Visit Our Documentation
              </Text>
            }
          />
          </Box>
        </Grid>
        </Box>
      
        <Box fill background="#fab4f8" align="center" justify="center" >
        <Text size="45px" weight="550" margin={{ bottom: '15px', top: '0px' }} style={{ fontFamily: 'Calibri' }} textAlign='center'>
            All our policy is based on consensus of Token Holder
        </Text>
        <Box round="xlarge" width="60%" align="center" justify="center">
            <Text size="20px" weight="500" margin={{ bottom: '20px' }} style={{ fontFamily: 'Calibri' }} textAlign='center'>
            Since we are Decentralized Autonomous Organization, we value our community more than Traditional Organization. Thats why every policy is based on consensus of Token Holder through voting. 
            </Text>
        </Box>
        <Button
            href="/Thirdparty"
            style={{ textDecoration: 'none', width: '215px', margin: '0 auto',  borderRadius: '0' }} // Adjust the width to your desired value
            size="small" // Sets the button size to small (compact)
            primary
            color="#000000"
            label={
              <Text size="16px" weight="550" style={{ fontFamily: 'Calibri' }} color="#ffffff">
                Visit Our Documentation
              </Text>
            }
          />
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