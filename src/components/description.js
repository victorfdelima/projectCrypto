import React, { useEffect } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { i18n } from '../translate/i18n';
import homeIconsImg from '../assets/home-icons.png';

export function Description() {
  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      const pos = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };

      document.querySelectorAll('.cryptoImage').forEach((e) => {
        e.style.top = `${(pos.y * -1.2).toFixed(2)}rem`;
      });
      document.querySelectorAll('.cryptoImage').forEach((e) => {
        e.style.left = `${(pos.x * -1.2).toFixed(2)}rem`;
      });
    });

    return () => {
      document.removeEventListener('mousemove');
    };
  }, []);

  return (
    <Flex
      align='center'
      justify='center'
      mt='80px'
      flexDir={['column', 'column', 'row']}
    >
      <Flex flexDir='column'>
        <Flex align='center'>
          <Box bgColor='#40ff5c' rounded='full' w='12px' h='12px' />
          <Text
            ml='0.3rem'
            textTransform='uppercase'
            fontSize='15px'
            fontWeight={600}
            fontFamily='Inconsolata, monospace'
            color='white'
          >
            {i18n.t('title.description')}
          </Text>
        </Flex>

        <Heading
          fontSize='40px'
          color='#fff'
          fontWeight={600}
          lineHeight='48px'
        >
          <Text as='span' color='#ffbc40'>
            {i18n.t('title.main')}
          </Text>
          {i18n.t('title.rest')}
        </Heading>

        <Text mt='10px'>{i18n.t('title.sub')}</Text>
        <Text fontWeight={600}>{i18n.t('title.roi')}</Text>
      </Flex>

      <Box w='70vw' mt='2rem' display={['flex', 'flex', 'none']}>
        <img
          className='cryptoImage'
          src={homeIconsImg}
          alt='Crypto'
          style={{
            width: '100%',
            position: 'relative',
          }}
        />
      </Box>
      <Box w='25vw' display={['none', 'none', 'flex']}>
        <img
          className='cryptoImage'
          src={homeIconsImg}
          alt='Crypto'
          style={{
            width: '100%',
            marginLeft: '3rem',
            position: 'relative',
          }}
        />
      </Box>
    </Flex>
  );
}
