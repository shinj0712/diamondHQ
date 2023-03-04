import { useState } from 'react';
import {
  Box,
  Flex,
  Spacer,
  Text,
  Stack,
  Link,
  IconButton,
  Image,
  Button,
  ButtonGroup,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Collapse,
} from '@chakra-ui/react';

// 定数・設定値
import { NavItems, NavItemType as NavItemProps } from './const';

// アイコン
import { MinusIcon, AddIcon } from '@chakra-ui/icons';
import { MdAccountCircle, MdNotes, MdNotifications, MdLogin } from 'react-icons/md';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

export default function Header() {
  // TODO: 認証状態を保持する
  const [isGuest] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      {/* header logo */}
      <Flex align='space-between' w={'full'}>
        <Spacer />
        <Text textAlign='start' fontFamily={'heading'} color='primary.500' p={2} fontSize={'lg'}>
          Diamond HQ
        </Text>
        <Spacer />
      </Flex>

      {/* accounts */}
      <Box position={'fixed'} top={1} right={2}>
        {isGuest ? (
          // ゲスト時
          <IconButton
            as={'a'}
            href={'/login'}
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
        <NavButtons isGuest={isGuest} onOpen={onOpen} />
      </Box>

      {/* Drawer menu */}
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent color={'white'} bg={'gray.900'}>
          {/* クローズボタン */}
          <DrawerCloseButton _hover={{ color: 'primary.500' }} />
          {/* ドロワーヘッダー */}
          <DrawerHeader fontFamily={'heading'}>Menu</DrawerHeader>
          {/* ドロワーボディ */}
          <DrawerBody>
            <Stack color='white'>
              {NavItems.map((item) => (
                <AccordionMenuItem key={item.label} {...item} />
              ))}
            </Stack>
          </DrawerBody>
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
                _hover={{ color: 'primary.500' }}
              />
              <IconButton
                as='a'
                icon={<AiFillInstagram size={24} />}
                aria-label='instagram'
                bg='white'
                color={'gray.600'}
                borderRadius='full'
                cursor={'pointer'}
                _hover={{ color: 'primary.500' }}
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

const NavButtons = ({ isGuest, onOpen }: NavProps) => {
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
        _hover={{ bg: 'primary.500' }}
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
          _hover={{ bg: 'primary.500' }}
        />
      ) : (
        // ログインボタン
        <IconButton
          icon={<MdLogin size={24} />}
          as='a'
          href={'/login'}
          aria-label='login'
          variant={'ghost'}
          cursor={'pointer'}
          bg='blackAlpha.500'
          color={'gray.200'}
          _hover={{ bg: 'primary.500' }}
        />
      )}
    </ButtonGroup>
  );
};

/**
 * メニューアイテム コンポーネント
 */
const AccordionMenuItem = ({ label, children, href }: NavItemProps) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack
      px={4}
      py={2}
      onClick={children && onToggle}
      _hover={children ? { backgroundColor: 'whiteAlpha.200' } : { color: 'primary.500' }}
    >
      <Flex
        as={Link}
        href={href ?? '#'}
        justify='space-between'
        align='center'
        _hover={{ textDecoration: 'none' }}
      >
        <Text fontWeight={700}>{label}</Text>
        {children && isOpen ? (
          <MinusIcon fontSize={12} />
        ) : children && !isOpen ? (
          <AddIcon fontSize={12} />
        ) : (
          <></>
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: 0 }}>
        <Stack
          mt={2}
          pl={2}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor='white'
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                py={2}
                pl={2}
                display='block'
                width='100%'
                _hover={{ textDecoration: 'none', color: 'primary.500' }}
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
