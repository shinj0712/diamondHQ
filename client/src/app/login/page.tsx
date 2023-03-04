'use client';

import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  Button,
  FormHelperText,
  InputRightElement,
  Heading,
  Center,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

interface Props {
  loginId?: 'username' | 'email' | 'phoneNumber';
}

export default function Login({ loginId = 'email' }: Props) {
  const [isShow, setShow] = React.useState(false);

  /**
   * パスワードの表示非表示を切り替えます
   * @param e マウスイベント
   */
  const handleViewPassword = () => setShow(!isShow);

  return (
    <Card
      backdropFilter='auto'
      backdropBlur='6px'
      bg='whiteAlpha.600'
      maxW={'sm'}
      m='auto'
      my={{ base: 10, lg: 20 }}
    >
      <CardHeader>
        <Center>
          <Heading size={'lg'} color='gray.700'>
            Sign in
          </Heading>
        </Center>
      </CardHeader>
      <CardBody>
        {loginId === 'username' && (
          <FormControl mb={5}>
            <FormLabel>ユーザーネーム</FormLabel>
            <Input
              type='text'
              maxLength={50}
              isRequired={true}
              focusBorderColor={'primary.500'}
              placeholder='your username'
            />
          </FormControl>
        )}
        {loginId === 'email' && (
          <FormControl mb={5}>
            <FormLabel>メールアドレス</FormLabel>
            <Input
              type='email'
              maxLength={100}
              isRequired={true}
              focusBorderColor={'primary.500'}
              placeholder='your email'
            />
          </FormControl>
        )}
        {/* password */}
        <FormControl>
          <FormLabel>パスワード</FormLabel>
          <InputGroup>
            <Input
              type={isShow ? 'text' : 'password'}
              maxLength={50}
              isRequired={true}
              variant='filled'
              focusBorderColor={'primary.500'}
              placeholder='your password'
            />
            <InputRightElement onClick={handleViewPassword} cursor='pointer'>
              {isShow ? <ViewOffIcon color='gray.400' /> : <ViewIcon color='gray.400' />}
            </InputRightElement>
          </InputGroup>
          <FormHelperText>※16文字以内の半角英数字で入力してください</FormHelperText>
        </FormControl>
      </CardBody>
      <CardFooter flexDirection='column' alignItems='center' gap={3}>
        <Button
          shadow={'md'}
          w={{ base: '100%', lg: '50%' }}
          variant='outline'
          colorScheme={'primary'}
          bg='white'
        >
          新規会員登録
        </Button>
        <Button shadow={'md'} w={{ base: '100%', lg: '50%' }} colorScheme={'primary'}>
          ログイン
        </Button>
      </CardFooter>
    </Card>
  );
}
