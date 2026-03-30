# 🧠 ai-skills

> [!INFO] ステータス: 継続的管理中
> Antigravity (AI) の能力を拡張するためのカスタムスキル群のリポジトリです。本リポジトリは医療メディア制作、学術的文章の推敲、および開発環境（Git）の管理を支援するAIアシスタントの「専門スキル」と「自動化ワークフロー」を管理します。

## 🚀 概要 (Overview)
以下のフォルダ構成により、AIアシスタントの能力を定義・拡張しています。
- `.agents/skills/`: AI アシスタントに付与される専門スキル定義
- `.agents/workflows/`: スラッシュコマンドで実行可能な自動化ワークフロー
- `sources/`: 元となる原稿や指示書の保管場所
- `attachments/`: 外部ツール（ノートブック等）で使用するためのドキュメント版

## ✨ 主要なワークフロー (Workflows)
スラッシュコマンドを入力することで、定型的な業務を自動化できます。
- **`/git-check`**: GitHub リポジトリとローカル PC の同期状態を診断・レポート作成。
- **`/release`**: バージョンタグ付与、CHANGELOG の自動更新、Pushを一括実行。
- **`/slide-production-canvas`**: リサーチからGoogle Slides 用構成案を作成。
- **`/spa-publication-github`**: リサーチ結果をSPAとして GitHub Pages に公開。
- **`/webapp-deployment`**: 外部生成コードを Vercel 等にデプロイ準備。
- **`/app-pwa-offline`**: Web アプリを PWA 化およびオフラインパッケージング。
- **`/medical-video-production`**: 医療動画制作の9ステップ標準手順書に基づくナビゲート。

## 🛠 専門スキル (Skills)
文脈に応じてAIアシスタントが使用する特化機能群です。
- **Medical Explanation Gem**: 患者説明文書の作成
- **Medical Document Writer**: 医師間の専門文書の執筆・校正
- **Slide Designer**: スライド用デザインと構成
- **Web App Designer**: 清潔感と視認性を重視したSPAコード生成
- **Web App PWA Packager**: PWA化およびオフラインパッケージ化
- **Speaker Note Generator Gem**: プレゼン台本の最適化
- **Fact Check Gem**: 正確性検証と監査レポート作成
- **Academic Critique Gem**: 学術記事の批判的推敲
- **Prompt Architect Gem**: 高精度XMLプロンプトの設計
- **Medical Media Producer Gem**: 動画制作プロセス管理

---
**Antigravity Assistant** - 常に最新の知識と手順であなたの業務をサポートします。
