import React, { useState, useEffect } from 'react';
import { Box, Image, Text, Button, Grid, Grommet } from 'grommet';
import Web3 from 'web3';


function Abdulla() {
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [addresss, setAddresss] = useState('');
  const [join, setJoin] = useState('');
  const [story, setStory] = useState('');

  useEffect(() => {
    const retrieveDataFromBlockchain = async () => {
      try {
        // Initialize Web3 with Infura provider URL
        const web3 = new Web3('https://sepolia.infura.io/v3/a0ce7655b01f4ab98d4dc9871989a324');

        // Set the contract address and ABI
        const contractAddress = '0x0e36d6E09A2B637e88fD2Ca6589185C2d1660724';
        const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_age",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_addresss",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_join",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_story",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "addresss",
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
		"name": "age",
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
		"name": "join",
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
		"name": "story",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

        // Create an instance of the contract
        const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

        // Call contract methods to retrieve data
        const nameResult = await contractInstance.methods.name().call();
        const ageResult = await contractInstance.methods.age().call();
        const addresssResult = await contractInstance.methods.addresss().call();
        const joinResult = await contractInstance.methods.join().call();
        const storyResult = await contractInstance.methods.story().call();

        // Update state with retrieved data
        setName(nameResult);
        setAge(ageResult);
        setAddresss(addresssResult);
        setJoin(joinResult);
        setStory(storyResult);
        setIsLoading(false);
      } catch (error) {
        // Handle error if necessary
        console.error('Error retrieving data from blockchain:', error);
      }
    };

    retrieveDataFromBlockchain();
  }, []);

  const imageUrl = 'https://ipfs.io/ipfs/QmSrd861BknWYawfNk5Uy48u18gxvThX7wfDcT8ycArGW4';

  return (
    <Grommet style={{ backgroundColor: '#ffffff' }}>
    <Box align="center">
      <Box width="300px" height="240px">
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            transform: 'rotate(90deg)', // Use 'transform' instead of 'rotate' property
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              clipPath:
                'polygon(50% 0, 84.6% 25%, 84.6% 75%, 50% 100%, 15.4% 75%, 15.4% 25%)', // Adjusted coordinates for rotated image
            }}
          >
            <Image src={imageUrl} fit="contain" style={{ width: '100%', height: '100%', transform: 'rotate(270deg)' }} />
          </div>
        </div>
      </Box>

      <Box background="#fffff" align="center" justify="center">
        <Text textAlign="center" size="33px" weight="bold" color="black" style={{ fontFamily: 'Calibri' }}>
          {name}
        </Text>
      </Box>

      <Grid columns={{ count: 3, size: 'auto', size: '150px' }} gap="small" margin={{ top: 'small', left: '6px' }}>
        <Button
          color="#1f1e1e"
          href="/"
          style={{ textDecoration: 'none' }}
          fill="vertical"
          primary
          label={
            <Text size="15px" weight="500" style={{ fontFamily: 'Calibri' }} margin={{ left: '70px' }}>
              {age}
            </Text>
          }
        />
        <Button
          color="#1f1e1e"
          href="/"
          style={{ textDecoration: 'none' }}
          fill="vertical"
          primary
          label={
            <Text size="15px" weight="500" style={{ fontFamily: 'Calibri' }} margin={{ left: '0px' }}>
              {addresss}
            </Text>
          }
        />
        <Button
          color="#1f1e1e"
          href="/"
          style={{ textDecoration: 'none' }}
          fill="vertical"
          primary
          label={
            <Text size="15px" weight="500" style={{ fontFamily: 'Calibri' }} margin={{ left: '39px' }}>
              {join}
            </Text>
          }
        />
      </Grid>
      <Grid
        rows={['auto']}
        columns={['1']}
        gap="small"
        width="medium"
        margin={{ top: 'medium' }}
      >
        <Box>
          <Button
            color="#0de4bc"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
              <Text size="15px" weight="500" margin={{ left: '10px' }} style={{ fontFamily: 'Calibri' }}>
                0x0e36d6E09A2B637e88fD2Ca6589185C2d1660724
              </Text>
            }
          />
        </Box>
      </Grid>
      
      <hr style={{ borderTop: '1px solid black', width: '10%' }} />

      <Grid
        rows={['auto']}
        columns={['1']}
        gap="small"
        width="large"
        margin={{ top: 'small' }}
      >
        <Box>
          <Button
            color="#f5f5f5"
            fill="vertical"
            primary
            label={
              <Text size="15px" weight="500" margin={{ left: '50px' }} style={{ fontFamily: 'Calibri' }}>
                {story}
              </Text>
            }
          />
        </Box>
      </Grid>

      <Text size="16px" weight="650" margin={{ top: '25px' }} style={{ fontFamily: 'Calibri' }}>
        Record Of Transaction
      </Text>
      
      <hr style={{ borderTop: '1px solid black', width: '6%' }} />

      <Grid
        rows={['auto']}
        columns={['1']}
        gap="small"
        width="150px"
        margin={{ top: 'small' }}
      >
        <Box>
          <Button
            color="#0f0f0f"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
              <Text size="15px" weight="500" margin={{ left: '15px' }} style={{ fontFamily: 'Calibri' }}>
                August 2023
              </Text>
            }
          />
        </Box>
      </Grid>

      <Grid
        rows={['auto']}
        columns={['1']}
        gap="small"
        width="150px"
        margin={{ top: 'small' }}
      >
        <Box>
          <Button
            color="#0f0f0f"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
              <Text size="15px" weight="500" margin={{ left: '24px' }} style={{ fontFamily: 'Calibri' }}>
                July 2023
              </Text>
            }
          />
        </Box>
      </Grid>

      <Grid
        rows={['auto']}
        columns={['1']}
        gap="small"
        width="150px"
        margin={{ top: 'small', bottom: '100px' }}
      >
        <Box>
          <Button
            color="#0f0f0f"
            href="/abdullajune2023"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
              <Text size="15px" weight="500" margin={{ left: '22px' }} style={{ fontFamily: 'Calibri' }}>
                June 2023
              </Text>
            }
          />
        </Box>
      </Grid>
    </Box>

    <Box direction="column" margin={{ bottom: '30px' }} style={{ backgroundColor: '#f5f5f5' }}>
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

export default Abdulla;
