---
name: aios-research-paper-analyzer
description: 論文のPDFやテキストから、PICO/PECOフォーマットで要約を抽出する。
---

# AIOS Research Paper Analyzer

## 概要
学術論文のテキストから重要な要素を抽出し、PICO/PECOフォーマットで簡潔に要約します。

## 指示
1. 論文の構造を解析し、以下の要素を抽出する。
   - P (Patient/Population): 対象患者や集団
   - I/E (Intervention/Exposure): 介入または曝露
   - C (Comparison): 比較対照
   - O (Outcome): 結果・アウトカム
2. 研究デザイン（RCT、コホート研究など）と、主要な結論（BLUF: Bottom Line Up Front）を先頭に記載する。

## 出力フォーマット
```markdown
**【結論 (BLUF)】**: 
**【研究デザイン】**: 

### PICO/PECO
- **P**: 
- **I/E**: 
- **C**: 
- **O**: 

### 重要なリミテーション
- 
```
