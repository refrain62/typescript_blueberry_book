# プロを目指す人のためのTypeScript入門 安全なコードの書き方から高度な型の使い方まで の写経

## 環境構築
DockerでReact+TypeScriptの環境を構築する手順
https://qiita.com/kashimuuuuu/items/b5f35057dfe1980d053a

## ビルドと立ち上げ
```
$ docker-compose build
$ docker-compose up -d
```

## バージョン確認
```
$ docker-compose run --rm frontend sh -c 'node -v'
v16.8.0
```

# コンパイル＆実行
```
$ cd /src
$ npx tsc
$  node ../dist/2.1/index.js
```
