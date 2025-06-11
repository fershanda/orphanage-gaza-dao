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
        image: `url(${require('./Courierheader.jpg')})`,
        repeat: 'no-repeat',
        size: 'cover',
        position: 'center',
        opacity: '0.6',
      }}
      justify="center"
    >
      <Box
        round="small"
        width="large"
        align="left"
      >
        <Text textAlign="start" size="53px" weight="bold" margin={{ left: '50px' }} color="#000000" style={{ fontFamily: 'Calibri' }}>
        Courier
        </Text>
        <Text textAlign="start" size="23px" weight="normal" margin={{ left: '50px', top: '10px' }} color="#000000" style={{ fontFamily: 'Calibri' }}>
        In order to operate our DAO Orphanage and deliver its endowment package efficiently, we hire some Couriers. This Couriers then will deliver fund from Token Holders to Orphans, which its fund will managed by 3rd party to create Endowment Package which already agreed upon Token Holders before start of Operating Month.
        </Text>
        <Text textAlign="start" size="18px" weight="normal" margin={{ left: '50px', top: '50px' }} color="#000000" style={{ fontFamily: 'Calibri' }}>
          Scroll below to read our documentation
        </Text>
      </Box>
    </Box>

    <Box fill background="#212121" align="center" justify="center" height="50px">
      <Text textAlign="start" size="33px" weight="bold" color="white" style={{ fontFamily: 'Calibri' }}>
      Party Who Create Food Endowment Package
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
              href="/bagusabdulrahman"
              style={{ textDecoration: 'none' }}
              fill="vertical"
              primary
              label={
                <Text size="16px" weight="550" margin={{ left: '58px' }} style={{ fontFamily: 'Calibri' }}>
                  Bagus Abdul Rahman
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
                <Text size="16px" weight="550" margin={{ left: '58px' }} style={{ fontFamily: 'Calibri' }}>
                  Bagus Abdul Rahman
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
                <Text size="16px" weight="550" margin={{ left: '58px' }} style={{ fontFamily: 'Calibri' }}>
                Bagus Abdul Rahman
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
                <Text size="16px" weight="550" margin={{ left: '58px' }} style={{ fontFamily: 'Calibri' }}>
                Bagus Abdul Rahman
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
          margin={{ top: 'medium' }}
        >
          <Box>
            <Button
              href="/"
              style={{ textDecoration: 'none' }}
              fill="vertical"
              primary
              label={
                <Text size="16px" weight="550" margin={{ left: '58px' }} style={{ fontFamily: 'Calibri' }}>
                  Bagus Abdul Rahman
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
                <Text size="16px" weight="550" margin={{ left: '58px' }} style={{ fontFamily: 'Calibri' }}>
                  Bagus Abdul Rahman
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
                <Text size="16px" weight="550" margin={{ left: '58px' }} style={{ fontFamily: 'Calibri' }}>
                Bagus Abdul Rahman
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
                <Text size="16px" weight="550" margin={{ left: '58px' }} style={{ fontFamily: 'Calibri' }}>
                Bagus Abdul Rahman
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
          margin={{ top: 'medium' }}
        >
          <Box>
            <Button
              href="/"
              style={{ textDecoration: 'none' }}
              fill="vertical"
              primary
              label={
                <Text size="16px" weight="550" margin={{ left: '58px' }} style={{ fontFamily: 'Calibri' }}>
                Bagus Abdul Rahman
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
                <Text size="16px" weight="550" margin={{ left: '58px' }} style={{ fontFamily: 'Calibri' }}>
                Bagus Abdul Rahman
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
                <Text size="16px" weight="550" margin={{ left: '58px' }} style={{ fontFamily: 'Calibri' }}>
                Bagus Abdul Rahman
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
                <Text size="16px" weight="550" margin={{ left: '58px' }} style={{ fontFamily: 'Calibri' }}>
                Bagus Abdul Rahman
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
          margin={{ top: 'medium' }}
        >
          <Box>
            <Button
              href="/"
              style={{ textDecoration: 'none' }}
              fill="vertical"
              primary
              label={
                <Text size="16px" weight="550" margin={{ left: '58px' }} style={{ fontFamily: 'Calibri' }}>
                  Bagus Abdul Rahman
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
                <Text size="16px" weight="550" margin={{ left: '58px' }} style={{ fontFamily: 'Calibri' }}>
                  Bagus Abdul Rahman
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
                <Text size="16px" weight="550" margin={{ left: '58px' }} style={{ fontFamily: 'Calibri' }}>
                Bagus Abdul Rahman
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
                <Text size="16px" weight="550" margin={{ left: '58px' }} style={{ fontFamily: 'Calibri' }}>
                Bagus Abdul Rahman
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
          margin={{ top: 'medium' }}
        >
          <Box>
            <Button
              href="/"
              style={{ textDecoration: 'none' }}
              fill="vertical"
              primary
              label={
                <Text size="16px" weight="550" margin={{ left: '58px' }} style={{ fontFamily: 'Calibri' }}>
                  Bagus Abdul Rahman
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
                <Text size="16px" weight="550" margin={{ left: '58px' }} style={{ fontFamily: 'Calibri' }}>
                  Bagus Abdul Rahman
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
                <Text size="16px" weight="550" margin={{ left: '58px' }} style={{ fontFamily: 'Calibri' }}>
                Bagus Abdul Rahman
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
                <Text size="16px" weight="550" margin={{ left: '58px' }} style={{ fontFamily: 'Calibri' }}>
                Bagus Abdul Rahman
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
