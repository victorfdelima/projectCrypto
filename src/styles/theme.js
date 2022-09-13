import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: '#25232A',
        color: 'hsla(0, 0%, 100%, 0.81)',
        fontFamily: 'Inter, sans-serif',
      },
      ':root': {
        bg: '#25232A',
        color: 'hsla(0, 0%, 100%, 0.81)',
        fontFamily: 'Inter, sans-serif',
      },
    }),
  },
});
