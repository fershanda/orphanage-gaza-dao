import React, { useState, useEffect } from 'react';
import { Box, Image, Text, Button, Grid, Grommet } from 'grommet';
import Web3 from 'web3';


function Abdulla() {
  const [isLoading, setIsLoading] = useState(true);
  const [ipfs, setIpfs] = useState('');
  const [name, setName] = useState('');
  const [rice, setRice] = useState('');
  const [sugar, setSugar] = useState('');
  const [tea, setTea] = useState('');
  const [cookingoil, setCookingoil] = useState('');
  const [spice, setSpice] = useState('');

  useEffect(() => {
    const retrieveDataFromBlockchain = async () => {
      try {
        // Initialize Web3 with Infura provider URL
        const web3 = new Web3('https://sepolia.infura.io/v3/a0ce7655b01f4ab98d4dc9871989a324');

        // Set the contract address and ABI
        const contractAddress = '0xcDa7891F0B282c70368cB78E03d624d9EC867Db4';
        const contractABI = [
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_ipfs",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_rice",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_sugar",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_tea",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_cookingoil",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_spice",
                        "type": "string"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "inputs": [],
                "name": "cookingoil",
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
                "name": "ipfs",
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
                "name": "rice",
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
                "name": "spice",
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
                "name": "sugar",
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
                "name": "tea",
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
        const ipfsResult = await contractInstance.methods.ipfs().call();
        const nameResult = await contractInstance.methods.name().call();
        const riceResult = await contractInstance.methods.rice().call();
        const sugarResult = await contractInstance.methods.sugar().call();
        const teaResult = await contractInstance.methods.tea().call();
        const cookingoilResult = await contractInstance.methods.cookingoil().call();
        const spiceResult = await contractInstance.methods.spice().call();

        // Update state with retrieved data
        setIpfs(ipfsResult);
        setName(nameResult);
        setRice(riceResult);
        setSugar(sugarResult);
        setTea(teaResult);
        setCookingoil(cookingoilResult);
        setSpice(spiceResult);
        setIsLoading(false);
      } catch (error) {
        // Handle error if necessary
        console.error('Error retrieving data from blockchain:', error);
      }
    };

    retrieveDataFromBlockchain();
  }, []);

  const [couriername, setCouriername] = useState('');
  const [courieraddresss, setCourieraddresss] = useState('');
  const [courierjoin, setCourierjoin] = useState('');
  const [courierage, setCourierage] = useState('');

  useEffect(() => {
    const retrieveDataFromBlockchain = async () => {
      try {
        // Initialize Web3 with Infura provider URL
        const web3 = new Web3('https://sepolia.infura.io/v3/a0ce7655b01f4ab98d4dc9871989a324');

        // Set the contract address and ABI
        const contractAddress = '0xb29397c1f1fD5f1f3c04f6C342371f4E79a4eDeC';
        const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_couriername",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_courierjoin",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_courieraddresss",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_courierage",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "courieraddresss",
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
		"name": "courierage",
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
		"name": "courierjoin",
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
		"name": "couriername",
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
        const couriernameResult = await contractInstance.methods.couriername().call();
        const courierjoinResult = await contractInstance.methods.courierjoin().call();
        const courieraddresssResult = await contractInstance.methods.courieraddresss().call();
        const courierageResult = await contractInstance.methods.courierage().call();

        // Update state with retrieved data
        setCouriername(couriernameResult);
        setCourierjoin(courierjoinResult);
        setCourieraddresss(courieraddresssResult);
        setCourierage(courierageResult);
      } catch (error) {
        // Handle error if necessary
        console.error('Error retrieving data from blockchain:', error);
      }
    };

    retrieveDataFromBlockchain();
  }, []);


  const [threename, setThreename] = useState('');
  const [threeaddresss, setThreeaddresss] = useState('');
  const [threejoin, setThreejoin] = useState('');
  const [threefunction, setThreefunction] = useState('');

  useEffect(() => {
    const retrieveDataFromBlockchain = async () => {
      try {
        // Initialize Web3 with Infura provider URL
        const web3 = new Web3('https://sepolia.infura.io/v3/a0ce7655b01f4ab98d4dc9871989a324');

        // Set the contract address and ABI
        const contractAddress = '0xa8A1F0249d9896Cef160cE3d8230E8Ea98695fe5';
        const contractABI = [
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_threename",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_threejoin",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_threeaddresss",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_threefunction",
                "type": "string"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "inputs": [],
            "name": "threeaddresss",
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
            "name": "threefunction",
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
            "name": "threejoin",
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
            "name": "threename",
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
        const threenameResult = await contractInstance.methods.threename().call();
        const threejoinResult = await contractInstance.methods.threejoin().call();
        const threeaddresssResult = await contractInstance.methods.threeaddresss().call();
        const threefunctionResult = await contractInstance.methods.threefunction().call();

        // Update state with retrieved data
        setThreename(threenameResult);
        setThreejoin(threejoinResult);
        setThreeaddresss(threeaddresssResult);
        setThreefunction(threefunctionResult);
      } catch (error) {
        // Handle error if necessary
        console.error('Error retrieving data from blockchain:', error);
      }
    };

    retrieveDataFromBlockchain();
  }, []);


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
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
            }}
          >
            <Image src={ipfs} fit="contain" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </Box>

      <Box background="#fffff" align="center" justify="center">
        <Text textAlign="center" size="22px" weight="550" color="black" style={{ fontFamily: 'Calibri' }}>
          {name}
        </Text>
      </Box>

      <Grid
        rows={['auto']}
        columns={['1']}
        gap="small"
        width="medium"
        margin={{ top: '22px' }}
      >
        <Box>
        <Text textAlign="center" size="16px" weight="300" color="black" style={{ fontFamily: 'Calibri' }} margin={{ bottom: '7px' }}>
          June 2023
        </Text>
          <Button
            color="#000000"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
              <Text size="15px" weight="500" margin={{ left: '10px' }} style={{ fontFamily: 'Calibri' }} color="white">
                0xcDa7891F0B282c70368cB78E03d624d9EC867Db4
              </Text>
            }
          />
        </Box>
      </Grid>

      <hr style={{ borderTop: '1px solid black', width: '10%' }} />

        <Text textAlign="center" size="20px" weight="600" color="black" style={{ fontFamily: 'Calibri' }}>
          Package
        </Text>

      <Grid columns={{ count: 5, size: 'auto', size: '150px' }} gap="small" margin={{ top: 'small', right:'90px' }}>
        <Button
            color="#b4c7e7"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="15px" weight="500" style={{ fontFamily: 'Calibri' }} margin={{ left: '35px' }}>
                {rice}
                </Text>
              }
        />
        <Button
            color="#b4c7e7"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="15px" weight="500" style={{ fontFamily: 'Calibri' }} margin={{ left: '36px' }}>
                  {spice}
                </Text>
              }
        />
        <Button
            color="#b4c7e7"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="15px" weight="500" style={{ fontFamily: 'Calibri' }} margin={{ left: '39px' }}>
                  {tea}
                </Text>
              }
        />
        <Button
            color="#b4c7e7"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="15px" weight="500" style={{ fontFamily: 'Calibri' }} margin={{ left: '17px' }}>
                  {cookingoil}
                </Text>
              }
        />
        <Button
            color="#b4c7e7"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="15px" weight="500" style={{ fontFamily: 'Calibri' }} margin={{ left: '33px' }}>
                  {sugar}
                </Text>
              }
        />
      </Grid>
    
      <hr style={{ borderTop: '1px solid black', width: '10%' }} />
      
      <Text textAlign="center" size="20px" weight="600" color="black" style={{ fontFamily: 'Calibri' }}>
          Courier
      </Text>

      <Text textAlign="center" size="16px" weight="600" color="black" style={{ fontFamily: 'Calibri' }} margin={{ top: '6px' }}>
          {couriername}
      </Text>

      <Grid
          rows={['auto']}
          columns={['1/3', '1/4', '1/3']}
          gap="small"
          width="750px"
          margin={{ top: 'small' }}
        >
        <Button
            color="#c5e0b4"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="15px" weight="500" style={{ fontFamily: 'Calibri' }}margin={{ left: '13px' }}>
                {courieraddresss}
                </Text>
              }
        />
        <Button
            color="#c5e0b4"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="15px" weight="500" style={{ fontFamily: 'Calibri' }} margin={{ left: '24px' }}>
                {courierjoin}
                </Text>
              }
        />
        <Button
            color="#c5e0b4"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="15px" weight="500" style={{ fontFamily: 'Calibri' }} margin={{ left: '60px' }}>
                {courierage}
                </Text>
              }
        />
        </Grid>

        <Grid
        rows={['auto']}
        columns={['1']}
        gap="small"
        width="medium"
        margin={{ top: 'small' }}
      >
        <Box>
          <Button
            color="#c5e0b4"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
              <Text size="15px" weight="500" margin={{ left: '21px' }} style={{ fontFamily: 'Calibri' }}>
                0xb29397c1f1fD5f1f3c04f6C342371f4E79a4eDeC
              </Text>
            }
          />
        </Box>
      </Grid>

      <hr style={{ borderTop: '1px solid black', width: '10%' }} />

      <Text textAlign="center" size="20px" weight="600" color="black" style={{ fontFamily: 'Calibri' }}>
      3rd Person In Contract
      </Text>

      <Text textAlign="center" size="16px" weight="600" color="black" style={{ fontFamily: 'Calibri' }} margin={{ top: '6px' }}>
      {threename}
      </Text>

      <Grid
          rows={['auto']}
          columns={['1/3', '1/4', '1/3']}
          gap="small"
          width="750px"
          margin={{ top: 'small' }}
        >
        <Button
            color="#fa95f6"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="15px" weight="500" style={{ fontFamily: 'Calibri' }}margin={{ left: '13px' }}>
                {threeaddresss}
                </Text>
              }
        />
        <Button
            color="#fa95f6"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="15px" weight="500" style={{ fontFamily: 'Calibri' }} margin={{ left: '23px' }}>
                {threejoin}
                </Text>
              }
        />
        <Button
            color="#fa95f6"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="15px" weight="500" style={{ fontFamily: 'Calibri' }} margin={{ left: '16px' }}>
                {threefunction}
                </Text>
              }
        />
        </Grid>

        <Grid
        rows={['auto']}
        columns={['1']}
        gap="small"
        width="medium"
        margin={{ top: 'small', bottom: 'large' }}
      >
        <Box>
          <Button
            color="#fa95f6"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
              <Text size="15px" weight="500" margin={{ left: '10px' }} style={{ fontFamily: 'Calibri' }}>
                0x11b2F8785A26e547B940E08459a0AD106ba97c33
              </Text>
            }
          />
        </Box>
      </Grid>
      </Box>

      <Box direction="column" margin={{ bottom: '40px' }} style={{ backgroundColor: '#f5f5f5' }}>
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