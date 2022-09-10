import { Button, Menu, MenuButton } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const I18N_STORAGE_KEY = 'i18nextLng';

export function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const language = localStorage.getItem(I18N_STORAGE_KEY);
    if (language) {
      return language;
    }
    return 'pt-BR';
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
      <MenuButton as={Button} bgColor='#17191d' colorScheme='black'>
        {currentLanguage}
      </MenuButton>
    </Menu>
  );
}
