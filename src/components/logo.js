import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import logoImg from '../assets/logo.svg';
import { useHistory } from 'react-router-dom';

export function Logo({ size = 32, fontColor = 'white' }) {
  const history = useHistory();

  return (
    <Flex
      align='center'
      justify='center'
      cursor='pointer'
      onClick={() => history.push('/')}
    >
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
