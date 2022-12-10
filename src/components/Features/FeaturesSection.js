import React from 'react';
import { Box } from '../Box';
import { Container } from '../Container.styled';
import { features } from '../../utils/Features';
import { FeatureCard } from './FeatureCard';

export const FeaturesSection = () => {
  return (
    <Box as={'section'}>
      <Container>
        {features.map(({ id, image, title, text, button }) => (
          <FeatureCard key={id} image={image} title={title} text={text} button={button} />
        ))}
      </Container>
    </Box>
  );
};
