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
        image: `url(${require('./3rdPartyHeader.jpg')})`,
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
        3rd Person In Contract
        </Text>
        <Text textAlign="start" size="23px" weight="normal" margin={{ left: '50px', top: '10px' }} color="#000000" style={{ fontFamily: 'Calibri' }}>
        3rd Person In Contract are those who are directly in contract with Token Holders via our helping hand, in order to fulfill our mission to delivers Token Holders’s will to Orphans. This include those who source food material and package it into Food Endowment Package and many more
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
              href="/adijaya"
              style={{ textDecoration: 'none' }}
              fill="vertical"
              primary
              label={
                <Text size="16px" weight="550" margin={{ left: '78px' }} style={{ fontFamily: 'Calibri' }}>
                  Adi Jaya
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
                <Text size="16px" weight="550" margin={{ left: '72px' }} style={{ fontFamily: 'Calibri' }}>
                  Johannes Parto
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
                Toko Karmini
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
                <Text size="16px" weight="550" margin={{ left: '69px' }} style={{ fontFamily: 'Calibri' }}>
                Koperasi Barokah
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
                <Text size="16px" weight="550" margin={{ left: '78px' }} style={{ fontFamily: 'Calibri' }}>
                  Adi Jaya
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
                <Text size="16px" weight="550" margin={{ left: '72px' }} style={{ fontFamily: 'Calibri' }}>
                  Johannes Parto
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
                Toko Karmini
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
                <Text size="16px" weight="550" margin={{ left: '69px' }} style={{ fontFamily: 'Calibri' }}>
                Koperasi Barokah
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
                <Text size="16px" weight="550" margin={{ left: '78px' }} style={{ fontFamily: 'Calibri' }}>
                  Adi Jaya
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
                <Text size="16px" weight="550" margin={{ left: '72px' }} style={{ fontFamily: 'Calibri' }}>
                  Johannes Parto
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
                Toko Karmini
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
                <Text size="16px" weight="550" margin={{ left: '69px' }} style={{ fontFamily: 'Calibri' }}>
                Koperasi Barokah
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
                <Text size="16px" weight="550" margin={{ left: '78px' }} style={{ fontFamily: 'Calibri' }}>
                  Adi Jaya
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
                <Text size="16px" weight="550" margin={{ left: '72px' }} style={{ fontFamily: 'Calibri' }}>
                  Johannes Parto
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
                Toko Karmini
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
                <Text size="16px" weight="550" margin={{ left: '69px' }} style={{ fontFamily: 'Calibri' }}>
                Koperasi Barokah
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
                <Text size="16px" weight="550" margin={{ left: '78px' }} style={{ fontFamily: 'Calibri' }}>
                  Adi Jaya
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
                <Text size="16px" weight="550" margin={{ left: '72px' }} style={{ fontFamily: 'Calibri' }}>
                  Johannes Parto
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
                Toko Karmini
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
                <Text size="16px" weight="550" margin={{ left: '69px' }} style={{ fontFamily: 'Calibri' }}>
                Koperasi Barokah
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
