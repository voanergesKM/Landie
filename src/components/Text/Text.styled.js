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

export const PriceAccent = styled.span`
  font-weight: 500;
  font-size: 50px;
  line-height: 1.32;
  letter-spacing: 1px;
  color: ${p => p.theme.colors.priceAccent};
`;

export const PriceCopyrightText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.71;
  color: #939ea4;
`;
