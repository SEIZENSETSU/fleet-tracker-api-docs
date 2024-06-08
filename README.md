# 環境構築手順
以下に環境構築手順を記載します。

## Swagger・Mock Serverの起動
```bash
docker compose up -d
```

### Swaggerの確認
ブラウザで `http://localhost:8002` にアクセスし、Swagger UIが表示されれば成功です。

Swagger Editor: `http://localhost:8001`

### Mock Serverの確認
ブラウザで `http://localhost:8003/hello` にアクセスし、`Hello, World!` が表示されれば成功です。

