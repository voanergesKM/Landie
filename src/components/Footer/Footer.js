import React from 'react';
import { Box } from '../Box';
import { Container } from '../Container.styled';
import { Link, LinkItem } from './Footer.styled';
import { SocialList } from './FooterSocial';

export const Footer = () => {
  return (
    <Box as="footer" maxWidth="1440px" mx="auto" pt="20px" pb="32px" backgroundColor="#E7ECFF">
      <Container style={{ display: 'flex' }}>
        <Box as="ul" display="flex">
          <LinkItem>
            <Link href="/">Home</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">About</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Contact</Link>
          </LinkItem>
        </Box>
        <SocialList />
      </Container>
    </Box>
  );
};
