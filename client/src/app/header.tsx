import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Flex,
  Spacer,
  Text,
  IconButton,
  Image,
  Button,
  useDisclosure,
  ButtonGroup,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

// アイコン
import { MdAccountCircle, MdNotes, MdNotifications, MdLogin } from 'react-icons/md';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

export default function Header() {
  // TODO: 認証状態を保持する
  const [isGuest] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  console.log(router);

  return (
    <Box>
      {/* header logo */}
      <Flex align='space-between' w={'full'}>
        <Spacer />
        <Text textAlign='start' fontFamily={'heading'} color='primary' p={2} fontSize={'lg'}>
          Diamond HQ
        </Text>
        <Spacer />
      </Flex>

      {/* accounts */}
      <Box position={'absolute'} top={1} right={2}>
        {isGuest ? (
          // ゲスト時
          <IconButton
            as={'a'}
            icon={<MdAccountCircle />}
            aria-label='guest icon'
            fontSize={32}
            variant='ghost'
            color={'gray.600'}
            colorScheme={'transparent'}
          />
        ) : (
          // ログイン時
          <Button as={'a'} colorScheme={'transparent'} p={0}>
            <Image
              borderRadius={'full'}
              src='https://placehold.jp/53545f/ffffff/900x900.png?text=username'
              alt='ユーザーネームのアイコン画像'
              maxW={8}
              boxSize={8}
            />
          </Button>
        )}
      </Box>

      {/* nav buttons */}
      <Box position={'fixed'} bottom={5} right={'50%'} zIndex={10} transform={'translate(50%)'}>
        <Nav isGuest={isGuest} onOpen={onOpen} />
      </Box>

      {/* Drawer menu */}
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent color={'white'} bg={'gray.900'}>
          <DrawerCloseButton />
          {/* ドロワーヘッダー */}
          <DrawerHeader fontFamily={'heading'}>Menu</DrawerHeader>
          {/* ドロワーボディ */}
          <DrawerBody>{/* サイトマップ */}</DrawerBody>
          {/* ドロワーフッター */}
          <DrawerFooter>
            {/* SNSボタン */}
            <ButtonGroup variant={'filled'} size={'md'} color='white'>
              <IconButton
                as='a'
                icon={<AiOutlineTwitter size={24} />}
                aria-label='twitter'
                bg='white'
                color={'gray.600'}
                borderRadius='full'
                cursor={'pointer'}
                _hover={{ color: 'primary' }}
              />
              <IconButton
                as='a'
                icon={<AiFillInstagram size={24} />}
                aria-label='instagram'
                bg='white'
                color={'gray.600'}
                borderRadius='full'
                cursor={'pointer'}
                _hover={{ color: 'primary' }}
              />
            </ButtonGroup>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

/**
 * ナビゲーションボタン
 * @returns Nav Button group
 */
interface NavProps {
  isGuest: Boolean;
  onOpen: React.MouseEventHandler;
}

const Nav = ({ isGuest, onOpen }: NavProps) => {
  return (
    <ButtonGroup size={'md'} variant={'filled'}>
      {/* ハンバーガーメニュー */}
      <IconButton
        icon={<MdNotes size={24} />}
        as='a'
        aria-label='hamburger menu'
        variant={'ghost'}
        cursor={'pointer'}
        bg='blackAlpha.500'
        color={'gray.200'}
        _hover={{ bg: 'primary' }}
        onClick={onOpen}
      />
      {/* ログイン状態でメニューを分ける */}
      {!isGuest ? (
        // お知らせ
        <IconButton
          icon={<MdNotifications size={24} />}
          as='a'
          aria-label='notification'
          variant={'ghost'}
          cursor={'pointer'}
          bg='blackAlpha.500'
          color={'gray.200'}
          _hover={{ bg: 'primary' }}
        />
      ) : (
        // ログインボタン
        <IconButton
          icon={<MdLogin size={24} />}
          as='a'
          aria-label='login'
          variant={'ghost'}
          cursor={'pointer'}
          bg='blackAlpha.500'
          color={'gray.200'}
          _hover={{ bg: 'primary' }}
        />
      )}
    </ButtonGroup>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Inspiration',
    children: [
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Find Work',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'Learn Design',
    href: '#',
  },
  {
    label: 'Hire Designers',
    href: '#',
  },
];
