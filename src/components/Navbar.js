import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { Box } from '@mui/material';

import Logo from '../assets/images/Logo.webp';
import { padding } from '@mui/system';

const Navbar = () => (
  <Box bgcolor="#414141" p>
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '68px', height: '68px', margin: '0px 20px' }} className="navbar"/>
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: 'white', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: 'white' }}>Exercises</a>
    </Stack>
  </Stack>
  </Box>
);

export default Navbar;
