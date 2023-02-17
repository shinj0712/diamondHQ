# diamondHQ
baseball web manage application

## Docks
[DiamondHQ - 野球管理アプリ](https://www.notion.so/DiamondHQ-8b0ae72882b24dcbb11198c366c07cd6)  
※上記ドキュメントは現在プライベートに設定しているため、閲覧できない状態です。

## Set up
### 00. vscode
Please install the following.
#### Frontend
* ESlint
* Prettier
* TypeScript Importer
* JavaScript and TypeScript Nightly
* JSDoc Generator
* Prisma
### 01. Next App
#### ① Clone
```bash
# 任意のプロジェクトディレクトリに移動

git clone https://github.com/shinj0712/diamondHQ.git
```
#### ② Docker build
```bash
# 環境変数ファイルを作成
cp .env.local .env

# コンテナ立ち上げ
docker-compose up --build

# 立ち上がったらコンテナを確認
docker ps
```
#### ③ Next app run (development)
```bash
# client コンテナの中に入る
docker-compose exec client sh

# サーバー起動
npx next dev
```