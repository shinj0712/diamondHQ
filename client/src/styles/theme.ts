import {
  extendTheme,
  type ThemeConfig,
  type ThemeComponents,
  ThemeOverride,
} from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const themeComponents: ThemeComponents = {
  Button: {
    defaultProps: {
      colorScheme: 'orange',
    },
  },
  Input: {
    defaultProps: {
      focusBorderColor: 'black.500',
      variant: 'filled',
    },
  },
};

const customOverride: ThemeOverride = {
  fonts: {
    heading: 'Oswald-Bold, sans-serif',
    body: 'sans-serif',
  },
  colors: {
    main: {
      100: '#F3C3A2',
      200: '#F2BD98',
      300: '#F0B78F',
      400: '#EFB285',
      500: '#eeaa7b',
      600: '#EB9D65',
      700: '#E88E4E',
      800: '#E58037',
      900: '#E27121',
    },
    sub: {
      100: '#91CDD1',
      200: '#86C7CC',
      300: '#7AC2C8',
      400: '#6FBDC3',
      500: '#66b9bf',
      600: '#56B2B8',
      700: '#4AA9B0',
      800: '#439BA1',
      900: '#3D8D92',
    },
    primary: '#E27121',
    accent: '#3D8D92',
  },
};

// Chakra UI のテーマカスタマイズを行います。
export const theme = extendTheme({ ...config, ...customOverride, components: themeComponents });
