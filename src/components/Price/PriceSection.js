import React from 'react';
import { Logo } from '../AppBar/AppBar.styled';
import { Box } from '../Box';
import { Button } from '../Button/Button';
import { Container } from '../Container.styled';
import { MainText, PriceAccent, PriceCopyrightText } from '../Text/Text.styled';
import { Tite } from '../Title/Titles.styled';
import { Price } from './PriceSection.styled';

export const PriceSection = () => {
  return (
    <Price as={'section'} pt="238px">
      <Box
        maxWidth="1140px"
        px="15px"
        mx="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Tite style={{ marginBottom: '16px' }}>A Price To Suit Everyone</Tite>
        <MainText style={{ maxWidth: '600px', textAlign: 'center', marginBottom: '36px' }}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
          dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus
        </MainText>
        <PriceAccent>$40</PriceAccent>
        <span style={{ color: '#37447E', marginBottom: '60px' }}>UI Design Kit</span>
        <span
          style={{ color: '#5D6970', fontSize: '14px', lineHeight: '24px', marginBottom: '9px' }}
        >
          See, One price. Simple.
        </span>
        <Button width="189px" height="32px" style={{ fontSize: '14px', marginBottom: '172px' }}>
          Purchase now
        </Button>
      </Box>
      <Box style={{ width: '100%', backgroundColor: '#E7ECFF' }}>
        <Container>
          <Box
            pt="60px"
            pb="40px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            style={{ borderBottom: '1px solid #CDD1D4', width: '100%' }}
          >
            <PriceCopyrightText>©2020 Yourcompany</PriceCopyrightText>
            <p>
              <Logo href="/">Landie</Logo>
            </p>
            <Button style={{ width: '109px', height: '26px', fontSize: '12px' }}>
              Purchase now
            </Button>
          </Box>
        </Container>
      </Box>
    </Price>
  );
};
