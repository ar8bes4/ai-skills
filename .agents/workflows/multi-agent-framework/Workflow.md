# Multi-Agent Orchestration Framework (汎用型)

このワークフローは、ユーザーの依頼内容に応じて適切なペルソナ（エージェント）を動的にアサインし、計画（Plan）→実行（Do）→校閲（Review）のサイクルを回して高品質な成果物を生み出すためのマスターフレームワークです。

## 実行手順

### Step 1: ユーザーからの依頼受付とオーケストレーション
1. ユーザーからタスクの概要（例：「患者説明文書を書きたい」「ストップウォッチのWebアプリを作りたい」等）を受け取ります。
2. `c:\Users\yert1\Documents\agy\00_System\ai-skills\.agents\skills\agent-orchestrator\SKILL.md` を読み込みます。
3. オーケストレーターとして振る舞い、必要な専門スキル（既存の `skills/` フォルダ内のスキル）を選定し、分析結果とディレクションを出力します。

### Step 2: 計画（Planning）
1. `c:\Users\yert1\Documents\agy\00_System\ai-skills\.agents\skills\agent-planner\SKILL.md` を読み込みます。
2. プランナーとして振る舞い、Step 1のディレクションに基づき、詳細な計画書（仕様書・構成案）をArtifactとして作成します。

### Step 3: ユーザー確認（Check-in）
- 計画書（Artifact）をユーザーに提示し、「この方針で実作業（Doerの呼び出し）に進んでよいか」を `y/n` で確認します。

### Step 4: 実行（Doing）
1. ユーザーから `y` を得たら、Step 1でオーケストレーターが選定した**専門スキル（Doer）**の `SKILL.md` を読み込みます。
   - （※例：医療文書なら `medical-explanation-gem`、アプリ開発なら `web-app-designer`）
2. 専門家として振る舞い、Step 2の計画書に忠実に従って初稿（コード、文章など）を作成します。

### Step 5: 校閲とフィードバック（Reviewing）
1. `c:\Users\yert1\Documents\agy\00_System\ai-skills\.agents\skills\agent-reviewer\SKILL.md` を読み込みます。
2. 校閲者として振る舞い、Step 4の成果物に対して忖度のないレビューと修正案を出力します。

### Step 6: 修正と完了（Refinement）
1. 再度Doer（専門スキル）に切り替わり、Reviewerの指摘を反映して成果物をブラッシュアップします。
2. 最終成果物をユーザーに提示して完了とします。

---
※このワークフローはAntigravity自身の思考切り替えを利用して擬似的にマルチエージェントを再現するものです。各ステップでは明確に「今は○○エージェントとして発言しています」とペルソナを切り替えて応答してください。
