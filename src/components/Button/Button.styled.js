import styled from 'styled-components';

export const StyledButton = styled.button`
  border: 2px solid ${p => p.theme.colors.button};
  border-radius: 2px;
  width: ${p => (p.width ? p.width : '189px')};
  height: ${p => (p.height ? p.height : '33px')};
  color: ${p => p.theme.colors.button};
  cursor: pointer;
  background-color: transparent;

  transition: all 250ms linear;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;
