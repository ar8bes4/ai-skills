---
name: gws-gmail-reply
description: "Gmail: メッセージに返信します（スレッドは自動で処理されます）。"
metadata:
  version: 0.22.3
  openclaw:
    category: "productivity"
    requires:
      bins:
        - gws
    cliHelp: "gws gmail +reply --help"
---

# gmail +reply

> **前提条件:** 認証、グローバルフラグ、およびセキュリティルールについては `../gws-shared/SKILL.md`（存在する場合）を参照してください。

メッセージに返信します（スレッド処理は自動的に行われます）。

## 使用法

```bash
gws gmail +reply --message-id <ID> --body <TEXT>
```

## フラグ

| フラグ | 必須 | デフォルト | 説明 |
|------|----------|---------|-------------|
| `--message-id` | ✓ | — | 返信先の Gmail メッセージ ID |
| `--body` | ✓ | — | 返信本文（プレーンテキスト、または --html 指定時は HTML） |
| `--from` | — | — | 送信元アドレス（エイリアスを使用する場合。省略時はアカウントのデフォルト） |
| `--to` | — | — | 追加の受信者（To）メールアドレス（カンマ区切り） |
| `--attach` | — | — | ファイルを添付する（複数回指定可能） |
| `--cc` | — | — | CC メールアドレス（カンマ区切り） |
| `--bcc` | — | — | BCC メールアドレス（カンマ区切り） |
| `--html` | — | — | --body を HTML コンテンツとして扱う（デフォルトはプレーンテキスト） |
| `--dry-run` | — | — | 実行せずに送信されるリクエストを表示する |
| `--draft` | — | — | 送信せずに下書きとして保存する |

## 例

```bash
gws gmail +reply --message-id 18f1a2b3c4d --body '承知いたしました。ありがとうございます。'
gws gmail +reply --message-id 18f1a2b3c4d --body 'キャロルさんを CC に含めます。' --cc carol@example.com
gws gmail +forward --message-id 18f1a2b3c4d --body 'デイブさんを追加します。' --to dave@example.com
gws gmail +reply --message-id 18f1a2b3c4d --body '<b>太字の返信</b>' --html
gws gmail +reply --message-id 18f1a2b3c4d --body '更新版です' -a updated.docx
gws gmail +reply --message-id 18f1a2b3c4d --body '下書きとして保存' --draft
```

## Tips

- `In-Reply-To`, `References`, `threadId` ヘッダーを自動的に設定します。
- 返信本文に元のメッセージを引用します。
- `--to` を使用して、宛先に受信者を追加できます。
- 追加のファイルを添付するには `-a/--attach` を使用します。複数指定が可能です。
- --html モードでは、引用ブロックは Gmail の `gmail_quote` CSS クラスを使用し、HTML 形式を維持します。フラグメントタグ（`<p>`, `<b>`, `<a>` 等）を使用してください。`<html>`/`<body>` タグは不要です。
- --html モードでは、引用されたメッセージ内のインライン画像も cid: 参照によって保持されます。
- すぐに送信せず内容を確認したい場合は `--draft` を使用して下書き保存してください。
- 全員に返信する場合は、代わりに `+reply-all` コマンドを使用してください。

## 関連項目

- [gws-shared](../gws-shared/SKILL.md) — グローバルフラグと認証
- [gws-gmail](../gws-gmail/SKILL.md) — メールの送信、読み取り、管理コマンド全般
