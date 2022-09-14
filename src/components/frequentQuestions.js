import { Box, Button, Collapse, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { i18n } from '../translate/i18n';

export function FrequentQuestions() {
  const [quests, setQuests] = useState(
    ['one', 'two', 'three', 'four', 'five', 'six'].map((number, index) => ({
      id: index,
      quest: i18n.t(`frequentQuests.${number}Quest`),
      answer: i18n.t(`frequentQuests.${number}Answer`),
      isExpanded: false,
    })),
  );

  function handleToggleExpandable(quest) {
    return () => {
      setQuests((currentQuests) =>
        currentQuests.map((currentQuest) =>
          currentQuest.id === quest.id
            ? { ...currentQuest, isExpanded: !currentQuest.isExpanded }
            : currentQuest,
        ),
      );
    };
  }

  return (
    <Flex flexDir='column' mt='3rem'>
      <Heading as='h3' fontSize='20px' fontWeight='600'>
        {i18n.t('frequentQuests.title')}
      </Heading>
      <Box h='1.5px' bgColor='hsla(0, 0%, 100%, 0.2)' w='100%' mt='20px' />
      <Flex flexDir={['column', 'column', 'row']} mt='2rem' w='100%'>
        <Flex flexDir='column' w='100%'>
          {quests.slice(0, 3).map((quest) => (
            <Flex
              key={quest.id}
              flexDir='column'
              borderBottom='1px solid hsla(0, 0%, 100%, 0.2)'
            >
              <Button
                variant='link'
                display='flex'
                py='1.5rem'
                justifyContent='space-between'
                w='100%'
                _hover={{ textDecoration: 'none' }}
                _active={{ color: '#fff' }}
                fontWeight='500'
                color='#fff'
                onClick={handleToggleExpandable(quest)}
              >
                <Text whiteSpace='pre-wrap' pr='1rem' textAlign='left'>
                  {quest.quest}
                </Text>
                {quest.isExpanded ? '-' : '+'}
              </Button>

              <Collapse
                style={{ padding: '1rem 0' }}
                in={quest.isExpanded}
                animateOpacity
              >
                <Text color='hsla(0, 0%, 100%, 0.7)' fontSize='14px'>
                  {quest.answer}
                </Text>
              </Collapse>
            </Flex>
          ))}
        </Flex>
        <Flex flexDir='column' w='100%' ml={['0', '0', '2rem']}>
          {quests.slice(-3).map((quest) => (
            <Flex
              key={quest.id}
              flexDir='column'
              borderBottom='1px solid hsla(0, 0%, 100%, 0.2)'
            >
              <Button
                variant='link'
                display='flex'
                py='1.5rem'
                justifyContent='space-between'
                w='100%'
                _hover={{ textDecoration: 'none' }}
                _active={{ color: '#fff' }}
                fontWeight='500'
                color='#fff'
                onClick={handleToggleExpandable(quest)}
              >
                <Text whiteSpace='pre-wrap' pr='1rem' textAlign='left'>
                  {quest.quest}
                </Text>
                {quest.isExpanded ? '-' : '+'}
              </Button>

              <Collapse
                style={{ padding: '1rem 0' }}
                in={quest.isExpanded}
                animateOpacity
              >
                <Text color='hsla(0, 0%, 100%, 0.7)' fontSize='14px'>
                  {quest.answer}
                </Text>
              </Collapse>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
