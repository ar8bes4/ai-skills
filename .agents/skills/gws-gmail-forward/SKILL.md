---
name: gws-gmail-forward
description: "Gmail: メッセージを新しい宛先に転送します。"
metadata:
  version: 0.22.3
  openclaw:
    category: "productivity"
    requires:
      bins:
        - gws
    cliHelp: "gws gmail +forward --help"
---

# gmail +forward

> **前提条件:** 認証、グローバルフラグ、およびセキュリティルールについては `../gws-shared/SKILL.md`（存在する場合）を参照してください。

メッセージを新しい宛先に転送します。

## 使用法

```bash
gws gmail +forward --message-id <ID> --to <EMAILS>
```

## フラグ

| フラグ | 必須 | デフォルト | 説明 |
|------|----------|---------|-------------|
| `--message-id` | ✓ | — | 転送する Gmail のメッセージ ID |
| `--to` | ✓ | — | 受信者のメールアドレス（カンマ区切り） |
| `--from` | — | — | 送信元アドレス（エイリアスを使用する場合。省略時はアカウントのデフォルト） |
| `--body` | — | — | 転送メッセージの上に挿入するオプションのメモ（プレーンテキスト、または --html 指定時は HTML） |
| `--no-original-attachments` | — | — | 元のメッセージの添付ファイルを含めない（--html モードのインライン画像は保持されます） |
| `--attach` | — | — | ファイルを添付する（複数回指定可能） |
| `--cc` | — | — | CC メールアドレス（カンマ区切り） |
| `--bcc` | — | — | BCC メールアドレス（カンマ区切り） |
| `--html` | — | — | --body を HTML コンテンツとして扱う（デフォルトはプレーンテキスト） |
| `--dry-run` | — | — | 実行せずに送信されるリクエストを表示する |
| `--draft` | — | — | 送信せずに下書きとして保存する |

## 例

```bash
gws gmail +forward --message-id 18f1a2b3c4d --to dave@example.com
gws gmail +forward --message-id 18f1a2b3c4d --to dave@example.com --body '参考までに以下を確認してください。'
gws gmail +forward --message-id 18f1a2b3c4d --to dave@example.com --cc eve@example.com
gws gmail +forward --message-id 18f1a2b3c4d --to dave@example.com --body '<p>参考資料です</p>' --html
gws gmail +forward --message-id 18f1a2b3c4d --to dave@example.com -a notes.pdf
gws gmail +forward --message-id 18f1a2b3c4d --to dave@example.com --no-original-attachments
gws gmail +forward --message-id 18f1a2b3c4d --to dave@example.com --draft
```

## Tips

- 元のメッセージの送信者、日付、件名、受信者の情報が含まれます。
- デフォルトで元の添付ファイルも含まれます（Gmail Web 版の挙動と同じ）。
- --html モードでは、インライン画像も cid: 参照によって保持されます。
- プレーンテキストモードでは、インライン画像は含まれません。
- メッセージのファイルを含めずに転送するには `--no-original-attachments` を使用してください。
- 追加のファイルを添付するには `-a/--attach` を使用します。複数指定が可能です。
- 元の添付ファイルと追加ファイルの合計サイズ制限は 25MB です。
- --html モードでは、転送ブロックは Gmail の `gmail_quote` CSS クラスを使用し、HTML 形式を維持します。フラグメントタグ（`<p>`, `<b>`, `<a>` 等）を使用してください。`<html>`/`<body>` タグは不要です。
- すぐに送信せず内容を確認したい場合は `--draft` を使用して下書き保存してください。

## 関連項目

- [gws-shared](../gws-shared/SKILL.md) — グローバルフラグと認証
- [gws-gmail](../gws-gmail/SKILL.md) — メールの送信、読み取り、管理コマンド全般
