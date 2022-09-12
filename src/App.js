import { Flex } from '@chakra-ui/react';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { Balance } from './components/balance';
import { Description } from './components/description';
import { Footer } from './components/footer';
import { FrequentQuestions } from './components/frequentQuestions';
import { Header } from './components/header';
import { Liquidity } from './components/liquidity';
import { VideoList } from './components/videoList';
import erc20abi from './ERC20abi.json';

export default function App() {
  const [txs, setTxs] = useState([]);
  const [contractListened, setContractListened] = useState();
  const [token, setToken] = useState(null);
  const [contractInfo, setContractInfo] = useState({
    address: '-',
    tokenName: '-',
    tokenSymbol: '-',
    totalSupply: '-',
  });
  const [balanceInfo, setBalanceInfo] = useState({
    address: '-',
    balance: '-',
  });

  useEffect(() => {
    if (contractInfo.address !== '-') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const erc20 = new ethers.Contract(
        contractInfo.address,
        erc20abi,
        provider,
      );

      erc20.on('Transfer', (from, to, amount, event) => {
        setTxs((currentTxs) => [
          ...currentTxs,
          {
            txHash: event.transactionHash,
            from,
            to,
            amount: String(amount),
          },
        ]);
      });
      setContractListened(erc20);

      return () => {
        contractListened.removeAllListeners();
      };
    }
  }, [contractInfo.address]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const erc20 = new ethers.Contract(data.get('addr'), erc20abi, provider);

    const tokenName = await erc20.name();
    const tokenSymbol = await erc20.symbol();
    const totalSupply = await erc20.totalSupply();

    setContractInfo({
      address: data.get('addr'),
      tokenName,
      tokenSymbol,
      totalSupply,
    });
  };

  const getMyBalance = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const erc20 = new ethers.Contract(contractInfo.address, erc20abi, provider);
    const signer = await provider.getSigner();
    const signerAddress = await signer.getAddress();
    const balance = await erc20.balanceOf(signerAddress);

    setBalanceInfo({
      address: signerAddress,
      balance: String(balance),
    });
  };

  const handleTransfer = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = await provider.getSigner();
    const erc20 = new ethers.Contract(contractInfo.address, erc20abi, signer);
    await erc20.transfer(data.get('recipient'), data.get('amount'));
  };

  function handleConnectWallet(type) {
    // type: 'metamask' | 'walletconnect'

    // connect wallet

    setToken('0x2c818u65y8d91ye252');
  }

  function handleDisconnect() {
    // disconnect wallet

    setToken(null);
  }

  function handleWithdraw() {
    // withdraw
  }

  return (
    <Flex flexDir='column'>
      <Header
        bnbPrice={283.2}
        contractBalance={204.6}
        investors={1618}
        total={0.42}
        id={token}
        onConnectWallet={handleConnectWallet}
        onDisconnect={handleDisconnect}
      />

      <Flex w={['95vw', '80vw', '65vw']} m='0 auto' flexDir='column'>
        <Description />

        <Liquidity total={0.42} />

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
