import React from 'react';
import { Box, Button, Flex, Heading, Text, Tooltip } from '@chakra-ui/react';
import { i18n } from '../translate/i18n';
import { FiAlertCircle } from 'react-icons/fi';

export function Balance({
  totalStaked,
  availableForWithdraw,
  referringLink,
  totalReferralEarned,
  totalReferralWithDraw,
  directReferredMembers,
  totalStakedTooltip,
  availableForWithdrawTooltip,
  onWithdraw,
}) {
  return (
    <Flex mt='3rem' style={{ gap: '1rem' }} flexDir={["column", "column", "row"]}>
      <Flex
        borderRadius='12px'
        bgColor='#17191D'
        p='20px'
        flex={2}
        flexDir='column'
        h='100%'
      >
        <Heading as='h3' fontSize='20px' fontWeight='600'>
          {i18n.t('balance.title')}
        </Heading>

        <Flex
          mt='20px'
          color='#ffbc40'
          fontFamily='Inconsolata, monospace'
          fontSize='28px'
          fontWeight='700'
          align='center'
        >
          {totalStaked} BNB
          <Tooltip
            aria-label='A tooltip'
            label={totalStakedTooltip}
            hasArrow
            placement='right'
          >
            <Box ml='1rem' pr='4px'>
              <FiAlertCircle size='16' />
            </Box>
          </Tooltip>
        </Flex>
        <Text
          fontSize='13px'
          p='2px 4px'
          borderRadius='6px'
          bgColor='hsla(0, 0%, 100%, 0.1)'
          color='#fff'
          w='fit-content'
        >
          {i18n.t('balance.totalStaked')}
        </Text>

        <Flex
          mt='20px'
          color='#ffbc40'
          fontFamily='Inconsolata, monospace'
          fontSize='28px'
          fontWeight='700'
          align='center'
        >
          {availableForWithdraw} BNB
          <Tooltip
            aria-label='A tooltip'
            label={availableForWithdrawTooltip}
            hasArrow
            placement='right'
          >
            <Box ml='1rem' pr='4px'>
              <FiAlertCircle size='16' />
            </Box>
          </Tooltip>
        </Flex>
        <Text
          fontSize='13px'
          p='2px 4px'
          borderRadius='6px'
          bgColor='hsla(0, 0%, 100%, 0.1)'
          color='#fff'
          w='fit-content'
        >
          {i18n.t('balance.availableForWithdraw')}
        </Text>

        <Button
          onClick={onWithdraw}
          mt='40px'
          bgColor='grey'
          colorScheme='blackAlpha'
          h='52px'
          borderRadius='8px'
          fontWeight='600'
        >
          Withdraw
        </Button>
      </Flex>
      <Flex
        borderRadius='12px'
        bgColor='#17191D'
        p='20px'
        flex={3}
        h='100%'
        minH="100%"
        maxH="100%"
        flexDir='column'
        justify='space-between'
      ></Flex>
    </Flex>
  );
}
