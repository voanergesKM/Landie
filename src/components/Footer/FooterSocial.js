import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Box } from '../Box';
import { SocialItem } from './Footer.styled';

export const SocialList = () => {
  return (
    <Box as="ul" display="flex" marginLeft="auto">
      <SocialItem>
        <FaFacebookF size={16} />
      </SocialItem>
      <SocialItem>
        <FaLinkedinIn size={16} />
      </SocialItem>
      <SocialItem>
        <FaTwitter size={16} />
      </SocialItem>
      <SocialItem>
        <FaYoutube size={16} />
      </SocialItem>
      <SocialItem>
        <FaInstagram size={16} />
      </SocialItem>
    </Box>
  );
};
