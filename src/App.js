import { Flex } from '@chakra-ui/react';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { Header } from './components/header';
import erc20abi from './ERC20abi.json';
import { i18n } from './translate/i18n';
import TxList from './TxList';

export default function App() {
  const [txs, setTxs] = useState([]);
  const [contractListened, setContractListened] = useState();
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
        console.log({ from, to, amount, event });

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

  useEffect(() => {
    i18n.changeLanguage('en');
  }, []);

  return (
    <Flex flexDir='column'>
      <Header
        bnbPrice={283.2}
        contractBalance={204.6}
        investors={1618}
        total={0.42}
        id='0x2c818u65y8d91ye252'
      />

      <button onClick={getMyBalance}>Balança</button>
    </Flex>
  );
}
