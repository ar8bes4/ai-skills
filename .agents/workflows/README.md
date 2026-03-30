# Workflows (.agents/workflows/)

このディレクトリには、特定のタスクを完了させるための標準化された手順書（ワークフロー）を格納しています。

## ワークフローの使用方法
1. **コマンドによる呼び出し**: スラッシュコマンド（例: `/medical-video-production`）を使用して、Antigravity に手順を読み込ませることができます。
2. **ナビゲーションの開始**: ワークフローが開始されると、AI が各ステップを案内し、必要に応じて適切な AI スキル（Gem）を提案します。

## 収録ワークフロー一覧

| ワークフロー名 | コマンド | 概要 |
| :--- | :--- | :--- |
| **[git-check](./git-check.md)** | `/git-check` | ローカルと GitHub の同期状態をチェック |
| **[git-pull](./git-pull.md)** | `/git-pull` | 全てのリポジトリを一括で Pull |
| **[git-push](./git-push.md)** | `/git-push` | 全てのリポジトリを一括で Commit & Push |
| **[docs-maintenance](./docs-maintenance.md)** | `/docs-maintenance` | ドキュメントの整合性チェックと日本語化 |
| **[release](./release.md)** | `/release` | バージョンアップと CHANGELOG 更新、Push |
| **[medical-video-production](./medical-video-production.md)** | `/medical-video-production` | 医療動画制作の 9 ステップ標準手順 |
| **[slide-production-canvas](./slide-production-canvas.md)** | `/slide-production-canvas` | リサーチからスライド構成案の自動生成 |
| **[spa-publication-github](./spa-publication-github.md)** | `/spa-publication-github` | リサーチ結果を SPA として GitHub 公開 |
| **[webapp-deployment](./webapp-deployment.md)** | `/webapp-deployment` | Web アプリのデプロイ準備と Vercel 移行 |
| **[app-pwa-offline](./app-pwa-offline.md)** | `/app-pwa-offline` | PWA 化およびオフラインパッケージング |
| **[obsidian-sync](./obsidian-sync.md)** | `/obsidian-sync` | リポジトリの更新内容を Obsidian Vault に同期 |
