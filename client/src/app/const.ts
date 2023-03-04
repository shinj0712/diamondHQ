/**
 * ナビゲーションアイテム（ルート）
 */
export interface NavItemType {
  label: string;
  children?: Array<NavItemType>;
  href?: string;
}

/**
 * ナビアイテム マップ
 * childrenは1階層まで表示可
 */
export const NavItems: Array<NavItemType> = [
  {
    label: '選手',
    children: [
      {
        label: '個人成績',
        href: '#',
      },
      {
        label: 'プロフィール',
        href: '#',
      },
    ],
  },
  {
    label: 'チーム',
    children: [
      {
        label: '成績管理',
        href: '#',
      },
      {
        label: 'チーム情報',
        href: '#',
      },
    ],
  },
  {
    label: 'ページ1',
    href: '#',
  },
  {
    label: 'ページ2',
    href: '#',
  },
];
