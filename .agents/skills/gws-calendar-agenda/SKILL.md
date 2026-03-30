---
name: gws-calendar-agenda
description: "Google カレンダー: 全てのカレンダーの今後の予定を表示します。"

metadata:
  version: 0.22.3
  openclaw:
    category: "productivity"
    requires:
      bins:
        - gws
    cliHelp: "gws calendar +agenda --help"
---

# calendar +agenda

> **PREREQUISITE:** Read `../gws-shared/SKILL.md` for auth, global flags, and security rules. If missing, run `gws generate-skills` to create it.

全てのカレンダーの今後の予定を一覧表示します。

## 使用方法

```bash
gws calendar +agenda
```

## フラグ

| フラグ | 必須 | デフォルト | 説明 |
|------|----------|---------|-------------|
| `--today` | — | — | 今日の予定を表示 |
| `--tomorrow` | — | — | 明日の予定を表示 |
| `--week` | — | — | 今週の予定を表示 |
| `--days` | — | — | 表示する日数 |
| `--calendar` | — | — | 特定のカレンダー名またはIDでフィルタリング |
| `--timezone` | — | — | タイムゾーンを上書き（例：Asia/Tokyo）。デフォルトはGoogleアカウント設定。 |

## 実行例

```bash
gws calendar +agenda
gws calendar +agenda --today
gws calendar +agenda --week --format table
gws calendar +agenda --days 3 --calendar 'Work'
gws calendar +agenda --today --timezone America/New_York
```

## ヒント

- **読み取り専用** — 予定を変更することはありません。
- デフォルトですべてのカレンダーを検索します。特定のカレンダーのみ表示したい場合は `--calendar` を使用してください。
- タイムゾーンはGoogleアカウントの設定を優先しますが、`--timezone` で上書き可能です。

## 関連情報

- [gws-shared](../gws-shared/SKILL.md) — Global flags and auth
- [gws-calendar](../gws-calendar/SKILL.md) — All manage calendars and events commands
