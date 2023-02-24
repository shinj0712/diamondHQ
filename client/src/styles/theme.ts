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
};

// Chakra UI のテーマカスタマイズを行います。
export const theme = extendTheme({ ...config, ...customOverride, components: themeComponents });
