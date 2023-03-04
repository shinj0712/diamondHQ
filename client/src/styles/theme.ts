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
    primary: {
      100: '#EA9A61',
      200: '#E89051',
      300: '#E68641',
      400: '#E47C32',
      500: '#E27121',
      600: '#D6691C',
      700: '#C5611A',
      800: '#B55918',
      900: '#A45115',
    },
    accent: {
      100: '#67BAC0',
      200: '#58B3B9',
      300: '#4AABB2',
      400: '#449CA3',
      500: '#3D8D92',
      600: '#398489',
      700: '#35797E',
      800: '#306F74',
      900: '#2C6569',
    },
  },
  shadows: {
    outline: '0 0 0 2px var(--chakra-colors-primary)',
  },
};

// Chakra UI のテーマカスタマイズを行います。
export const theme = extendTheme({ ...config, ...customOverride, components: themeComponents });
