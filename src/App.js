import React from 'react';
import { Box } from './components/Box';
import { AppBar } from './components/AppBar/NavBar';
import { HeroSection } from './components/Hero/HeroSection';
import { About } from './components/About/AboutSection';
import { FeaturesSection } from './components/Features/FeaturesSection';

export const App = () => {
  return (
    <Box mx="auto" maxWidth="1440px">
      <AppBar />
      <Box as="main">
        <HeroSection />
        <About />
        <FeaturesSection />
      </Box>
    </Box>
  );
};
