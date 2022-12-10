import styled from 'styled-components';

export const HeroTitle = styled.h1`
  font-weight: 500;
  font-size: 50px;
  line-height: 1.32;
  letter-spacing: 1px;
  color: ${p => p.theme.colors.title};
  max-width: 580px;
`;

export const Tite = styled.h2`
  font-weight: 500;
  font-size: 36px;
  line-height: 1.32;
  letter-spacing: 1px;
  color: ${p => p.theme.colors.title};
`;

export const AboutCardTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.62;

  color: ${p => p.theme.colors.title};
`;
