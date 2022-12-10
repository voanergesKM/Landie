import React from 'react';
import { AboutText } from '../Text/Text.styled';
import { AboutCardTitle } from '../Title/Titles.styled';
import { Wrapper } from './AboutSection.styled';
import aboutCardIcon from '../../images/aboutCardIcon.svg';

export const AboutCard = ({ title, text, style = {} }) => {
  style = {
    ...style,
  };
  return (
    <Wrapper style={style} image={aboutCardIcon}>
      <AboutCardTitle style={{ marginBottom: '6px' }}>{title}</AboutCardTitle>
      <AboutText>{text}</AboutText>
    </Wrapper>
  );
};
