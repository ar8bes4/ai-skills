---
description: 外部（Canvas/Artifact等）で生成した Web アプリを GitHub にデプロイし、Vercel 移行の準備をするワークフロー
---

このワークフローは、Gemini Canvas、Claude Artifacts、あるいは Antigravity で作成した単一の HTML/JS アプリを、GitHub リポジトリ `ar8bes4/research-output` の `apps/` ディレクトリに公開し、将来の Vercel 連携（バックエンド連携）を容易にするための手順です。

# デプロイプロセス

### ステップ①：コードの取得とクレンジング
- **Antigravityの支援**: ユーザーから提供されたコードを精査し、動作に必要なライブラリ（CDN等）が正しく設定されているか確認します。
- **デザインの適用**: `web-app-designer` スキルを適用し、清潔感のある UI デザインに整えます。

### ステップ②：プロジェクト構成の作成（Vercel対応）
- **ファイル構成**: デプロイ先のフォルダに以下のファイルを生成します。
    - `index.html` (本体)
    - `README.md` (アプリの説明)
    - `package.json`: 将来の Vercel 移行時にビルド設定を認識させるための初期ファイル。
    - `.env.example`: 将来の API キー管理に向けたテンプレート。

### ステップ③：GitHub へのプッシュ
- **Antigravityの支援**: `remote-github_push_files` を使用し、`ar8bes4/research-output` の `apps/[アプリ名]/` ディレクトリへ一括プッシュします。

### ステップ④：公開確認
- **検証**: 公開 URL を提示し、ブラウザでの動作を確認します。
- **公開URL形式**: `https://ar8bes4.github.io/research-output/apps/[アプリ名]/`

---

# 🚀 Vercel への将来的な移行について
- 現在の `apps/` 構成は、Vercel にリポジトリを連携するだけで自動的に「プロジェクト」として認識されます。
- Gemini API 等を組み込む際は、現在の `index.html` を `public/index.html` または Next.js のコンポーネントへ変換することで、安全な API 連携が可能になります。
