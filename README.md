# Antigravity AI Skills & Workflows

医療メディア制作、学術的文章の推敲、および開発環境（Git）の管理を支援する AI アシスタントの「専門スキル」と「自動化ワークフロー」を管理するリポジトリです。

## 🚀 主要なワークフロー

スラッシュコマンドを入力することで、定型的な業務を自動化できます。

- **`/git-check` (NEW)**
  - GitHub リポジトリとローカル PC (`C:\Users\yert1\Documents\git`) の同期状態を診断します。
  - 未クローン、未コミット、未プッシュの状態を一覧レポートします。
- **`/medical-video-production`**
  - 医療メディア制作（説明文書から動画化まで）の 9 ステップ標準手順書に従って制作をナビゲートします。

## 🧠 専門スキル (Skills)

文脈に応じて AI アシスタントが使用する、特定の専門分野に特化した機能群です。

- **[Medical Explanation Gem](./.agents/skills/medical-explanation-gem/SKILL.md)**
  - エビデンスに基づいた、客観的かつ誠実な患者説明文書を作成します。
- **[Speaker Note Generator Gem](./.agents/skills/speaker-note-generator-gem/SKILL.md)**
  - スライド資料に基づき、聴衆に合わせて最適化されたプレゼン台本を作成します。
- **[Fact Check Gem](./.agents/skills/fact-check-gem/SKILL.md)**
  - 提供されたテキストの正確性を検証し、詳細な監査レポートを作成します。
- **[Academic Critique Gem](./.agents/skills/academic-critique-gem/SKILL.md)**
  - 学術雑誌エディターの視点で文章を批判的に検討し、論理的なリライトを行います。
- **[Prompt Architect Gem](./.agents/skills/prompt-architect-gem/SKILL.md)**
  - ユーザーの要求から高精度な XML 構造化プロンプトを自動設計します。
- **[Medical Media Producer Gem](./.agents/skills/medical-media-producer-gem/SKILL.md)**
  - 動画制作プロセス全般を管理・ナビゲートします。

## 📂 フォルダ構成

- `.agents/skills/`: AI アシスタントに付与される専門スキル定義
- `.agents/workflows/`: スラッシュコマンドで実行可能な自動化ワークフロー
- `sources/`: 元となる原稿や指示書の保管場所
- `attachments/`: 外部ツール（ノートブック等）で使用するためのドキュメント版

---
**Antigravity Assistant** - 常に最新の知識と手順であなたの業務をサポートします。
