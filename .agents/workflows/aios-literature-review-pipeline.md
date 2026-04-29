---
description: 論文検索・要約から批判的吟味、ナレッジベースへの統合までを行うワークフロー
---

# AIOS Literature Review Pipeline

このワークフローは、学術論文のテキストデータから、要約の抽出、批判的吟味（Critical Appraisal）、およびZettelkasten（ナレッジベース）への統合をシームレスに行います。

## 🎯 目的
効率的かつ網羅的に医学文献をレビューし、Vault内の知識レイヤー（`20_Research` または `40_Knowledge`）へ統合すること。

## ⚙️ 実行エージェント
1. **Generator**: 論文の要約とデータ抽出
2. **Reviewer**: 論文の批判的吟味（バイアスリスクの評価など）

## 🚀 ステップ
### Step 1: 要約の抽出 (Generator)
- 対象となる論文テキストに対し、`aios-research-paper-analyzer` スキルを実行。
- PICO/PECOフォーマットで重要な情報を抽出する。

### Step 2: 批判的吟味 (Reviewer)
- 抽出された要約と元の論文データを基に、エビデンスレベルやリミテーションを評価する。
- `02_Evaluation/rubrics/rubric-academic-rigor.md` に基づき、論理の飛躍やバイアス（選択バイアス、情報バイアスなど）のリスクを指摘する。

### Step 3: ナレッジベースへの統合 (Planner)
- Step 1, 2 の結果を統合し、Obsidian 用の Markdown ノートフォーマットに整形する。
- 関連するタグ（例: `#cardiology`, `#RCT`）や、Vault 内の関連ノートへのリンク（Wikilinks）を自動付与する。
- ユーザーに `20_Research/` 以下への保存を提案する。
