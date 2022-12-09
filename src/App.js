import React from 'react';
import { Box } from './components/Box';
import { AppBar } from './components/AppBar/NavBar';
import { HeroSection } from './components/Hero/HeroSection';

export const App = () => {
  return (
    <Box mx="auto" maxWidth="1440px">
      <AppBar />
      <Box as="main">
        <HeroSection></HeroSection>
      </Box>
    </Box>
  );
};
