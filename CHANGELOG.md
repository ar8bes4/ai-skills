# Changelog

すべての重要かつユーザーに向けた変更はこのファイルに記録されます。

## [v1.1.0] - 2026-03-30

### Added
- **専門スキル**:
    - `medical-document-writer`: 医師間（Physician-to-Physician）の高度な専門文書を執筆・校正します。
    - `slide-designer`: 「1スライド1メッセージ」の黄金律と医療用デザインルールを適用します。
    - `web-app-designer`: 清潔感のある SPA デザインを生成し、Vercel 移行も想定した設計を行います。
    - `web-app-pwa-packager`: Web アプリを PWA 化およびオフライン単一ファイル形式へパッケージングします。
- **ワークフロー**:
    - `/slide-production-canvas`: リサーチから Google Slides 用構成案を最速作成。
    - `/spa-publication-github`: リサーチ結果を SPA として GitHub Pages へ公開・集約。
    - `/webapp-deployment`: 外部（Canvas/Artifact等）コードを GitHub 経由でデプロイ準備。
    - `/app-pwa-offline`: アプリを PWA/Standalone 形式へパッケージングし配布・公開。

### Changed
- `README.md`: 本日追加した全ての新スキルとワークフローの解説を追記。
- `/git-check`: 健康診断後に README 等のドキュメント最新化を提案する機能を追加。

## [v1.0.0] - 2026-03-28

### Initial Release (初期リリース)
以下のコミット履歴を含む最初のバージョン（ベースライン）です。

- b4c277d docs: README.md 繧呈怙譁ｰ縺ｮ繧ｹ繧ｭ繝ｫ縺ｨ繝ｯ繝ｼ繧ｯ繝輔Ο繝ｼ (/git-check) 縺ｫ蜷医ｏ縺帙※譛譁ｰ蛹・8736351 feat: Git迥ｶ諷狗｢ｺ隱阪Ρ繝ｼ繧ｯ繝輔Ο繝ｼ (/git-check) 繧定ｿｽ蜉
- 668af3a docs: sales-proposal-gem 縺ｮ蜑企勁縺翫ｈ縺ｳ繝峨く繝･繝｡繝ｳ繝域峩譁ｰ
- 4234dba docs: 蜷・せ繧ｭ繝ｫ縺翫ｈ縺ｳ繝ｯ繝ｼ繧ｯ繝輔Ο繝ｼ縺ｸ縺ｮ README.md 謨ｴ蛯・df23f59 feat(skills): 邨ｱ蜷医・繝ｭ繝・Η繝ｼ繧ｵ繝ｼ繝ｻ繧ｹ繧ｭ繝ｫ medical-media-producer-gem 縺翫ｈ縺ｳ蛻ｶ菴懊Ρ繝ｼ繧ｯ繝輔Ο繝ｼ縺ｮ霑ｽ蜉
- 719e702 feat(skills): 譁ｰ隕上せ繧ｭ繝ｫ medical-explanation-gem 縺ｮ霑ｽ蜉縺ｨ螳滉ｾ区紛蛯・6f12dda feat(skills): 譁ｰ隕上せ繧ｭ繝ｫ fact-check-gem 縺ｮ霑ｽ蜉縺ｨ螳滉ｾ区紛蛯・806426d feat(skills): 繧ｹ繧ｭ繝ｫ繧ｻ繝・ヨ縺ｮ螳滉ｾ玖ｿｽ蜉縺ｨ險隱槫ｮ夂ｾｩ縺ｮ蛻ｷ譁ｰ
- 75460ff feat: add speaker-note-generator-gem
- e4e6476 feat: add prompt-architect-gem
- 8db415c feat: add academic-critique-gem
- 0a9f15a feat: initial repository structure with templates and sales-proposal-gem sample

