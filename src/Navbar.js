import React from 'react';
import { Grommet, Header, Nav, Anchor, Main } from 'grommet';
import { Link, Route, Routes } from 'react-router-dom';

import Receiver from './pages/Receiver';
import Courier from './pages/Courier';
import Thirdparty from './pages/Thirdparty';
import Votingrecord from './pages/Votingrecord';
import Wallet from './pages/Wallet';
import Home from './pages/Home'

import January2024 from './pages/receiver/january2024';

import Abdulla from './pages/receiver/person/abdulla/Profile';
import Abdullajune2023 from './pages/receiver/person/abdulla/AbdullaJune2023';

import Adijaya from './pages/3rdparty/Adijaya'

import Bagusabdulrahman from './pages/courier/Bagusabdulrahman'

import Walletjanuary2024 from './pages/wallet/walletjanuary2024'

const theme = {
  global: {
    colors: {
      brand: '#000000',
    },
  },
};

const Navbar = () => {
  return (
    <Grommet theme={theme} full>
      <Header background="brand" pad="small">
        <Nav direction="row" align="left" gap="small" style={{ fontSize: '10px' }}>
          <Link to="/Receiver" style={{ textDecoration: 'none', marginRight: '9px', marginLeft: '23px' }}>
            <Anchor color="white" size="large" style={{ fontSize: '17px', fontFamily: 'Calibri', fontWeight: 'normal'}} label="Receiver of Endowment" />
          </Link>
          <Link to="/Courier" style={{ textDecoration: 'none', marginRight: '9px' }}>
            <Anchor color="white" size="large" style={{ fontSize: '17px', fontFamily: 'Calibri', fontWeight: 'normal' }} label="Courier" />
          </Link>
          <Link to="/Thirdparty" style={{ textDecoration: 'none', marginRight: '9px' }}>
            <Anchor color="white" size="large" style={{ fontSize: '17px', fontFamily: 'Calibri', fontWeight: 'normal' }} label="3rd Party In Contract" />
          </Link>
          <Link to="/Votingrecord" style={{ textDecoration: 'none', marginRight: '9px' }}>
            <Anchor color="white" size="large" style={{ fontSize: '17px', fontFamily: 'Calibri', fontWeight: 'normal' }} label="Voting Records" />
          </Link>
          <Link to="/Wallet" style={{ textDecoration: 'none', marginRight: '9px' }}>
            <Anchor color="white" size="large" style={{ fontSize: '17px', fontFamily: 'Calibri', fontWeight: 'normal' }} label="Wallet" />
          </Link>
        </Nav>
        <Nav direction="row" align="Right" gap="small">
        <Link to="/">
          <Anchor color="white" size="large" style={{ fontSize: '22px', fontFamily: 'Calibri', fontWeight: 'bolder', color:'white', marginRight:'30px'}} label="Documentation For Transparancy" />
        </Link>
        </Nav>
      </Header>
      <Main>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Courier" element={<Courier />} />
          <Route path="/Receiver" element={<Receiver />} />
          <Route path="/Thirdparty" element={<Thirdparty />} />
          <Route path="/Votingrecord" element={<Votingrecord />} />
          <Route path="/Wallet" element={<Wallet />} />
          <Route path="/january2024" element={<January2024 />} />
          <Route path="/abdulla" element={<Abdulla />} />
          <Route path="/abdullajune2023" element={<Abdullajune2023 />} />
          <Route path="/adijaya" element={<Adijaya />} />
          <Route path="/bagusabdulrahman" element={<Bagusabdulrahman />} />
          <Route path="/walletjanuary2024" element={<Walletjanuary2024 />} />
        </Routes>
      </Main>
    </Grommet>
  );
};

export default Navbar;
