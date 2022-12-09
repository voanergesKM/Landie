import React from 'react';
import { StyledButton } from './Button.styled';

export const Button = ({ children, width, height, style = {} }) => {
  return (
    <StyledButton width={width} height={height} style={style}>
      {children}
    </StyledButton>
  );
};
