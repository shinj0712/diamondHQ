/**
 * サイト共通のヘッダータグの集合です。
 * 各ページの Head.tsx でインポートして使用してください。
 */

export default function CommonHead() {
  return (
    <>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <link rel='shortcut icon' href='/favicon.ico' />
    </>
  );
}
