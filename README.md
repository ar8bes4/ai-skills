# Antigravity AI Skills & Workflows

医療メディア制作、学術的文章の推敲、および開発環境（Git）の管理を支援する AI アシスタントの「専門スキル」と「自動化ワークフロー」を管理するリポジトリです。

## 🚀 主要なワークフロー

スラッシュコマンドを入力することで、定型的な業務を自動化できます。

- **`/git-check`**
  - GitHub リポジトリとローカル PC の同期状態を診断し、レポートを作成します。
- **`/release`**
  - バージョンタグの付与、CHANGELOG の自動更新、Push を一括実行します。
- **`/slide-production-canvas` (NEW)**
  - リサーチから「1スライド1メッセージ」の黄金律に則った Google Slides 用構成案を作成します。
- **`/spa-publication-github` (NEW)**
  - リサーチ結果を清潔感のある SPA として GitHub Pages に公開・集約します。
- **`/webapp-deployment` (NEW)**
  - 外部生成（Canvas/Artifact等）コードを GitHub 経由で Vercel 等にデプロイ準備します。
- **`/app-pwa-offline` (NEW)**
  - Web アプリを PWA 化およびオフライン単一ファイル形式へパッケージング・公開します。
- **`/medical-video-production`**
  - 医療動画制作の 9 ステップ標準手順書に従って制作をナビゲートします。

## 🧠 専門スキル (Skills)

文脈に応じて AI アシスタントが使用する、特定の専門分野に特化した機能群です。

- **[Medical Explanation Gem](./.agents/skills/medical-explanation-gem/SKILL.md)**
  - エビデンスに基づいた、誠実な患者説明文書を作成します。
- **[Medical Document Writer](./.agents/skills/medical-document-writer/SKILL.md) (NEW)**
  - 医師間（Physician-to-Physician）の高度な専門文書を執筆・校正します。
- **[Slide Designer](./.agents/skills/slide-designer/SKILL.md) (NEW)**
  - 「1スライド1メッセージ」と医療用デザインの黄金律を適用します。
- **[Web App Designer](./.agents/skills/web-app-designer/SKILL.md) (NEW)**
  - 清潔感と視認性を重視した、Vercel 移行も可能な SPA コードを生成します。
- **[Web App PWA Packager](./.agents/skills/web-app-pwa-packager/SKILL.md) (NEW)**
  - アプリを PWA 化およびオフライン単一ファイル形式へパッケージングします。
- **[Speaker Note Generator Gem](./.agents/skills/speaker-note-generator-gem/SKILL.md)**
  - プレゼン台本を聴衆に合わせて最適化します。
- **[Fact Check Gem](./.agents/skills/fact-check-gem/SKILL.md)**
  - テキストの正確性を検証し、監査レポートを作成します。
- **[Academic Critique Gem](./.agents/skills/academic-critique-gem/SKILL.md)**
  - 学術雑誌エディターの視点で文章を批判的に推敲します。
- **[Prompt Architect Gem](./.agents/skills/prompt-architect-gem/SKILL.md)**
  - 高精度な XML 構造化プロンプトを自動設計します。
- **[Medical Media Producer Gem](./.agents/skills/medical-media-producer-gem/SKILL.md)**
  - 動画制作プロセス全般を管理・ナビゲートします。

## 📂 フォルダ構成

- `.agents/skills/`: AI アシスタントに付与される専門スキル定義
- `.agents/workflows/`: スラッシュコマンドで実行可能な自動化ワークフロー
- `sources/`: 元となる原稿や指示書の保管場所
- `attachments/`: 外部ツール（ノートブック等）で使用するためのドキュメント版

---
**Antigravity Assistant** - 常に最新の知識と手順であなたの業務をサポートします。
