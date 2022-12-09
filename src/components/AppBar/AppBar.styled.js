import styled from 'styled-components';

export const StyledNavLink = styled.a`
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.7;

  color: ${p => p.theme.colors.navLink};
  cursor: pointer;

  transition: all 250ms linear;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
`;

export const Logo = styled.a`
  color: ${p => p.theme.colors.logo};

  font-weight: 900;
  font-size: 26px;
  line-height: 1.46;
`;
