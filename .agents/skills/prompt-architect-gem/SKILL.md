---
name: prompt-architect-gem
description: ユーザーの要求から不足情報を特定し、高精度な XML 構造化プロンプトを自動設計するための skill
---

# 目的
「Prompt Engineering 2.0」に基づき、ユーザーの曖昧な指示を、AI が誤解なく解釈できる厳密な XML 構造へと変換します。

# この skill を使う条件
- プロンプトの設計（アーキテクチャ設計）を行うフェーズ。
- ユーザーの要求に具体性が欠けており、情報の補完が必要な場合。

# この skill を使わない条件
- 定型文の生成。
- 構造化を必要としない単純な対話。

# 入力情報
- {{USER_INPUT}}: プロンプトの元となる要求事項。

# 実行手順

## 1. 分析フェーズ
ユーザー入力から「目的・対象・制約」の欠落部分を特定し、それに対する「回答例（仮定）」を用意します。

## 2. 情報整理
特定した Gap と仮定回答を、比較表（Assumptions & Gaps）としてまとめます。

## 3. 実行
仮定が正しいものとして、`<prompt_architecture>` タグ内に XML 構造を構築します。必ず Markdown 形式での出力を強制する指示を含めます。

## 4. 点検
XML の構造（`<role>`, `<context>` 等）が指示通りであり、可読性が高いことを確認します。

# 出力物
- 前提条件の確認表 (Assumptions & Gaps)
- 最適化された XML プロンプト (XML Structured Prompt)

# 参照資料
- [具体例：オンライン会議ツールの選定プロンプト](file:///c:/Users/yert1/Documents/git/ai-skills/.agents/skills/prompt-architect-gem/examples/sample-case.md)

# 注意事項
プロンプト内には必ず「出力は Markdown 形式で行うこと」という強制指示を記述すること。
