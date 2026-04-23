---
name: clinical-spa-architect
description: 院内環境（オフライン・閉鎖網）に最適化された高機能・高信頼・高ポータビリティな医療用SPAを構築するための設計指針。単一ファイル完結、JSONデータ分離、標準フォント依存、ダークモード対応、印刷最適化などを標準搭載します。
---

# Clinical SPA Architect Skill

このスキルは、院内カルテ環境や閉鎖ネットワークで動作する、医療従事者向けのシングルページアプリケーション（SPA）を構築するためのベストプラクティスを定義します。

## 核心となる設計思想 (Core Philosophy)

1.  **完全ポータビリティ (Single File Solution)**:
    *   HTML, CSS, JavaScript, および初期データを1つの `.html` ファイルに集約します。
    *   USBメモリでの持ち運びや、デスクトップへの保存だけで即座に動作し、パス解決のトラブルを排除します。
2.  **ロジックとデータの分離 (JSON-Script Isolation)**:
    *   チェックリスト項目や設定値を `<script id="data" type="application/json">` 内に配置します。
    *   非プログラマー（医師や看護師）がテキストエディタでJSON部分を書き換えるだけで、安全にメンテナンスできる構造にします。
3.  **外部依存の徹底排除 (Zero External Dependency)**:
    *   Google Fonts や CDN 上のライブラリ（jQuery, Tailwind等）を一切使用しません。
    *   Windows標準フォント（Segoe UI, メイリオ, 游ゴシック）のみを使用し、オフライン環境でも高速・正確にレンダリングします。
4.  **臨床現場への最適化 (Clinical UX)**:
    *   **ダークモード**: 当直帯や薄暗い部屋での利用を想定し、システム連動および手動切替（トグル）を必須とします。
    *   **印刷最適化**: `@media print` を活用し、UI要素を隠して「紙の依頼票」として即座に使えるレイアウトを提供します。
    *   **安全性**: 免責事項の明記、更新日の表示、印刷時の患者情報記入欄などを標準搭載します。

## 実装ガイドライン

### 1. スタイリング (CSS)
*   CSS変数を活用し、ライト/ダークの切り替えを容易にします。
*   `font-family` は以下の順序で指定します:
    ```css
    --font-family: "Yu Gothic", "YuGothic", "Meiryo", "Segoe UI", sans-serif;
    ```

### 2. データ構造 (JSON)
*   HTMLの冒頭にデータを埋め込みます。
*   ASAクラスなどの医療的重み付けを含めることで、ロジックを汎用化します。

### 3. セキュリティと透明性
*   READMEには「生成AIにコードを読み込ませて安全性を検証すること」を推奨する文言を含めます。
*   外部通信（Fetch/XHR）が発生しないことをコードコメントで明示します。

## テンプレート構造 (Skeleton)

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <!-- 1. Meta Tags -->
    <!-- 2. CSS Variables (Light/Dark) -->
    <!-- 3. Base Styles & Print Styles -->
</head>
<body>
    <!-- 4. Data (JSON) -->
    <script id="app-data" type="application/json">[...]</script>
    
    <!-- 5. App UI -->
    
    <!-- 6. App Logic (Vanilla JS) -->
</body>
</html>
```

## このスキルを使用するタイミング
*   医療機関内でのみ使用するツール（チェックリスト、計算機、文書生成支援など）を作成する場合。
*   サーバーを立てず、ファイル配布のみで運用を完結させたい場合。
*   高度な機密性を要し、外部ネットワークへの接続を許可しない環境で使用する場合。
