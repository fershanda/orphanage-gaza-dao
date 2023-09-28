import React from 'react';
import { Box, Text, Grommet, Grid, Button, Footer } from 'grommet';

const theme = {
  // your theme configuration
};

function App() {
  return (
  <Grommet theme={theme} full>
    <Box
      fill
      background={{
        image: `url(${require('./Header.jpg')})`,
        repeat: 'no-repeat',
        size: 'cover',
        position: 'center',
        opacity: '0.8',
      }}
      justify="center"
    >
      <Box
        round="small"
        width="large"
        align="left"
      >
        <Text textAlign="start" size="53px" weight="bold" margin={{ left: '50px' }} color="#000000" style={{ fontFamily: 'Calibri' }}>
          Receiver of Endowment
        </Text>
        <Text textAlign="start" size="23px" weight="normal" margin={{ left: '50px', top: '10px' }} color="#000000" style={{ fontFamily: 'Calibri' }}>
          Receiver Endowment are Orphan from birth till they are ready into work and being independent. We are humanitarian oriented no matter who their identity is. Our Program is giving them Food Endowment and some incentive to make their living better. Our Differences between conventional philanthropy organization is that we give donators some participation to vote on policy. So something like Food Endownment Package is consist of what our donators vote
        </Text>
        <Text textAlign="start" size="18px" weight="normal" margin={{ left: '50px', top: '50px' }} color="#000000" style={{ fontFamily: 'Calibri' }}>
          Scroll below to read our documentation
        </Text>
      </Box>
    </Box>

    <Box fill background="#212121" align="center" justify="center" height="50px">
      <Text textAlign="start" size="33px" weight="bold" color="white" style={{ fontFamily: 'Calibri' }}>
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
              href="/january2024"
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


        <Grid
          rows={['auto']}
          columns={['1/4', '1/4', '1/4', '1/4']}
          gap="medium"
          width="xlarge"
          margin={{ top: 'small' }}
        >
          <Box>
            <Button
              href="/january2024"
              style={{ textDecoration: 'none' }}
              fill="vertical"
              primary
              color="#58cefc"
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
              color="#58cefc"
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
              color="#58cefc"
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
              color="#58cefc"
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
              color="#58cefc"
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
              color="#58cefc"
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
              color="#58cefc"
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
              color="#58cefc"
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
              color="#58cefc"
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
              color="#58cefc"
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
              color="#58cefc"
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
              color="#58cefc"
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

    <Box direction="column" margin={{ bottom: '30px' }}>
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
