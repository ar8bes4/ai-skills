---
name: obsidian-bases
description: Create and edit Obsidian Bases (.base) files to build dynamic database views over vault notes. Use when the user asks to create a database, table, kanban, or filtered view of their notes using Obsidian Bases. Includes advanced expression support for filtering, sorting, and computing values.
---

# Obsidian Bases

Obsidian Bases は、Vault 内のノートを動的なデータベースビューとして整理・表示するファイル形式（`.base`）です。YAML 形式で記述します。

> **参考**: 利用できる全関数の詳細は [FUNCTIONS_REFERENCE.md](references/FUNCTIONS_REFERENCE.md) を参照してください。

## Bases ファイルの基本構造

```yaml
# .base ファイルの例
filters:
  - field: tags
    operator: contains
    value: "project"
sort:
  - field: file.mtime
    direction: desc
columns:
  - field: file.name
    label: "ノート名"
  - field: status
    label: "ステータス"
  - field: due_date
    label: "期日"
```

## フィルター (Filters)

### 基本的な比較演算子
| 演算子 | 意味 |
|--------|------|
| `is` | 完全一致 |
| `is not` | 不一致 |
| `contains` | 含む |
| `does not contain` | 含まない |
| `starts with` | で始まる |
| `ends with` | で終わる |
| `is empty` | 空である |
| `is not empty` | 空でない |

### フィルター記述例
```yaml
filters:
  # タグでフィルタ
  - field: tags
    operator: contains
    value: "active"

  # 日付でフィルタ（今日より後）
  - expression: "date(due_date) > today()"

  # 複数条件（AND）
  - field: status
    operator: is
    value: "in-progress"
  - field: priority
    operator: is not
    value: "low"
```

## ソート (Sort)

```yaml
sort:
  # 最終更新日の降順
  - field: file.mtime
    direction: desc
  # 名前の昇順
  - field: file.name
    direction: asc
```

## カラム (Columns) / 計算列

```yaml
columns:
  # 標準フィールド
  - field: file.name
    label: "ノート名"
  
  # 計算式（Expression）による列
  - expression: "(date(due_date) - today()).days"
    label: "残り日数"
  
  # 条件付き表示
  - expression: "if(status == 'done', '✅', '🔄')"
    label: "状態"
```

## よく使う Expression パターン

```yaml
# 今日から期日まで何日か
"(date(due_date) - today()).days"

# ファイルが作成されてから何日経過したか
"(now() - file.ctime).days.round(0)"

# タグに特定のものが含まれるか
"tags.contains('urgent')"

# ステータスに応じてアイコン表示
"if(status == 'done', '✅ 完了', if(status == 'in-progress', '🔄 進行中', '⏳ 未着手'))"

# 特定フォルダ内のファイルに絞る
"file.inFolder('20_Projects')"

# タグ一覧を結合して表示
"tags.join(', ')"
```

## ビューのレイアウト

Obsidian Bases では複数のレイアウトが利用できます：

| レイアウト | 特徴 |
|-----------|------|
| `table` | スプレッドシート形式（デフォルト） |
| `board` | カンバンボード（ステータス別カード表示） |
| `gallery` | カード形式（サムネイル付き） |

## 完全な例：プロジェクト管理データベース

```yaml
filters:
  - expression: "file.inFolder('20_Projects')"
  - expression: "file.hasTag('active')"

sort:
  - expression: "(date(due_date) - today()).days"
    direction: asc

columns:
  - field: file.name
    label: "プロジェクト名"
  - field: status
    label: "状態"
  - expression: "(date(due_date) - today()).days.round(0)"
    label: "残り日数"
  - field: tags
    label: "タグ"
  - field: file.mtime
    label: "最終更新"
```
