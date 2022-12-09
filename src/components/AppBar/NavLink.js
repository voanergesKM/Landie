import React from 'react';
import { StyledNavLink } from './AppBar.styled';

export const NavLink = ({ children, linkTo = null }) => {
  return <StyledNavLink href={linkTo}>{children}</StyledNavLink>;
};
