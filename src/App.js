import { Flex } from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { Balance } from './components/balance';
import { connectors } from './components/connectors';
import { Description } from './components/description';
import { Footer } from './components/footer';
import { FrequentQuestions } from './components/frequentQuestions';
import { Header } from './components/header';
import { Liquidity } from './components/liquidity';
import { VideoList } from './components/videoList';

export default function App() {
  const [balance, setBalance] = useState(0);

  const { account, activate, deactivate } = useWeb3React();

  useEffect(() => {
    if (!account || !window.ethereum) return;

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

  function handleWithdraw() {}

  function handleStakingBNB(data) {
    /**
     * data = {
     *   value: number,
     *   plan: 'any-time' | 'end-plan',
     *   percentage: number,
     *   days: number,
     * }
     */
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

      <Flex w={['95vw', '80vw', '65vw']} m='0 auto' flexDir='column'>
        <Description />

        <Liquidity total={balance} onSubmit={handleStakingBNB} />

        <VideoList
          videos={[
            'KKYGRI0qwXE',
            'nooUwtdfaqQ',
            'Ss3PhdfPySY',
            'xVnELRoT--U',
            'wHGvvFYbstQ',
            'nnF_UqomQjE',
          ]}
        />

        <Balance
          availableForWithdraw={0.01}
          directReferredMembers={2}
          referringLink={
            'https://poolsmine.com?0x2c814A9112c82C9Cb14372459E2CA3b5BEfae252'
          }
          totalReferralEarned={0.002}
          totalReferralWithDraw={0}
          totalStaked={1.02}
          totalStakedTooltip='Lorem Ipsum'
          availableForWithdrawTooltip='Lorem Ipsum'
          onWithdraw={handleWithdraw}
        />

        <FrequentQuestions />
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
