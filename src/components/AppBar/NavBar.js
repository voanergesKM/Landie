import React from 'react';
import { Box } from '../Box';
import { Button } from '../Button/Button';
import { Logo } from './AppBar.styled';
import { NavLink } from './NavLink';

export const AppBar = () => {
  return (
    <Box
      as="header"
      pt="12px"
      display="flex"
      alignItems="center"
      maxWidth="1140px"
      mx="auto"
      px={4}
    >
      <Box as="nav" display="flex" alignItems="center" mr="271px">
        <Box as="ul" display="flex" width="245px" justifyContent="space-between">
          <li>
            <NavLink linkTo={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink linkTo="/about">About</NavLink>
          </li>
          <li>
            <NavLink linkTo={'/contact'}>Contact</NavLink>
          </li>
        </Box>
      </Box>
      <Logo href="/">Landie</Logo>
      <Button width={'160px'} height={'26px'} style={{ marginLeft: 'auto' }}>
        Buy Now
      </Button>
    </Box>
  );
};
