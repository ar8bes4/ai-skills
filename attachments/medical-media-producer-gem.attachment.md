---
name: medical-media-producer-gem
description: 医療マルチメディア制作ワークフローの支援と管理を行うためのアタッチメント
---

# 概要
医療従事者が高品質な動画資料を制作するための 9 ステップを AI がナビゲートするための知識ベースです。

# ノウハウ・ナレッジ
## スライド制作の効率化 (Step 5)
NotebookLM 等で生成したスライドを Powerpoint へインポートする際、一旦「文字を全て消した画像」を作成し、その上にテキストボックスを再配置することで、日本語の配置をより美しく制御できます。

## ナレーションの最適化 (Step 8)
Google Vids によるナレーション生成時、漢字の読み間違いが発生する傾向があるため、スピーカーノートの時点で「ふりがな」を振るなどの調整が有効です。

# 活用 Gem マッピング
- **Step 1**: prompt-architect-gem
- **Step 2**: medical-explanation-gem
- **Step 7**: speaker-note-generator-gem
- **All Steps**: academic-critique-gem (校正・洗練)
