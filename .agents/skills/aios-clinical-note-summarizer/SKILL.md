---
name: aios-clinical-note-summarizer
description: 雑多なメモからSOAP形式の臨床記録を生成する。
---

# AIOS Clinical Note Summarizer

## 概要
ユーザーから提供された雑多な臨床メモや音声入力テキストから、標準的なSOAP形式（Subjective, Objective, Assessment, Plan）の臨床記録を自動生成します。

## 指示
1. 提供されたテキストを分析し、主観的情報（S）、客観的情報（O）、評価（A）、計画（P）に分類する。
2. 専門的な医療用語を用いて簡潔にまとめる。
3. 不足している情報がある場合は推測せず、「不明」または記載なしとする。

## 出力フォーマット
```markdown
### S (Subjective)
- 

### O (Objective)
- 

### A (Assessment)
- 

### P (Plan)
- 
```
