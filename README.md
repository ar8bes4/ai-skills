# 🧠 ai-skills

> [!INFO] ステータス: 継続的管理中
> Antigravity (AI) の能力を拡張するためのカスタムスキルと自動化ワークフローを管理する、システムの心臓部です。

![Antigravity](https://img.shields.io/badge/Agent-Antigravity-8E75B2?style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![JSON](https://img.shields.io/badge/JSON-000000?style=flat-square&logo=json&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

## 🚀 概要 (Overview)
本リポジトリは、AIアシスタントの能力を定義・拡張するための「専門スキル（Skills）」と、複雑な多段階業務を自動化する「標準ワークフロー（Workflows）」を統合管理します。これにより、医療メディア制作、学術的文章の推敲、開発環境の保守などを一貫した品質で実行可能にします。

### 📁 ディレクトリ構成
- **[.agents/skills/](./.agents/skills/)**: 50種類の専門スキル定義（医療、GWS、デザイン等）
- **[.agents/workflows/](./.agents/workflows/)**: 15種類の自動化ワークフロー（Git管理、メディア制作、デプロイ等）
- **[docs/](./docs/)**: 運用方針、変換ルール、標準ガイドライン
- **`sources/`**: 原稿、指示書、プロンプトの種
- **`attachments/`**: 外部ツール連携用ドキュメント

---

## ✨ 主要なワークフロー (Key Workflows)
スラッシュコマンドを入力することで、定型的な業務を自動化できます。

| コマンド | カテゴリ | 概要 |
| :--- | :--- | :--- |
| **`/git-check`** | 開発環境管理 | GitHub とローカルの同期状況、不整合の診断 |
| **`/git-pull`** | 開発環境管理 | 管理下のリポジトリを一括で最新化 (Git Pull) |
| **`/git-push`** | 開発環境管理 | 一括での Git Commit & Push 実行 |
| **`/docs-maintenance`**| ドキュメント管理 | スキル・ワークフローの整合性チェックと日本語化 |
| **`/release`** | バージョン管理 | 自動タグ付け、CHANGELOG 更新、Push |
| **`/obsidian-sync`** | ナレッジ管理 | リポジトリの更新内容を Obsidian Vault に同期 |
| **`/medical-video-production`** | メディア制作 | 医療動画・スライド制作の全工程ナビゲート |
| **`/slide-production-canvas`** | 資料作成 | リサーチ、構成案作成、Google Slides 変換 |
| **`/spa-publication-github`** | デプロイ | リサーチ結果を SPA として GitHub (hub1/research/) へ公開 |
| **`/webapp-deployment`** | デプロイ | Web アプリの GitHub Pages / Vercel 公開 |
| **`/app-pwa-offline`** | デプロイ | Web アプリの PWA 化とオフライン版パッケージング |

---

## 🛠 専門スキルカテゴリー (Skill Categories)
文脈に応じてAIアシスタントが自動的に選択、または指示により使用する機能群です。詳細は **[Skills Index](./.agents/skills/README.md)** を参照してください。

- **🏥 医療・学術**: 学術校正、ファクトチェック、患者説明、医師間文書
- **🎨 デザイン・プレゼン**: スライド構成、台本生成、SPAデザイン、PWA化
- **☁️ Google Workspace**: Gmail, Drive, Docs, Sheets, Calendar, Meet等の自動操作
- **🔧 レシピ・設計**: タスク自動化レシピ、プロンプト構造設計（XML）

---
**Antigravity Assistant** - 常に最新の知識と手順であなたの業務をサポートします。
