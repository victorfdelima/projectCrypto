import React, { useRef, useState } from 'react';
import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react';
import { i18n } from '../translate/i18n';

export function Liquidity({ total }) {
  const [selectedGroupId, setSelectedGroupId] = useState(1);

  const percentageGroups = useRef([
    {
      id: 1,
      percentage: 8,
      days: 14,
    },
    {
      id: 2,
      percentage: 6.5,
      days: 21,
    },
    {
      id: 3,
      percentage: 5,
      days: 28,
    },
  ]);

  return (
    <Flex
      flexDir='column'
      p='20px'
      bgColor='#17191d'
      mt='3rem'
      borderRadius='12px'
    >
      <Heading as='h3' fontSize='20px' fontWeight='600' textAlign='center'>
        {i18n.t('liquidity.title')}
      </Heading>

      <Box h='1.5px' bgColor='hsla(0, 0%, 100%, 0.2)' w='100%' mt='20px' />

      <Flex
        mt='20px'
        flexDir={['column', 'column', 'row']}
        style={{ gap: '1rem' }}
      >
        <Flex flexDir='column' flex={1}>
          <Text fontSize='15px' color='white' fontWeight='600'>
            {i18n.t('liquidity.selectPlan')}
          </Text>

          <Flex
            justify='space-between'
            align='center'
            border='1px solid'
            borderColor='hsla(0, 0%, 100%, 0.2)'
            borderRadius='8px'
            w='100%'
            mt='10px'
            p='10px'
          >
            <Flex flexDir='column'>
              <Text fontWeight={600}>{i18n.t('liquidity.anyTime')}</Text>
              <Box
                p='0.25rem'
                bgColor='hsla(0, 0%, 100%, 0.2)'
                borderRadius='6px'
                fontSize='11px'
                mt='10px'
              >
                {i18n.t('liquidity.withdrawTime')}
              </Box>
            </Flex>

            <Button
              onClick={() => {}}
              bgColor='hsla(0, 0%, 100%, 0.2)'
              fontSize='12px'
              padding='0.5rem 0.75rem'
              h='auto'
              colorScheme='blackAlpha'
            >
              {i18n.t('general.change')}
            </Button>
          </Flex>

          <Flex style={{ gap: '0.5rem' }} mt='1rem'>
            {percentageGroups.current.map((group) => (
              <Flex
                as='button'
                key={group.id}
                flexDir='column'
                border='1px solid'
                borderColor={
                  group.id === selectedGroupId
                    ? '#ffbc40'
                    : 'hsla(0, 0%, 100%, 0.2)'
                }
                borderRadius='8px'
                w='100%'
                p='10px'
                onClick={() => setSelectedGroupId(group.id)}
              >
                <Text
                  fontSize='20px'
                  fontFamily='Inconsolata, monospace'
                  color='#fff'
                  fontWeight='700'
                >
                  {group.percentage}%
                </Text>
                <Text color='#ffbc40' fontSize='13px'>
                  {i18n.t('liquidity.dailyProfit')}
                </Text>
                <Text
                  p='0.25rem'
                  bgColor='hsla(0, 0%, 100%, 0.2)'
                  borderRadius='6px'
                  fontSize='11px'
                  mt='4px'
                  w='fit-content'
                >
                  {group.days} {i18n.t('time.days')}
                </Text>
              </Flex>
            ))}
          </Flex>

          <Flex flexDir='column' mt='20px'>
            <Text color='#fff' fontSize='15px' fontWeight='600'>
              {i18n.t('liquidity.depositAmount')}
            </Text>
            <Flex
              border='1px solid'
              borderColor='hsla(0, 0%, 100%, 0.2)'
              borderRadius='8px'
              w='100%'
              mt='10px'
              align='center'
            >
              <Input
                placeholder='0.0'
                flex={1}
                px='10px'
                h='75px'
                border='none'
                fontFamily='Inconsolata, monospace'
                fontSize='32px'
                fontWeight='700'
              />
              <Flex flexDir='column' mr='10px'>
                <Flex
                  bgColor='hsla(0, 0%, 100%, 0.2)'
                  p='4px 8px'
                  borderRadius={50}
                >
                  <img
                    src='https://assets.website-files.com/630d1bf74bbd1f9cc080f503/630d1e43cfd0c552203c5379_bnb.webp'
                    alt='BNB'
                    style={{ height: '24px', marginRight: '8px' }}
                  />
                  BNB
                </Flex>
                <Flex
                  fontFamily='Inconsolata, monospace'
                  fontSize='15px'
                  fontWeight='700'
                  color='hsla(0, 0%, 100%, 0.48)'
                >
                  {i18n.t('liquidity.balance')}: {total}
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          <Button
            mt='20px'
            bgColor='#eba524'
            colorScheme='yellow'
            h='52px'
            color='white'
          >
            {i18n.t('liquidity.stakingBnb')}
          </Button>
        </Flex>
        <Flex flex={1} flexDir='column'>
          <Text fontSize='15px' color='white' fontWeight='600'>
            {i18n.t('general.overview')}
          </Text>
          <Flex mt='10px' flex={1} borderRadius='8px' bgColor='#25232a'></Flex>

          <Flex style={{ gap: '1rem' }} mt="20px">
            <Flex
              flexDir='column'
              align='center'
              border='1px solid'
              borderColor='hsla(0, 0%, 100%, 0.2)'
              borderRadius='8px'
              w='100%'
              py='10px'
            >
              <Text color='#ffbc40' fontSize='13px' textAlign='center'>
                {i18n.t('liquidity.totalReturn')}
              </Text>
              <Text
                color='#fff'
                fontFamily='Inconsolata, monospace'
                fontSize='20px'
                fontWeight='700'
              >
                1.4 BNB
              </Text>
              <Box
                bgColor='hsla(0, 0%, 100%, 0.2)'
                p='2px 4px'
                borderRadius='6px'
                fontSize='11px'
                color='#fff'
              >
                {140}% {i18n.t('liquidity.totalProfit')}
              </Box>
            </Flex>
            <Flex
              flexDir='column'
              align='center'
              border='1px solid'
              borderColor='hsla(0, 0%, 100%, 0.2)'
              borderRadius='8px'
              w='100%'
              py='10px'
            >
              <Text color='#ffbc40' fontSize='13px' textAlign='center'>
                {i18n.t('liquidity.withdrawTime')}
              </Text>
              <Text
                color='#fff'
                fontFamily='Inconsolata, monospace'
                fontSize='20px'
                fontWeight='700'
              >
                {
                  percentageGroups.current.find((g) => g.id === selectedGroupId)
                    .days
                }{' '}
                {i18n.t('time.days')}
              </Text>
              <Box
                bgColor='hsla(0, 0%, 100%, 0.2)'
                p='2px 4px'
                borderRadius='6px'
                fontSize='11px'
                color='#fff'
              >
                {140}% {i18n.t('liquidity.totalProfit')}
              </Box>
            </Flex>
          </Flex>

          <Box
            display='flex'
            bgColor='rgba(255, 188, 64, 0.2)'
            color='white'
            fontSize='13px'
            p='6px 4px'
            borderRadius='6px'
            mt='20px'
            mb="6px"
          >
            {i18n.t('general.warning')}: {i18n.t('liquidity.warning')}
            <Text color='#ffbc40'>{i18n.t('general.termsAndPolicies')}</Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
