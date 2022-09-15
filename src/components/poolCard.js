import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { i18n } from '../translate/i18n';

export function PoolCard({ pool }) {
  const {
    status,
    startDate,
    endDate,
    liquidity,
    totalReturn,
    totalReturnPercent,
    expectedProfit,
    expectedPercentage,
    withdrawTime,
    withdrawDays,
  } = pool;

  return (
    <Flex
      flexDir='column'
      w={['100%', '48%', '32%']}
      p='10px'
      borderRadius='8px'
      bgColor='#17191d'
    >
      <Flex justify='space-between' align='center'>
        <Flex align='center'>
          <Box
            bgColor={status === 'inProgress' ? '#ffbc40' : '#40ff5c'}
            w='8px'
            h='8px'
            borderRadius='4px'
          />
          <Text fontWeight='500' fontSize='15px' color='#fff' ml='4px'>
            {i18n.t(`myPools.status.${status}`)}
          </Text>
        </Flex>
        <Text
          bgColor='hsla(0, 0%, 100%, 0.1)'
          color='#fff'
          fontSize='11px'
          p='2px 4px'
          borderRadius='6px'
        >{`${startDate} - ${endDate}`}</Text>
      </Flex>

      {/* GRAPHIC */}
      <Box
        mt='10px'
        bgColor='#25232a'
        h='200px'
        p='12px 10px'
        borderRadius='8px'
      />

      <Flex mt='20px' style={{ gap: '12px' }}>
        <Flex
          flexDir='column'
          p='10px 5px'
          border='1px solid hsla(0, 0%, 100%, 0.2)'
          borderRadius='8px'
          align='center'
          width='50%'
        >
          <Text color='#ffbc40' fontSize='13px' text-align='center'>
            {i18n.t('liquidity.main')}
          </Text>

          <Text
            fontSize='20px'
            mt='5px'
            fontFamily='Inconsolata, monospace'
            fontWeight='700'
            color='#fff'
          >
            {liquidity} BNB
          </Text>

          <Text
            bgColor='hsla(0, 0%, 100%, 0.1)'
            color='#fff'
            fontSize='11px'
            p='2px 4px'
            borderRadius='6px'
          >
            {i18n.t('myPools.stakedAmount')}
          </Text>
        </Flex>
        <Flex
          flexDir='column'
          p='10px 5px'
          border='1px solid hsla(0, 0%, 100%, 0.2)'
          borderRadius='8px'
          align='center'
          width='50%'
        >
          <Text color='#ffbc40' fontSize='13px' text-align='center'>
            {i18n.t('liquidity.totalReturn')}
          </Text>

          <Text
            fontSize='20px'
            mt='5px'
            fontFamily='Inconsolata, monospace'
            fontWeight='700'
            color='#fff'
          >
            {totalReturn} BNB
          </Text>

          <Text
            bgColor='hsla(0, 0%, 100%, 0.1)'
            color='#fff'
            fontSize='11px'
            p='2px 4px'
            borderRadius='6px'
          >
            {totalReturnPercent}
            {i18n.t('myPools.percentPerDay')}
          </Text>
        </Flex>
      </Flex>

      <Flex mt='20px' style={{ gap: '12px' }}>
        <Flex
          flexDir='column'
          p='10px 5px'
          border='1px solid hsla(0, 0%, 100%, 0.2)'
          borderRadius='8px'
          align='center'
          width='50%'
        >
          <Text color='#ffbc40' fontSize='13px' text-align='center'>
            {i18n.t('myPools.expectedProfit')}
          </Text>

          <Text
            fontSize='20px'
            mt='5px'
            fontFamily='Inconsolata, monospace'
            fontWeight='700'
            color='#fff'
          >
            {expectedProfit} BNB
          </Text>

          <Text
            bgColor='hsla(0, 0%, 100%, 0.1)'
            color='#fff'
            fontSize='11px'
            p='2px 4px'
            borderRadius='6px'
          >
            {`${expectedPercentage}${i18n.t('myPools.percentProfit')}`}
          </Text>
        </Flex>
        <Flex
          flexDir='column'
          p='10px 5px'
          border='1px solid hsla(0, 0%, 100%, 0.2)'
          borderRadius='8px'
          align='center'
          width='50%'
        >
          <Text color='#ffbc40' fontSize='13px' text-align='center'>
            {i18n.t('liquidity.withdrawTime')}
          </Text>

          <Text
            fontSize='20px'
            mt='5px'
            fontFamily='Inconsolata, monospace'
            fontWeight='700'
            color='#fff'
          >
            {withdrawTime}
          </Text>

          <Text
            bgColor='hsla(0, 0%, 100%, 0.1)'
            color='#fff'
            fontSize='11px'
            p='2px 4px'
            borderRadius='6px'
          >
            {withdrawDays} &nbsp;
            {i18n.t('time.days')}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
