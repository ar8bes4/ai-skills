---
name: gws-slides
description: "Google スライド: プレゼンテーションの読み取りと書き込みを行います。"
metadata:
  version: 0.22.3
  openclaw:
    category: "productivity"
    requires:
      bins:
        - gws
    cliHelp: "gws slides --help"
---

# slides (v1)

> **前提条件:** 認証、グローバルフラグ、およびセキュリティルールについては `../gws-shared/SKILL.md`（存在する場合）を参照してください。

```bash
gws slides <resource> <method> [flags]
```

## API リソース

### presentations (プレゼンテーション)

  - `batchUpdate` — プレゼンテーションに1つ以上の更新を適用します。各リクエストは適用前に検証されます。いずれかのリクエストが無効な場合、リクエスト全体が失敗し、何も適用されません。一部のリクエストには、適用結果に関する応答が返されます。
  - `create` — リクエストで指定されたタイトルを使用して、空のプレゼンテーションを作成します。`presentationId` が指定されている場合は、それが新しいプレゼンテーションの ID として使用されます。指定されていない場合は、新しい ID が生成されます。
  - `get` — 指定されたプレゼンテーションの最新バージョンを取得します。
  - `pages` — 「ページ」リソースに対する操作を行います。

## コマンドの探索

API メソッドを呼び出す前に、詳細を確認してください：

```bash
# リソースとメソッドのブラウズ
gws slides --help

# メソッドの必須パラメータ、型、デフォルト値の確認
gws schema slides.<resource>.<method>
```

`gws schema` の出力結果を参考に、`--params` や `--json` フラグを構築してください。

