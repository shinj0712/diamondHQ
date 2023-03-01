'use client';

// global style
import './globals.css';

// chakra UI
import { ChakraProvider, Box } from '@chakra-ui/react';
import { theme as customTheme } from '../styles/theme';

// components
import Header from './header';
import Footer from './footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraProvider theme={customTheme}>
          <Box bgGradient='linear(to-tl, gray.200, gray.400)'>
            {/* ヘッダー */}
            <Header />
            {/* メインコンテナ */}
            <Box as='main' mx={5} minH='100svh'>
              {children}
            </Box>
            {/* フッター */}
            <Footer />
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}
