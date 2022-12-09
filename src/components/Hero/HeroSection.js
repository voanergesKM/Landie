import React from 'react';
import { Box } from '../Box';
import { HeroTitle } from '../Title/Titles.styled';
import { HeroText } from '../Text/Text.styled';
import { Button } from '../Button/Button';
import { Hero } from './HeroSection.styled';

export const HeroSection = () => {
  return (
    <Hero>
      <Box maxWidth="1140px" px={4} mx="auto">
        <HeroTitle style={{ marginBottom: '20px' }}>
          Introduce Your Product Quickly & Effectively
        </HeroTitle>
        <HeroText style={{ marginBottom: '39px' }}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
          dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim.
        </HeroText>
        <Button style={{ marginRight: '30px' }}>Purchase UI Kit</Button>
        <Button>Learn More</Button>
      </Box>
    </Hero>
  );
};
