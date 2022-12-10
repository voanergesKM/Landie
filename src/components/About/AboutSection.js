import React from 'react';
import { Box } from '../Box';
import { Container } from '../Container.styled';
import { Tite } from '../Title/Titles.styled';
import aboutBg from '../../images/aboutBg.png';
import { MainText } from '../Text/Text.styled';
import { AboutCard } from './AboutCard';

export const About = () => {
  return (
    <Box as={'section'} pb="109px" pt="109px">
      <Container image={aboutBg} style={{ paddingTop: '109px', paddingBottom: '109px' }}>
        <Tite style={{ marginBottom: '20px' }}>Light, Fast & Powerful</Tite>
        <MainText style={{ maxWidth: '540px', marginBottom: '80px' }}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
          dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim.
        </MainText>
        <Box display="flex" gap="30px">
          <AboutCard
            style={{ marginRight: '30px' }}
            title="Title Goes Here"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
          />
          <AboutCard
            title="Title Goes Here"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
          />
        </Box>
      </Container>
    </Box>
  );
};
