---
description: 溜まった一時メモをAIが整理し、Zettelkastenにリンク・分類する週末ルーチン
---

# AIOS Weekly Knowledge Sync

このワークフローは、週の間に蓄積された未整理のメモ（Daily Notesなど）をAIが自動的に分類し、Vault内の永続的なナレッジベース（Zettelkasten）に統合する週末のルーチン作業です。

## 🎯 目的
一時的な情報の死蔵を防ぎ、後から検索・再利用可能な形式（Evergreen Notes）へと昇華させること。

## ⚙️ 実行エージェント
1. **Planner**: 未整理ノートの抽出と処理計画の立案
2. **Knowledge Curator (Generator)**: メモの構造化とリンク生成

## 🚀 ステップ
### Step 1: 未整理ノートの抽出
- Obsidian Vault の Inbox（または Daily Notes）から、今週作成されてまだタグ付け・分類されていないノートをピックアップする。

### Step 2: 構造化とメタデータ付与 (Generator)
- ノートの内容を分析し、最適なタイトルを自動生成する。
- 関連するトピックのタグ（例: `#idea`, `#clinical_pearl`）を付与する。
- 既存のVault内のノートと関連性が高い場合は、Wikilinks（`[[リンク]]`）を挿入してネットワークを構築する。

### Step 3: レビューと承認
- AIが提案したノートの移動先と変更内容のリスト（プレビュー）をユーザーに提示する。
- ユーザーの承認（y）を得た後、各ノートを指定のディレクトリ（例: `40_Knowledge/`）へ移動・保存する。
