import React, { useRef, useState } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import '@vime/core/themes/default.css';
import { i18n } from '../translate/i18n';
import { Player, DefaultUi, Youtube } from '@vime/react';
import { FaPlay } from 'react-icons/fa';

export function VideoList({ videos = [''] }) {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  const numbers = useRef(['one', 'two', 'three', 'four', 'five', 'six']);

  return (
    <Flex flexDir='column' align='flex-start' mt='3rem'>
      <Heading as='h3' fontSize='20px' fontWeight='600' textAlign='center'>
        {i18n.t('cards.title')}
      </Heading>

      <Box h='1.5px' bgColor='hsla(0, 0%, 100%, 0.2)' w='100%' mt='20px' />

      <Flex
        flexDir={['column', 'column', 'row']}
        flex={1}
        w='100%'
        style={{ gap: '1rem' }}
        mt='20px'
      >
        <Flex flexDir='column'>
          {numbers.current.map((number, index) => (
            <Flex
              as='button'
              onClick={() => setSelectedVideo(videos[index])}
              key={index}
              mb='20px'
            >
              <Flex
                align='center'
                justify='center'
                h='27px'
                w='27px'
                borderRadius='50%'
                bgColor={
                  selectedVideo === videos[index]
                    ? 'rgba(255, 188, 64, 0.2)'
                    : 'hsla(0, 0%, 100%, 0.2)'
                }
                mr='10px'
              >
                <FaPlay size='10' />
              </Flex>

              {i18n.t(`cards.${number}`)}
            </Flex>
          ))}
        </Flex>
        <Flex flex={1} width='100%' ml={['0', '0', '3rem']}>
          <Player style={{ flex: 1 }}>
            <Youtube videoId={selectedVideo} />
            <DefaultUi />
          </Player>
        </Flex>
      </Flex>
    </Flex>
  );
}
