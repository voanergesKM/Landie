import styled from 'styled-components';

export const HeroText = styled.p`
  font-size: 18px;
  line-height: 1.67;
  color: ${p => p.theme.colors.heroText};
  max-width: 580px;
`;

export const MainText = styled.p`
  font-size: 16px;
  line-height: 1.62;

  color: ${p => p.theme.colors.mainText};
`;

export const AboutText = styled.p`
  font-size: 12px;
  line-height: 1.5;

  color: ${p => p.theme.colors.secondaryText};
`;
