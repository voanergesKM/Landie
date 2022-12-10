import React from 'react';
import { Box } from '../Box';
import { Button } from '../Button/Button';
import { MainText } from '../Text/Text.styled';
import { Tite } from '../Title/Titles.styled';

export const FeatureCard = ({ button = null, title, text, image }) => {
  return (
    <Box display="flex" py="100px" alignItems="center">
      <Box as={'img'} src={image} width="445px" height="312px" alt="title" mr="155px" />
      <Box>
        <Tite style={{ marginBottom: '16px' }}>{title}</Tite>
        <MainText>{text}</MainText>
        {button && (
          <Button width={'150px'} height={'24px'} style={{ marginTop: '40px' }}>
            Purchase Now
          </Button>
        )}
      </Box>
    </Box>
  );
};
