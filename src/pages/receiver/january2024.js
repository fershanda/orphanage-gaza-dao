import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { Box, Text, Grommet, Grid, Button } from 'grommet';

const theme = {
  // your theme configuration
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [rice, setRice] = useState('');
  const [spice, setSpice] = useState('');
  const [tea, setTea] = useState('');
  const [cookingOil, setCookingOil] = useState('');
  const [sugar, setSugar] = useState('');

  useEffect(() => {
    const retrieveDataFromBlockchain = async () => {
      try {
        // Initialize Web3 with Infura provider URL
        const web3 = new Web3('https://sepolia.infura.io/v3/a0ce7655b01f4ab98d4dc9871989a324');

        // Set the contract address and ABI
        const contractAddress = '0xA6c40B686CD474baF19aCe25b63d9ba92b9ea59a';
        const contractABI = [
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_rice",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_spice",
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
                "name": "_sugar",
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
        const riceResult = await contractInstance.methods.rice().call();
        const spiceResult = await contractInstance.methods.spice().call();
        const teaResult = await contractInstance.methods.tea().call();
        const cookingOilResult = await contractInstance.methods.cookingoil().call();
        const sugarResult = await contractInstance.methods.sugar().call();

        // Update state with retrieved data
        setRice(riceResult);
        setSpice(spiceResult);
        setTea(teaResult);
        setCookingOil(cookingOilResult);
        setSugar(sugarResult);
        setIsLoading(false);
      } catch (error) {
        // Handle error if necessary
        console.error('Error retrieving data from blockchain:', error);
      }
    };

    retrieveDataFromBlockchain();
  }, []);

  const [fee, setFee] = useState('');
  const [incentive1, setIncentive1] = useState('');
  const [incentive2, setIncentive2] = useState('');
  const [incentive3, setIncentive3] = useState('');

  useEffect(() => {
    const retrieveDataFromBlockchain = async () => {
      try {
        // Initialize Web3 with Infura provider URL
        const web3 = new Web3('https://sepolia.infura.io/v3/a0ce7655b01f4ab98d4dc9871989a324');

        // Set the contract address and ABI
        const contractAddress = '0xA7f6a6D25bB2F9541dAA176597e9E6004fE59d01';
        const contractABI = [
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_fee",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_incentive1",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_incentive2",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_incentive3",
                "type": "string"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "inputs": [],
            "name": "fee",
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
            "name": "incentive1",
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
            "name": "incentive2",
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
            "name": "incentive3",
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
        const feeResult = await contractInstance.methods.fee().call();
        const incentive1Result = await contractInstance.methods.incentive1().call();
        const incentive2Result = await contractInstance.methods.incentive2().call();
        const incentive3Result = await contractInstance.methods.incentive3().call();

        // Update state with retrieved data
        setFee(feeResult);
        setIncentive1(incentive1Result);
        setIncentive2(incentive2Result);
        setIncentive3(incentive3Result);

      } catch (error) {
        // Handle error if necessary
        console.error('Error retrieving data from blockchain:', error);
      }
    };

    retrieveDataFromBlockchain();
  }, []);



    return (
    <Grommet theme={theme} full>
        <Box
            fill
            background={{
                image: `url(${require('./Header.jpg')})`,
                repeat: 'no-repeat',
                size: 'cover',
                position: 'center',
                opacity: '0.5',
            }}
            justify="center"
            >
            <Box
                round="xlarge"
                width="xlarge"
                margin="auto"
            >
                <Text textAlign="center" size="45px" weight="bold" color="#000000" style={{ fontFamily: 'Calibri' }} >
                This Is Documentation for January 2024
                </Text>
                <Text textAlign="center" size="21px" margin={{ top: '20px' }} weight="normal" color="#000000" style={{ fontFamily: 'Calibri' }}>
                Before start of the month we ask donators to participate on Voting to evaluate our work, also to have agreement on how much Development Fee we will charge for upcoming  month, which food or incentive must be included in Endowment Package, and many more. This is no more because we are only developers who help Donators connect with Receiver of Endowment.
                </Text>
                <Text textAlign="center" size="18px" margin={{ top: '75px' }} weight="normal" color="#000000" style={{ fontFamily: 'Calibri' }}>
                You could scroll below to see result of Voting which will be adopted for this month
                </Text>
            </Box>
        </Box>


    

      <Box fill background="#ffffff" align="center" justify="center">
      <Grid
          rows={['auto']}
          columns={['1']}
          gap="medium"
          width="medium"
          margin={{ top: 'medium' }}
        >
          <Box>
            <Button
            color="#1f1e1e"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="15px" weight="500" margin={{ left: '50px' }} style={{ fontFamily: 'Calibri' }}>
                  IPFS File Documentation Voting Result
                </Text>
              }
            />
          </Box>
        </Grid>

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
                  {cookingOil}
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
      <Grid
          rows={['auto']}
          columns={['1']}
          gap="medium"
          width="medium"
          margin={{ top: 'small' }}
        >
          <Box>
            <Button
            color="#b4c7e7"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="15px" weight="500" margin={{ left: '9px' }} style={{ fontFamily: 'Calibri' }}>
                  0xA6c40B686CD474baF19aCe25b63d9ba92b9ea59a
                </Text>
              }
            />
          </Box>
        </Grid>

        <Grid
          rows={['auto']}
          columns={['1']}
          gap="medium"
          width="300px"
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
                <Text size="15px" weight="500" margin={{ left: '20px' }} style={{ fontFamily: 'Calibri' }}>
                  Development Fee This Month is {fee}
                </Text>
              }
            />
          </Box>
        </Grid>
        <Grid
          rows={['auto']}
          columns={['1/3', '1/4', '1/3']}
          gap="small"
          width="550px"
          margin={{ top: 'small' }}
        >
        <Button
            color="#c5e0b4"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="15px" weight="500" style={{ fontFamily: 'Calibri' }}margin={{ left: '37px' }}>
                {incentive1}
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
                <Text size="15px" weight="500" style={{ fontFamily: 'Calibri' }} margin={{ left: '13px' }}>
                {incentive2}
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
                <Text size="15px" weight="500" style={{ fontFamily: 'Calibri' }} margin={{ left: '37px' }}>
                {incentive3}
                </Text>
              }
        />
        </Grid>
        <Grid
          rows={['auto']}
          columns={['1']}
          gap="medium"
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
                <Text size="15px" weight="500" style={{ fontFamily: 'Calibri' }} margin={{ left: '13px' }}>
                0xA7f6a6D25bB2F9541dAA176597e9E6004fE59d01
                </Text>
              }
            />
          </Box>
        </Grid>
      </Box>





    <Box fill background="#212121" align="center" justify="center" height="50px">
        <Text textAlign="center" size="33px" weight="bold" color="white" style={{ fontFamily: 'Calibri' }}>
        List of Receiver Endowment Based on Month
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
            color="#dbdad5"
            href="/abdulla"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="16px" weight="550" margin={{ left: '98px' }} style={{ fontFamily: 'Calibri' }}>
                  Abdulla
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
            color="#dbdad5"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="16px" weight="550" margin={{ left: '99px' }} style={{ fontFamily: 'Calibri' }}>
                  Miriam
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
            color="#dbdad5"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="16px" weight="550" margin={{ left: '87px' }} style={{ fontFamily: 'Calibri' }}>
                  Benediktus
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
            color="#dbdad5"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="16px" weight="550" margin={{ left: '99px' }} style={{ fontFamily: 'Calibri' }}>
                  Sujono
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
            color="#dbdad5"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="16px" weight="550" margin={{ left: '104px' }} style={{ fontFamily: 'Calibri' }}>
                  Asep
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
            color="#dbdad5"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="16px" weight="550" margin={{ left: '93px' }} style={{ fontFamily: 'Calibri' }}>
                  Josephine
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
            color="#dbdad5"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="16px" weight="550" margin={{ left: '105px' }} style={{ fontFamily: 'Calibri' }}>
                  Ageng
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
            color="#dbdad5"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="16px" weight="550" margin={{ left: '115px' }} style={{ fontFamily: 'Calibri' }}>
                  Rio
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
            color="#dbdad5"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="16px" weight="550" margin={{ left: '98px' }} style={{ fontFamily: 'Calibri' }}>
                  Abdulla
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
            color="#dbdad5"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="16px" weight="550" margin={{ left: '99px' }} style={{ fontFamily: 'Calibri' }}>
                  Miriam
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
            color="#dbdad5"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="16px" weight="550" margin={{ left: '87px' }} style={{ fontFamily: 'Calibri' }}>
                  Benediktus
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
            color="#dbdad5"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="16px" weight="550" margin={{ left: '99px' }} style={{ fontFamily: 'Calibri' }}>
                  Sujono
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
            color="#dbdad5"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="16px" weight="550" margin={{ left: '104px' }} style={{ fontFamily: 'Calibri' }}>
                  Asep
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
            color="#dbdad5"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="16px" weight="550" margin={{ left: '93px' }} style={{ fontFamily: 'Calibri' }}>
                  Josephine
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
            color="#dbdad5"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="16px" weight="550" margin={{ left: '105px' }} style={{ fontFamily: 'Calibri' }}>
                  Ageng
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
            color="#dbdad5"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="16px" weight="550" margin={{ left: '115px' }} style={{ fontFamily: 'Calibri' }}>
                  Rio
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
            color="#dbdad5"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="16px" weight="550" margin={{ left: '98px' }} style={{ fontFamily: 'Calibri' }}>
                  Abdulla
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
            color="#dbdad5"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="16px" weight="550" margin={{ left: '99px' }} style={{ fontFamily: 'Calibri' }}>
                  Miriam
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
            color="#dbdad5"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="16px" weight="550" margin={{ left: '87px' }} style={{ fontFamily: 'Calibri' }}>
                  Benediktus
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
            color="#dbdad5"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="16px" weight="550" margin={{ left: '99px' }} style={{ fontFamily: 'Calibri' }}>
                  Sujono
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
            color="#dbdad5"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="16px" weight="550" margin={{ left: '104px' }} style={{ fontFamily: 'Calibri' }}>
                  Asep
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
            color="#dbdad5"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="16px" weight="550" margin={{ left: '93px' }} style={{ fontFamily: 'Calibri' }}>
                  Josephine
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
            color="#dbdad5"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="16px" weight="550" margin={{ left: '105px' }} style={{ fontFamily: 'Calibri' }}>
                  Ageng
                </Text>
              }
            />
          </Box>
          <Box>
            <Button
            color="#dbdad5"
            href="/"
            style={{ textDecoration: 'none' }}
            fill="vertical"
            primary
            label={
                <Text size="16px" weight="550" margin={{ left: '115px' }} style={{ fontFamily: 'Calibri' }}>
                  Rio
                </Text>
              }
            />
          </Box>
        </Grid>
    </Box>

    <Box direction="column" margin={{ bottom: '30px' }} >
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

export default App;