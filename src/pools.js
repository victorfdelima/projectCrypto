import { Flex, Text } from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { connectors } from './components/connectors';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { PoolCard } from './components/poolCard';
import { i18n } from './translate/i18n';

export function Pools() {
  const [pools, setPools] = useState([
    {
      id: 1,
      status: 'inProgress',
      startDate: '28 Aug',
      endDate: '30 Sep',
      liquidity: 1,
      totalReturn: 0.05,
      totalReturnPercent: 5,
      expectedProfit: 1.4,
      expectedPercentage: 140,
      withdrawTime: 'Any time',
      withdrawDays: 28,
    },
    {
      id: 2,
      status: 'inProgress',
      startDate: '28 Aug',
      endDate: '30 Sep',
      liquidity: 1,
      totalReturn: 0.05,
      totalReturnPercent: 5,
      expectedProfit: 1.4,
      expectedPercentage: 140,
      withdrawTime: 'Any time',
      withdrawDays: 28,
    },
    {
      id: 3,
      status: 'completed',
      startDate: '28 Aug',
      endDate: '30 Sep',
      liquidity: 1,
      totalReturn: 0.05,
      totalReturnPercent: 5,
      expectedProfit: 1.4,
      expectedPercentage: 140,
      withdrawTime: 'Any time',
      withdrawDays: 28,
    },
  ]);
  const [balance, setBalance] = useState(0);

  const { account, activate, deactivate } = useWeb3React();

  useEffect(() => {
    if (!window.ethereum || !account) return;

    const web3 = new Web3(window.ethereum);

    web3.eth.getBalance(account).then((balanceInWei) => {
      const costBalance = web3.utils.fromWei(balanceInWei);
      setBalance(costBalance);
    });
  }, [account]);

  function handleConnectWallet(type) {
    if (type === 'walletconnect') {
      activate(connectors.walletConnect);
    } else {
      activate(connectors.injected);
    }
  }

  function handleDisconnect() {
    deactivate();
  }

  return (
    <Flex flexDir='column'>
      <Header
        bnbPrice={283.2}
        contractBalance={204.6}
        investors={1618}
        total={balance}
        id={account}
        onConnectWallet={handleConnectWallet}
        onDisconnect={handleDisconnect}
      />

      <Flex
        w={['95vw', '80vw', '65vw']}
        minH='calc(100vh - 285.5px)'
        m='0 auto'
        flexDir='column'
        justify='center'
      >
        <Text fontSize='20px' textDecor='none' color='#fff' fontWeight='500'>
          {i18n.t('myPools.title')}
        </Text>

        <Flex
          style={{ gap: '1rem' }}
          justify='space-between'
          w='100%'
          wrap='wrap'
          mt='10px'
        >
          {pools.map((pool) => (
            <PoolCard key={pool.id} pool={pool} />
          ))}
        </Flex>
      </Flex>

      <Footer
        telegram='https://telegram.org'
        instagram='https://instagram.com'
        twitter='https://twitter.com'
        youtube='https://youtube.com'
      />
    </Flex>
  );
}
