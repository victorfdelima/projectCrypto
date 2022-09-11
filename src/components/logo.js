import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import logoImg from '../assets/logo.svg';

export function Logo({ size = 32, fontColor = 'white' }) {
  return (
    <Flex align='center' justify='center'>
      <img src={logoImg} style={{ height: size }} alt='PoolsMine' />
      <Text
        fontSize='20px'
        display={['none', 'none', 'inline-block']}
        fontWeight='600'
        ml='0.5rem'
        color={fontColor}
      >
        PoolsMine
      </Text>
    </Flex>
  );
}
