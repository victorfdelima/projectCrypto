import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Balance } from "./components/balance";
import { Description } from "./components/description";
import { Header } from "./components/header";
import { Liquidity } from "./components/liquidity";
import { VideoList } from "./components/videoList";
import { useWeb3React } from "@web3-react/core";
export default function App() {
  const [token, setToken] = useState();
  const { account } = useWeb3React();

  function handleConnectWallet(type) {
    setToken(account);
  }

  function handleDisconnect() {
    setToken(null);
  }

  function handleWithdraw() {}

  return (
    <Flex flexDir="column">
      <Header
        bnbPrice={283.2}
        contractBalance={204.6}
        investors={1618}
        total={123}
        id={token}
        onConnectWallet={handleConnectWallet}
        onDisconnect={handleDisconnect}
      />

      <Flex w={["95vw", "80vw", "65vw"]} m="0 auto" flexDir="column">
        <Description />

        <Liquidity total={0.42} />

        <VideoList
          videos={[
            "KKYGRI0qwXE",
            "nooUwtdfaqQ",
            "Ss3PhdfPySY",
            "xVnELRoT--U",
            "wHGvvFYbstQ",
            "nnF_UqomQjE",
          ]}
        />

        <Balance
          availableForWithdraw={0.01}
          directReferredMembers={2}
          referringLink={
            "https://poolsmine.com?0x2c814A9112c82C9Cb14372459E2CA3b5BEfae252"
          }
          totalReferralEarned={0.002}
          totalReferralWithDraw={0}
          totalStaked={1.02}
          totalStakedTooltip="Lorem Ipsum"
          availableForWithdrawTooltip="Lorem Ipsum"
          onWithdraw={handleWithdraw}
        />
      </Flex>
    </Flex>
  );
}
