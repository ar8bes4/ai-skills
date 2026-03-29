---
name: web-app-pwa-packager
description: Web アプリを PWA 化およびオフライン単一ファイル形式へパッケージングする技術。
---

# 目的
- 既存の HTML/JS アプリを「インストール可能なアプリ（PWA）」および「持ち運び可能な1ファイル（Standalone）」へと昇格させます。
- 病院内などのオフライン環境でも、リサーチ結果やツールを確実に動作させることを目指します。

# デザイン・実装ルール

### 1. PWA 配置構成
- **manifest.json**: 
    - `display: standalone` を指定し、スマホのホーム画面から起動した際にブラウザのUIを隠します。
    - `theme_color`: `web-app-designer` のメインカラー（ロイヤルブルー等）を適用。
- **sw.js (Service Worker)**:
    - 静的アセット（HTML/CSS/JS/Icons）を `install` イベントでキャッシュ。
    - ネットワークがない場合はキャッシュから返す `Cache-first` 戦略を基本とします。

### 2. Standalone (Single-file) 変換技術
- **Assets Inline**: 
    - `link` タグの内容を `<style>` に、`script src` の内容を `<script>` タグ内に直接展開。
    - `<img>` タグの `src` や CSS 内の背景画像を `data:image/...;base64,...` 形式に変換。
- **Dependency Management**:
    - CDN (Chart.js等) も可能であれば取得してインライン化しますが、巨大なライブラリの場合はユーザーにリポジトリ内への保存か CDN 継続かを確認します。

### 3. モバイル・UX 最適化 (PWA)
- **アイコン**: 最小限 `192x192` および `512x512` の PNG アイコンを用意。
- **インストール誘導**: ブラウザの `beforeinstallprompt` イベントをキャッチして、アプリ内でインストールボタンを表示させるロジックを追加。

# 実行手順
1. **ソースコードの精査**: 
    - 外部ライブラリの依存関係をリストアップ。
    - 埋め込むべき画像やアイコンを確認。
2. **変換作業**:
    - **PWA版**: `manifest.json`, `sw.js` を生成し、`index.html` にリンクを追記。
    - **Standalone版**: 全ての外部参照を解消した `[name]_offline.html` を作成。
3. **検証**:
    - ブラウザの DevTools (Application タブ) で PWA の登録状態をチェック。
    - ネットワークを「Offline」に設定して動作を確認。

# 注意事項
- **セキュリティ**: Standalone 版には全てのロジックが含まれるため、秘匿すべき API キー等は絶対に含めないようにしてください（Vercel/Next.js 移行を前提とした設計を推奨）。
