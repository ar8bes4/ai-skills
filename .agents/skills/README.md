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
| [medical-media-producer-gem](./medical-media-producer-gem/) | メディア制作プロジェクト管理 | 動画・スライド制作全9工程のナビゲートと個別スキル連携。 |

### 2. デザイン・プレゼン (Design & Presentation)
視覚的に優れたアウトプットとプレゼンテーションの質を向上させます。

| スキル名 | 概要・役割 | 主な用途 |
| :--- | :--- | :--- |
| [slide-designer](./slide-designer/) | スライドデザイン黄金律 | 「1スライド1メッセージ」の徹底と専門的デザイン適用。 |
| [speaker-note-generator-gem](./speaker-note-generator-gem/) | スライド台本（ノート）作成 | プレゼン資料に基づいた、聴衆に最適化された台本生成。 |
| [web-app-designer](./web-app-designer/) | 清潔感重視 SPA デザイン | リサーチ結果を整った Web ページとして可視化。 |
| [web-app-pwa-packager](./web-app-pwa-packager/) | PWA・オフライン化技術 | アプリのインストール化、単一ファイル（Standalone）化。 |

### 3. Google Workspace (GWS)
Google の各種ツール（Gmail, Drive, Docs, Sheets 等）を API 経由で直接操作します。

| スキル名 | 概要 |
| :--- | :--- |
| **GWS 統合管理** | [gws-workflow](./gws-workflow/), [gws-workflow-weekly-digest](./gws-workflow-weekly-digest/) |
| **Gmail** | [gws-gmail](./gws-gmail/), [gws-gmail-send](./gws-gmail-send/), [gws-gmail-read](./gws-gmail-read/), [gws-gmail-triage](./gws-gmail-triage/), [gws-gmail-watch](./gws-gmail-watch/), [gws-gmail-forward](./gws-gmail-forward/), [gws-gmail-reply](./gws-gmail-reply/), [gws-gmail-reply-all](./gws-gmail-reply-all/) |
| **Drive, Docs & Slides** | [gws-drive](./gws-drive/), [gws-drive-upload](./gws-drive-upload/), [gws-docs](./gws-docs/), [gws-docs-write](./gws-docs-write/), [gws-slides](./gws-slides/) |
| **Sheets & Forms**| [gws-sheets](./gws-sheets/), [gws-sheets-read](./gws-sheets-read/), [gws-sheets-append](./gws-sheets-append/), [gws-forms](./gws-forms/) |
| **Calendar & Meet**| [gws-calendar](./gws-calendar/), [gws-calendar-agenda](./gws-calendar-agenda/), [gws-calendar-insert](./gws-calendar-insert/), [gws-meet](./gws-meet/) |
| **Keep & Tasks** | [gws-keep](./gws-keep/), [gws-tasks](./gws-tasks/) |
| **Chat** | [gws-chat](./gws-chat/), [gws-chat-send](./gws-chat-send/) |

### 4. レシピ・ユーティリティ (Recipes & Utilities)
定型タスクの自動化や、スキルの検索・設計を支援します。

| スキル名 | 概要・役割 |
| :--- | :--- |
| [recipe-create-presentation](./recipe-create-presentation/) | 構成案からスライド作成までの自動化レシピ |
| [recipe-create-doc-from-template](./recipe-create-doc-from-template/) | テンプレートからの文書生成と共有 |
| [recipe-create-gmail-filter](./recipe-create-gmail-filter/) | 迷惑メール対策やラベル付けの自動化 |
| [recipe-find-large-files](./recipe-find-large-files/) | ストレージを圧迫している巨大ファイルの抽出 |
| [find-skills](./find-skills/) | 必要に応じたスキルの検索とインストール支援 |
| [prompt-architect-gem](./prompt-architect-gem/) | 高精度な XML プロンプトの自動設計 |

## 構成
各スキルディレクトリ内には以下のファイルが含まれています：
- `SKILL.md`: スキルの核心となる実行定義。
- `README.md`: そのスキルの詳細な役割とファイル構成の解説。
- `examples/`: 成功事例（Few-shot リファレンス）。
