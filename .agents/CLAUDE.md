# CLAUDE.md — ai-skills プロジェクト設定（Claude Code 向け）

> このファイルは Claude Code が読み込む設定ファイルです。
> グローバル設定（`~/.claude/CLAUDE.md`）と組み合わせて機能します。

---

## プロジェクト概要

`ai-skills` は、複数の AI エージェントが共有するスキル・ワークフローの
**唯一のソース（Single Source of Truth）** です。

### ディレクトリ構造

```
ai-skills/
├── .agents/
│   ├── skills/      ← 76個の専門スキル定義（各 SKILL.md）
│   ├── workflows/   ← 19個の標準ワークフロー（.md）
│   ├── AGENTS.md    ← Codex 向け設定
│   ├── CLAUDE.md    ← このファイル（Claude Code 向け）
│   └── README.md
├── docs/
├── scripts/
├── sources/
├── templates/
└── attachments/
```

### 各エージェントのアクセス方法

| エージェント | スキル参照方法 |
|---|---|
| Antigravity (Gemini) | Junction: `~/.gemini/antigravity/skills/` |
| Codex CLI (OpenAI) | Junction: `~/.codex/agy-skills/` |
| Claude Code (このツール) | 直接参照: `.agents/skills/` |

---

## 最上位ルール（全エージェント共通）

### コミュニケーション

- **言語**: 全て **日本語** で応答すること（コード内コメント・ドキュメントを含む）
- **トーン**: 親しみやすく、かつ論理的で分かりやすい説明を心がけること

### 安全管理

- ファイルの作成・変更・削除前に、作業計画を報告し「y/n」でユーザー確認を取ること
- 「y」が返るまで一切の実行を停止すること
- 計画変更が必要な場合は、独自判断で代替案を実行せず必ずユーザーに相談すること
- 削除・上書き操作前は「どのファイルが影響を受けるか」を明示すること

### 成果物

- コードコメント・ドキュメントは日本語で記述すること（変数名・関数名は英語でOK）
- 評価・レビューを求められた場合は忖度せず、問題点は必ず改善案とセットで指摘すること

---

## スキルの使い方

タスクに応じて `.agents/skills/<skill-name>/SKILL.md` を読み込み、その指示に従うこと。

スキルが見つからない場合は `find-skills` スキルを参照すること。

---

## よくある作業パターン

- **Gitコミット&プッシュ**: `/push-git` ワークフローを参照
- **Gitプル**: `/pull-git` ワークフローを参照
- **スキル・ワークフロー追加後の同期**: `/docs-maintenance` → `/obsidian-sync` の順で実行
- **リリース**: `/release` ワークフローを参照

---

## ワークスペース情報

- **メインリポジトリ**: `C:\Users\yert1\Documents\agy\`
- **Obsidian Vault**: `C:\Users\yert1\Documents\agy\ObsidianVault\`
- **このリポジトリ**: `C:\Users\yert1\Documents\agy\00_System\ai-skills\`
