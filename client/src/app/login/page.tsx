'use client';

import React from 'react';

import LoginCard from '@/components/Card/Login';

import { Container } from '@chakra-ui/react';

export default function Login() {
  return (
    <Container h={100} maxW={'sm'} my={20}>
      <LoginCard />
    </Container>
  );
}
