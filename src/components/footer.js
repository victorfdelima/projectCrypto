import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import {
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { i18n } from '../translate/i18n';

export function Footer({ telegram, instagram, twitter, youtube }) {
  return (
    <Box bgColor='#17191d' py='10px' mt='5rem'>
      <Flex
        py='30px'
        maxW='940px'
        margin='0 auto'
        w='95%'
        color='hsla(0, 0%, 100%, 0.4)'
        fontSize='14px'
        align='center'
        justify={['center', 'center', 'space-between']}
        flexDir={['column', 'column', 'row']}
        style={{ gap: '1rem' }}
      >
        <Text>
          &copy; {new Date().getFullYear()} PoolsMine.{' '}
          {i18n.t('general.allRightsReserved')}
        </Text>

        <Flex align='center' style={{ gap: '2rem' }}>
          {telegram && (
            <Link href={telegram}>
              <FaTelegramPlane size={22} color='#B2B3B4' />
            </Link>
          )}
          {twitter && (
            <Link href={twitter}>
              <FaTwitter size={22} color='#B2B3B4' />
            </Link>
          )}
          {instagram && (
            <Link href={instagram}>
              <FaInstagram size={22} color='#B2B3B4' />
            </Link>
          )}
          {youtube && (
            <Link href={youtube}>
              <FaYoutube size={22} color='#B2B3B4' />
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
