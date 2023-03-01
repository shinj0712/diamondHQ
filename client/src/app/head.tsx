import CommonHead from '@/components/common/head';

export default function Head() {
  return (
    <>
      <title>Diamond HQ</title>
      {/* 共通ヘッダータグ */}
      <CommonHead />
      <meta
        name='description'
        content='「Diamond」は野球のフィールドをイメージしています。「HQ」は Headquarters と略称から来ています。このアプリ名は、野球選手が一番輝く場所であるダイアモンド（フィールド）で活躍するためのマネジメントを担う中枢という意味が込められています。'
      />
    </>
  );
}
