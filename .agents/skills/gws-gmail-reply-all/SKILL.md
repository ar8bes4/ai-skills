---
name: gws-gmail-reply-all
description: "Gmail: 全員に返信します（スレッドは自動で処理されます）。"
metadata:
  version: 0.22.3
  openclaw:
    category: "productivity"
    requires:
      bins:
        - gws
    cliHelp: "gws gmail +reply-all --help"
---

# gmail +reply-all

> **前提条件:** 認証、グローバルフラグ、およびセキュリティルールについては `../gws-shared/SKILL.md`（存在する場合）を参照してください。

メッセージの送信者および全受信者に返信します（スレッド処理は自動的に行われます）。

## 使用法

```bash
gws gmail +reply-all --message-id <ID> --body <TEXT>
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
| `--remove` | — | — | 返信対象から除外するメールアドレス（カンマ区切り） |

## 例

```bash
gws gmail +reply-all --message-id 18f1a2b3c4d --body '承知いたしました！'
gws gmail +reply-all --message-id 18f1a2b3c4d --body '更新しました' --remove bob@example.com
gws gmail +reply-all --message-id 18f1a2b3c4d --body 'イヴさんを追加します' --cc eve@example.com
gws gmail +reply-all --message-id 18f1a2b3c4d --body '<i>了解しました</i>' --html
gws gmail +reply-all --message-id 18f1a2b3c4d --body 'メモを添付します' -a notes.pdf
gws gmail +reply-all --message-id 18f1a2b3c4d --body '下書きを保存' --draft
```

## Tips

- 送信者および元の To/CC 受信者全員に返信します。
- `--to` を使用して宛先を追加できます。
- `--cc` を使用して新しい CC 受信者を追加できます。
- 他の受信者に知られずに送信したい場合は `--bcc` を使用します。
- 送信者や特定の受信者を除外したい場合は `--remove` を使用してください。
- 除外や追加の結果、宛先（To）が空になった場合はエラーとなります。
- 追加のファイルを添付するには `-a/--attach` を使用します。複数指定が可能です。
- --html モードでは、引用ブロックは Gmail の `gmail_quote` CSS クラスを使用し、HTML 形式を維持します。フラグメントタグ（`<p>`, `<b>`, `<a>` 等）を使用してください。`<html>`/`<body>` タグは不要です。
- --html モードでは、引用されたメッセージ内のインライン画像も cid: 参照によって保持されます。
- すぐに送信せず内容を確認したい場合は `--draft` を使用して下書き保存してください。

## 関連項目

- [gws-shared](../gws-shared/SKILL.md) — グローバルフラグと認証
- [gws-gmail](../gws-gmail/SKILL.md) — メールの送信、読み取り、管理コマンド全般
