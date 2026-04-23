# AI Skills Index (.agents/skills/)

このディレクトリには、特定の専門領域やタスクに特化した AI スキル（Gem）が格納されています。

## スキル要約リスト

### 1. 医療・学術 (Medical & Academic)
高度な専門知識を必要とする文書作成・校正をサポートします。

| スキル名 | 概要・役割 | 主な用途 |
| :--- | :--- | :--- |
| [academic-critique-gem](./academic-critique-gem/) | 学術的校正・論理構築 | 論文の推敲、論理矛盾の指摘、格調高い表現への変換。 |
| [fact-check-gem](./fact-check-gem/) | 専門的ファクトチェック | 情報の正確性検証、エビデンスに基づく監査レポート作成。 |
| [medical-document-writer](./medical-document-writer/) | 専門家間・医療文書執筆 | プロフェッショナルな tone での医師間文書執筆・校正。 |
| [medical-explanation-gem](./medical-explanation-gem/) | 誠実な患者説明文書作成 | 大学病院専門医モードでの客観的かつ慎重な病状説明。 |
| [medical-media-producer-gem](./medical-media-producer-gem/) | メディア制作プロジェクト管理 | 動画・スライド制作全9工程のナビゲート。 |
| [clinical-spa-architect](./clinical-spa-architect/) | 院内 SPA 設計指針 | オフライン・単一ファイル・JSON分離型の高信頼 SPA 構築。 |

### 2. デザイン・プレゼン・演出 (Design & AI Production)
視覚的に優れたアウトプットと AI による高度な演出を可能にします。

| スキル名 | 概要・役割 | 主な用途 |
| :--- | :--- | :--- |
| [slide-designer](./slide-designer/) | スライドデザイン黄金律 | 「1スライド1メッセージ」の徹底と専門的デザイン適用。 |
| [speaker-note-generator-gem](./speaker-note-generator-gem/) | スライド台本作成 | 資料に基づいた、聴衆に最適化された台本生成。 |
| [web-app-designer](./web-app-designer/) | 清潔感重視 SPA デザイン | リサーチ結果を整った Web ページとして可視化。 |
| [web-app-pwa-packager](./web-app-pwa-packager/) | PWA・オフライン化 | アプリのインストール化、単一ファイルパッケージング。 |
| [lyria-director-gem](./lyria-director-gem/) | Lyria 3 音楽制作演出 | 公式フレームワークによる高品質な音楽プロンプト設計。 |
| [veo-director-gem](./veo-director-gem/) | Veo 3.1 動画制作演出 | シネマティックな映像プロンプト設計と監督指示。 |
| [nano-banana-prompt-architect](./nano-banana-prompt-architect/) | Nano Banana プロンプト設計 | Gemini 3 向け公式画像生成プロンプトの自動構築。 |

### 3. Google Workspace (GWS)
Google の各種ツールを API 経由で直接操作し、業務を自動化します。

| カテゴリ | スキル |
| :--- | :--- |
| **統合管理** | [gws-workflow](./gws-workflow/), [gws-workflow-weekly-digest](./gws-workflow-weekly-digest/), [gws-workflow-email-to-task](./gws-workflow-email-to-task/), [gws-workflow-file-announce](./gws-workflow-file-announce/), [gws-workflow-meeting-prep](./gws-workflow-meeting-prep/) |
| **Gmail** | [gws-gmail](./gws-gmail/), [gws-gmail-send](./gws-gmail-send/), [gws-gmail-read](./gws-gmail-read/), [gws-gmail-triage](./gws-gmail-triage/), [gws-gmail-watch](./gws-gmail-watch/), [gws-gmail-forward](./gws-gmail-forward/), [gws-gmail-reply](./gws-gmail-reply/) |
| **Drive / Docs** | [gws-drive](./gws-drive/), [gws-drive-upload](./gws-drive-upload/), [gws-docs](./gws-docs/), [gws-docs-write](./gws-docs-write/), [gws-slides](./gws-slides/) |
| **Sheets / Forms**| [gws-sheets](./gws-sheets/), [gws-sheets-read](./gws-sheets-read/), [gws-sheets-append](./gws-sheets-append/), [gws-forms](./gws-forms/), [gws-shift-planner](./gws-shift-planner/) |
| **Calendar / Meet**| [gws-calendar](./gws-calendar/), [gws-calendar-agenda](./gws-calendar-agenda/), [gws-calendar-insert](./gws-calendar-insert/), [gws-meet](./gws-meet/) |
| **Keep / Tasks / Chat** | [gws-keep](./gws-keep/), [gws-tasks](./gws-tasks/), [gws-chat](./gws-chat/), [gws-chat-send](./gws-chat-send/) |

### 4. Obsidian & Knowledge Management
Obsidian Vault の操作や視覚化、ナレッジ管理を最適化します。

| スキル名 | 概要・役割 |
| :--- | :--- |
| [obsidian-markdown](./obsidian-markdown/) | Obsidian 特有の Markdown 記法（Wikilinks 等）の操作。 |
| [obsidian-cli](./obsidian-cli/) | 実行中の Obsidian アプリとの直接連携とデバッグ。 |
| [obsidian-bases](./obsidian-bases/) | 動的なデータベースビュー (.base) の構築。 |
| [json-canvas](./json-canvas/) | 視覚的な接続図 (.canvas) の作成・編集。 |
| [defuddle](./defuddle/) | Web サイトをクリーンな Markdown に変換。 |

### 5. レシピ・ユーティリティ (Recipes & Utilities)
定型タスクの自動化レシピや、プロンプトの設計を支援します。

| スキル名 | 概要・役割 |
| :--- | :--- |
| [recipe-create-presentation](./recipe-create-presentation/) | 構成案からスライド作成までの自動化レシピ。 |
| [recipe-create-doc-from-template](./recipe-create-doc-from-template/) | テンプレートからの文書生成と共有。 |
| [recipe-find-large-files](./recipe-find-large-files/) | ストレージ容量を消費している巨大ファイルの抽出。 |
| [find-skills](./find-skills/) | 適切なスキルの検索とインストール支援。 |
| [prompt-architect-gem](./prompt-architect-gem/) | 高精度な XML プロンプトの自動設計。 |
| [recipe-compare-sheet-tabs](./recipe-compare-sheet-tabs/) | スプレッドシートのタブ間差分チェック。 |

---
**Antigravity AI Skills** - 常に最新の専門知識であなたの業務をサポートします。
