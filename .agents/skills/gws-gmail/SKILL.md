---
name: gws-gmail
description: "Gmail: メールの送信、読み取り、管理を行います。"
metadata:
  version: 0.22.3
  openclaw:
    category: "productivity"
    requires:
      bins:
        - gws
    cliHelp: "gws gmail --help"
---

# gmail (v1)

> **PREREQUISITE:** Read `../gws-shared/SKILL.md` for auth, global flags, and security rules. If missing, run `gws generate-skills` to create it.

```bash
gws gmail <resource> <method> [flags]
```

## Helper Commands

| Command | Description |
|---------|-------------|
| [`+send`](../gws-gmail-send/SKILL.md) | メールを送信します |
| [`+triage`](../gws-gmail-triage/SKILL.md) | 未読の受信トレイ要約を表示します（送信者、件名、日付） |
| [`+reply`](../gws-gmail-reply/SKILL.md) | メッセージに返信します（スレッドは自動で処理されます） |
| [`+reply-all`](../gws-gmail-reply-all/SKILL.md) | 全員に返信します（スレッドは自動で処理されます） |
| [`+forward`](../gws-gmail-forward/SKILL.md) | メッセージを新しい宛先に転送します |
| [`+read`](../gws-gmail-read/SKILL.md) | メッセージを読み取り、本文やヘッダーを抽出します |
| [`+watch`](../gws-gmail-watch/SKILL.md) | 新着メールを監視し、NDJSONとしてストリーム表示します |

## API Resources

### users

  - `getProfile` — Gets the current user's Gmail profile.
  - `stop` — Stop receiving push notifications for the given user mailbox.
  - `watch` — Set up or update a push notification watch on the given user mailbox.
  - `drafts` — Operations on the 'drafts' resource
  - `history` — Operations on the 'history' resource
  - `labels` — Operations on the 'labels' resource
  - `messages` — Operations on the 'messages' resource
  - `settings` — Operations on the 'settings' resource
  - `threads` — Operations on the 'threads' resource

## Discovering Commands

Before calling any API method, inspect it:

```bash
# Browse resources and methods
gws gmail --help

# Inspect a method's required params, types, and defaults
gws schema gmail.<resource>.<method>
```

Use `gws schema` output to build your `--params` and `--json` flags.

