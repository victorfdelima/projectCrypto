import React from 'react';
import { Box, Button, Flex, Heading, Text, Tooltip } from '@chakra-ui/react';
import { i18n } from '../translate/i18n';
import { FiAlertCircle } from 'react-icons/fi';
import { TextEllipsis } from '../utils/text';

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
    <Flex
      mt='3rem'
      style={{ gap: '1rem' }}
      flexDir={['column', 'column', 'row']}
    >
      <Flex
        borderRadius='12px'
        bgColor='#17191D'
        p='20px'
        flex={2}
        flexDir='column'
        h='100%'
        minH='412px'
      >
        <Flex flexDir='column' flex={1}>
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
        </Flex>

        <Button
          onClick={onWithdraw}
          mt='40px'
          bgColor='grey'
          colorScheme='blackAlpha'
          h='52px'
          borderRadius='8px'
          fontWeight='600'
          textTransform='uppercase'
        >
          {i18n.t('general.withdraw')}
        </Button>
      </Flex>
      <Flex
        borderRadius='12px'
        bgColor='#17191D'
        p='20px'
        flex={3}
        h='100%'
        minH='100%'
        maxH='100%'
        flexDir='column'
        justify='space-between'
        minH='412px'
      >
        <Flex flexDir='column' align='center' color='hsla(0, 0%, 100%, 0.55)'>
          <Heading as='h4' fontSize='22px' color='#fff' fontWeight='600'>
            {i18n.t('referring.title')}
          </Heading>
          <Text fontSize='14px' mt='10px'>
            {i18n.t('referring.subOne')}{' '}
            <Text as='span' color='#ffbc40'>
              {i18n.t('referring.specialSubOne')}
            </Text>
          </Text>
          <Text fontSize='14px'>{i18n.t('referring.subTwo')}</Text>
        </Flex>

        <Flex align='center' justify='center' style={{ gap: '0.75rem' }}>
          <Box
            as='input'
            p='12px'
            height='45px'
            fontSize='13px'
            border='1px solid hsla(0, 0%, 100%, 0.2)'
            bgColor='#222327'
            flex={1}
            readOnly
            defaultValue={referringLink}
            borderRadius='8px'
          />

          <Button
            bgColor='#eba524'
            color='white'
            colorScheme='yellow'
            fontSize='13px'
            fontWeight='600'
            px='32px'
            textTransform='uppercase'
          >
            {i18n.t('general.copy')}
          </Button>
        </Flex>

        <Flex w='100%' style={{ gap: '1rem' }}>
          <Flex
            flexDir='column'
            p='24px 8px'
            align='center'
            justify='center'
            borderRadius='8px'
            border='1px solid hsla(0, 0%, 100%, 0.2)'
            flex={1}
          >
            <Text color='#ffbc40' fontSize='13px' textAlign='center'>
              {i18n.t('referring.totalReferralEarned')}
            </Text>
            <Text
              fontSize='20px'
              fontFamily='Inconsolata, monospace'
              fontWeight='700'
              color='#fff'
            >
              {totalReferralEarned} BNB
            </Text>
          </Flex>
          <Flex
            flexDir='column'
            p='24px 8px'
            align='center'
            justify='center'
            borderRadius='8px'
            border='1px solid hsla(0, 0%, 100%, 0.2)'
            flex={1}
          >
            <Text color='#ffbc40' fontSize='13px' textAlign='center'>
              {i18n.t('referring.totalReferralWithdrawn')}
            </Text>
            <Text
              fontSize='20px'
              fontFamily='Inconsolata, monospace'
              fontWeight='700'
              color='#fff'
            >
              {totalReferralWithDraw}
            </Text>
          </Flex>
          <Flex
            flexDir='column'
            p='24px 8px'
            align='center'
            justify='center'
            borderRadius='8px'
            border='1px solid hsla(0, 0%, 100%, 0.2)'
            flex={1}
          >
            <Text color='#ffbc40' fontSize='13px' textAlign='center'>
              {i18n.t('referring.directReferredMembers')}
            </Text>
            <Text
              fontSize='20px'
              fontFamily='Inconsolata, monospace'
              fontWeight='700'
              color='#fff'
            >
              {directReferredMembers}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
