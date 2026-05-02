# AGENTS.md — ai-skills プロジェクト設定

このファイルは、Codex CLI が `ai-skills` リポジトリ内で作業する際の行動指針です。
グローバル設定（`~/.codex/AGENTS.md`）と組み合わせて機能します。

---

## プロジェクト概要

`ai-skills` は、複数の AI エージェント（Antigravity / Codex / Claude Code）が共有する
スキル・ワークフローの **唯一のソース（Single Source of Truth）** です。

```
ai-skills/
└── .agents/
    ├── skills/      ← 77個の専門スキル定義（SKILL.md）
    ├── workflows/   ← 19個の標準ワークフロー（.md）
    ├── AGENTS.md    ← このファイル（Codex向け）
    └── README.md
```

---

## スキルの参照方法

各スキルは `.agents/skills/<skill-name>/SKILL.md` に定義されています。
タスクに応じて適切なスキルを選択し、その指示に従って作業してください。

### スキル一覧（77個）

#### 🤖 マルチエージェント系
- `agent-orchestrator` — タスク分析と専門スキルのアサイン（司令塔）
- `agent-planner` — 実装計画・仕様書の策定
- `agent-reviewer` — 成果物の品質チェックと修正指示

#### 🏥 医療・臨床系
- `aios-clinical-note-summarizer` — 雑多なメモ → SOAP形式臨床記録
- `aios-prompt-refiner` — 曖昧なプロンプト → XML構造化プロンプト
- `aios-research-paper-analyzer` — 論文PDF → PICO/PECOフォーマット要約
- `aios-safety-checker` — PHI漏洩・臨床的危険性スクリーニング
- `clinical-spa-architect` — 院内環境向け高機能医療用SPA設計
- `medical-document-writer` — 日本語・英語医療専門文書の執筆・校正
- `medical-explanation-gem` — エビデンスベースの患者説明文書作成
- `medical-media-producer-gem` — 医療メディア制作9ステップ

#### 📝 文章・プロンプト系
- `academic-critique-gem` — 学術雑誌エディター視点での文章批判・リライト
- `fact-check-gem` — テキストの正確性検証・監査レポート作成
- `prompt-architect-gem` — XML構造化プロンプトの自動設計
- `nano-banana-prompt-architect` — Gemini 3シリーズ最適化プロンプト設計

#### 🎨 デザイン・メディア系
- `slide-design-advisor` — プレゼン資料の評価・添削・改善提案
- `slide-designer` — リサーチ結果 → Google Slides変換・美装
- `speaker-note-generator-gem` — スライドに最適化されたスピーカーノート生成
- `web-app-designer` — プレミアム感のある SPA コード生成
- `web-app-pwa-packager` — Web アプリの PWA 化・オフライン化
- `lyria-director-gem` — Lyria 3/Pro を用いた音楽制作
- `veo-director-gem` — Veo 3.1 映像プロンプト設計

#### 📅 Google Workspace 系（GWS）
- `gws-calendar` / `gws-calendar-agenda` / `gws-calendar-insert`
- `gws-chat` / `gws-chat-send`
- `gws-docs` / `gws-docs-write`
- `gws-drive` / `gws-drive-upload`
- `gws-forms`
- `gws-gmail` / `gws-gmail-forward` / `gws-gmail-read` / `gws-gmail-reply` / `gws-gmail-reply-all` / `gws-gmail-send` / `gws-gmail-triage` / `gws-gmail-watch`
- `gws-keep`
- `gws-meet`
- `gws-sheets` / `gws-sheets-append` / `gws-sheets-read`
- `gws-slides`
- `gws-tasks`
- `gws-workflow` / `gws-workflow-email-to-task` / `gws-workflow-file-announce` / `gws-workflow-meeting-prep` / `gws-workflow-weekly-digest`

#### 🍳 レシピ系（GWS 自動化パターン）
- `recipe-compare-sheet-tabs` / `recipe-copy-sheet-for-new-month`
- `recipe-create-doc-from-template` / `recipe-create-gmail-filter`
- `recipe-create-meet-space` / `recipe-create-presentation`
- `recipe-create-shared-drive` / `recipe-create-task-list`
- `recipe-draft-email-from-doc` / `recipe-email-drive-link`
- `recipe-find-large-files` / `recipe-forward-labeled-emails`
- `recipe-generate-report-from-sheet` / `recipe-label-and-archive-emails`
- `recipe-plan-weekly-schedule` / `recipe-save-email-to-doc`
- `recipe-schedule-recurring-event` / `recipe-watch-drive-changes`

#### 🗃️ Obsidian 系
- `obsidian-bases` — Obsidian Bases (.base) ファイル作成・編集
- `obsidian-cli` — Obsidian の操作・ノート管理・プラグイン開発
- `obsidian-markdown` — Obsidian 特有の Markdown 記法編集

#### 🔧 その他
- `defuddle` — Web ページからクリーンな Markdown 抽出
- `find-skills` — 適切なスキルの検索・提案
- `json-canvas` — JSON Canvas (.canvas) ファイルの作成・編集

### ワークフロー一覧（19個）

スラッシュコマンド形式で呼び出す複数ステップの標準手順書です：

- `/aios-clinical-case-review` — 症例入力から鑑別診断生成・安全性チェック・レポート出力
- `/aios-literature-review-pipeline` — 論文検索・要約・批判的吟味・ナレッジベース統合
- `/aios-weekly-knowledge-sync` — 一時メモの整理・Zettelkastenへの分類
- `/app-pwa-offline` — Web アプリの PWA 化・オフライン単一ファイル化
- `/docs-maintenance` — スキル・ワークフローとREADMEの整合性チェック
- `/git-check` — Git環境の健康診断・同期状態チェック
- `/gws-shift-planner` — 医療シフト案のAI生成・カレンダー登録・メール報告
- `/lyria-music-production` — Lyria 3/Pro を用いた高品質音楽制作
- `/medical-video-production` — 医療メディア制作の9ステップ
- `/nano-banana` — Gemini 3シリーズ向け最高プロンプト設計
- `/obsidian-sync` — リポジトリ更新内容をObsidian Vaultに反映
- `/pull-git` — 安全確認付きの一括 Git Pull
- `/push-git` — 安全確認付きの Git Commit & Push
- `/release` — バージョンタグ付与・CHANGELOG更新・リリース
- `/slide-production-canvas` — リサーチ結果 → Google Slides変換
- `/spa-publication-github` — SPA化してGitHubへ公開
- `/veo-prompting-workflow` — Veo 3.1 映像演出プロンプト設計
- `/webapp-deployment` — Web アプリをGitHubにデプロイ・Vercel移行準備

---

## コーディング規約

- **コードコメント・ドキュメント**: 日本語で記述すること
- **変数名・関数名**: 英語でOK
- **コミットメッセージ**: 日本語推奨（例：`feat: シフト生成機能を追加`）
- **ファイル作成・変更・削除前**: 作業計画を報告し、ユーザー確認を取ること
