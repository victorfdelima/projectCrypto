import React from 'react';
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { formatCurrency } from '../utils/formatCurrency';
import { Logo } from './logo';
import { i18n } from '../translate/i18n';
import { Link, useLocation } from 'react-router-dom';
import { LanguageSelector } from './languageSelector';
import { MiddleEllipsis } from '../utils/text';
import { FaChevronDown } from 'react-icons/fa';
import { ConnectButton } from './connectButton';

export function Header({
  bnbPrice,
  contractBalance,
  investors,
  total,
  id,
  onConnectWallet,
  onDisconnect,
}) {
  const { pathname } = useLocation();

  return (
    <Flex flexDir='column'>
      <Flex
        bgColor='#141518'
        p={['0.25rem', '0.5rem 2rem', '0.5rem 2rem']}
        justify={['flex-start', 'center', 'space-between']}
      >
        <Flex
          align='center'
          justify='center'
          display={['none', 'none', 'flex']}
        >
          <Box w='8px' h='8px' mr='5px' borderRadius='16px' bgColor='#ffbc40' />
          <Text fontSize='13px'>{i18n.t('header.bnbPrice')}:</Text>
          <Text fontSize='13px' ml='4px' as='strong' fontWeight='bold'>
            {formatCurrency(bnbPrice)}
          </Text>
        </Flex>

        <Flex align='center' justify='center'>
          <Text fontSize='13px'>{i18n.t('header.contractBalance')}:</Text>
          <Text fontSize='13px' ml='4px' as='strong' fontWeight='bold'>
            {formatCurrency(contractBalance, true)}
          </Text>

          <Box w='8px' h='8px' mx='8px' borderRadius='16px' bgColor='#ffbc40' />

          <Text fontSize='13px'>{i18n.t('header.investors')}:</Text>
          <Text fontSize='13px' ml='4px' as='strong' fontWeight='bold'>
            {investors}
          </Text>
        </Flex>
      </Flex>

      <Flex
        p={['0.5rem', '0.5rem 3rem', '0.5rem 3rem']}
        align='center'
        justify='space-between'
      >
        <Logo />

        <Flex
          fontWeight='500'
          fontSize='14px'
          lineHeight='20px'
          align='center'
          display={['none', 'none', 'flex']}
        >
          <Link to='/'>
            <Text
              p='1rem'
              color={pathname === '/' ? 'white' : 'inherit'}
              fontWeight={pathname === '/' ? '600' : '500'}
            >
              {i18n.t('general.overview')}
            </Text>
          </Link>
          <Link to='/my-pools'>
            <Text
              p='1rem'
              color={pathname === '/my-pools' ? 'white' : 'inherit'}
              fontWeight={pathname === '/my-pools' ? '600' : '500'}
            >
              {i18n.t('general.pools')}
            </Text>
          </Link>
          <Flex as='a' href='#where-to-start'>
            <Text p='1rem'> {i18n.t('general.contract')} ↗</Text>
          </Flex>
        </Flex>

        <Flex style={{ gap: '0.5rem' }}>
          <LanguageSelector />

          <ConnectButton
            id={id}
            total={total}
            onConnectWallet={onConnectWallet}
            onDisconnect={onDisconnect}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
