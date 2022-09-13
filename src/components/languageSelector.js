import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const I18N_STORAGE_KEY = 'i18nextLng';

export function LanguageSelector() {
  const availableLanguages = useRef([
    {
      flagImg:
        'https://assets.website-files.com/630d1bf74bbd1f9cc080f503/630e09ac5edb523d8e4a6a20_Portuguese.png',

      label: 'Português',
      value: 'pt-BR',
    },
    {
      flagImg:
        'https://assets.website-files.com/630d1bf74bbd1f9cc080f503/630e09accb00f172460cce38_English.png',
      label: 'English',
      value: 'en-US',
    },
    {
      flagImg:
        'https://assets.website-files.com/630d1bf74bbd1f9cc080f503/630e09ac22283f8b1fcd7b52_Spanish.png',
      label: 'Español',
      value: 'es-ES',
    },
  ]);

  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const language = localStorage.getItem(I18N_STORAGE_KEY);

    if (language) {
      return availableLanguages.current.find((l) => l.value === language);
    }

    return availableLanguages.current[1];
  });

  function onLanguageChange(newLanguage) {
    return () => {
      localStorage.setItem(I18N_STORAGE_KEY, newLanguage);
      setCurrentLanguage(newLanguage);
      window.location = window.location;
    };
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
        bgColor='#17191d'
        colorScheme='black'
        borderRadius={50}
        p='0.5rem 0.75rem'
      >
        <Flex
          fontSize={14}
          fontWeight={400}
          align='center'
          justifyItems='center'
        >
          <img
            src={currentLanguage.flagImg}
            style={{ height: '24px', marginRight: '0.5rem' }}
            alt={currentLanguage.label}
          />
          {currentLanguage.label}
          <FaChevronDown color='#777' style={{ marginLeft: '0.3rem' }} />
        </Flex>
      </MenuButton>

      <MenuList bgColor='#17191d' w='fit-content' minW="0">
        {availableLanguages.current
          .filter((l) => l.value !== currentLanguage.value)
          .map((l) => (
            <MenuItem
              key={l.value}
              onClick={onLanguageChange(l.value)}
              fontSize={14}
              fontWeight={400}
              _hover={{ bgColor: 'transparent' }}
            >
              <img
                src={l.flagImg}
                alt={l.label}
                style={{ height: '24px', marginRight: '0.5rem' }}
              />
              {l.label}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
}
