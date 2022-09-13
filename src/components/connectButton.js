import React, { useState } from "react";

import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { MiddleEllipsis } from "../utils/text";
import { i18n } from "../translate/i18n";
import metamaskImg from "../assets/metamask.png";
import walletConnectImg from "../assets/walletconnect.png";
import { useWeb3React } from "@web3-react/core";
import { connectors } from "./connectors";
export function ConnectButton({ total, id, onConnectWallet, onDisconnect }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { activate } = useWeb3React();
  function handleConnectWallet(type) {
    return () => {
      activate(connectors.injected);
      onClose();
      onConnectWallet(type);
    };
  }
  function handleConnectWalletConnect(type) {
    return () => {
      activate(connectors.walletConnect);
      onClose();
      onConnectWallet(type);
    };
  }

  return (
    <>
      {id ? (
        <Menu>
          <MenuButton
            as={Button}
            bgColor="#17191d"
            colorScheme="black"
            borderRadius={50}
            p="0.5rem 0.75rem"
          >
            <Flex
              fontSize={14}
              fontWeight={400}
              align="center"
              justifyItems="center"
            >
              <Text
                color="#ffbc40"
                display={["none", "none", "inline-block"]}
                fontSize="14px"
                fontWeight={600}
              >
                {total} BNB
              </Text>
              <Text color="#fff" ml="0.5rem" fontSize="14px">
                {MiddleEllipsis(id, 13)}
              </Text>
              <FaChevronDown color="#777" style={{ marginLeft: "0.3rem" }} />
            </Flex>
          </MenuButton>

          <MenuList bgColor="#17191d">
            <MenuItem onClick={() => {}} _hover={{ bgColor: "transparent" }}>
              Change
            </MenuItem>
            <MenuItem
              onClick={onDisconnect}
              _hover={{ bgColor: "transparent" }}
            >
              Disconnect
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Button
          fontSize={14}
          bgColor="#17191d"
          colorScheme="blackAlpha"
          borderRadius={50}
          onClick={onOpen}
        >
          Connect a wallet
        </Button>
      )}

      <Modal isOpen={isOpen} isCentered onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="#141518">
          <ModalHeader>
            <Text color="white" fontSize="20px" fontWeight="600">
              {i18n.t("header.connectWallet")}
            </Text>
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <Button
              bgColor="#26292e"
              border="1px solid"
              borderColor="gray.500"
              w="100%"
              maxW="80vw"
              display="flex"
              justifyContent="space-between"
              py="2rem"
              colorScheme="blackAlpha"
              onClick={handleConnectWallet("metamask")}
            >
              Metamask
              <img src={metamaskImg} alt="MetaMask" style={{ width: "36px" }} />
            </Button>
            <Button
              bgColor="#26292e"
              border="1px solid"
              borderColor="gray.500"
              w="100%"
              maxW="80vw"
              display="flex"
              justifyContent="space-between"
              py="2rem"
              mt="1rem"
              colorScheme="blackAlpha"
              onClick={handleConnectWalletConnect("walletconnect")}
            >
              WalletConnect
              <img
                src={walletConnectImg}
                alt="WalletConnect"
                style={{ width: "36px" }}
              />
            </Button>
          </ModalBody>

          <ModalFooter>
            <Text fontSize="13px" color="white">
              {i18n.t("modal.privacyOne")}
              <Text as="span" display="inline-block" color="#ffbc40">
                {i18n.t("modal.termsOfService")}
              </Text>
              {i18n.t("modal.privacyTwo")}
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
