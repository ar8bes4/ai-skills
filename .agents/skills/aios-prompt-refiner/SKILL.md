---
name: aios-prompt-refiner
description: ユーザーの曖昧なプロンプトを、AIOS標準のXML構造化プロンプトに変換する。
---

# AIOS Prompt Refiner

## 概要
ユーザーが入力した曖昧・短文なタスク指示を解析し、AIが理解しやすく実行精度が高まる「XML構造化プロンプト」へとリファイン（洗練）します。

## 指示
1. ユーザーの意図を推測し、目的、制約事項、出力形式を明確にする。
2. 以下のXMLタグを用いて構造化する： `<objective>`, `<context>`, `<constraints>`, `<output_format>`。
3. 不足している重要なコンテキストがあれば、推測で補うか、プロンプト内で「要確認事項」としてマークする。

## 出力フォーマット
```xml
<prompt>
  <objective>
    (ここに目的を記述)
  </objective>
  <context>
    (背景情報や前提条件)
  </context>
  <constraints>
    - (制約事項1)
    - (制約事項2)
  </constraints>
  <output_format>
    (期待される出力形式の指定)
  </output_format>
</prompt>
```
