import styled from 'styled-components';

export const LinkItem = styled.li`
  &:not(:last-child) {
    margin-right: 60px;
  }
`;

export const Link = styled.a`
  font-size: 14px;
  line-height: 1.71;
  color: ${p => p.theme.colors.footerLink};
  transition: all 250ms linear;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
`;

export const SocialItem = styled.li`
  color: #b0b8bc;
  cursor: pointer;
  transition: all 250ms linear;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }

  &:not(:last-child) {
    margin-right: 30px;
  }
`;
