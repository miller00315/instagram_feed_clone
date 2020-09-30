import React from 'react';
import { Image } from 'react-native';

import logo from '../../assets/images/logo.png';

import { Container } from './style';

export default function Header() {
  return (
    <Container>
      <Image source={logo} />
    </Container>
  );
}
