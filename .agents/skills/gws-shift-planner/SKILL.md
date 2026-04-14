---
name: gws-shift-planner
description: "Google スプレッドシートの希望とルールを活用した、高度な当番シフト作成・管理スキル。"
metadata:
  version: 1.0.0
  category: "GWS"
  tags: ["Calendar", "Sheets", "Gmail", "Shift-Planning"]
---

# gws-shift-planner

## 目的
- 医療現場等の複雑な制約（担当割合、連続勤務禁止、休日加算ルール等）を遵守したシフト案を、スプレッドシートデータから自動生成します。
- 生成後のカレンダー登録（Google Calendar）および関係者への報告（Gmail Draft）までを一気通貫でサポートします。

## 依存スキル
- `gws-sheets-read`: 希望・ルールの取得
- `gws-calendar-insert`: 予定の登録
- `gws-gmail-send`: 下書き作成（MIME/Raw対応）

## 基本設定 (System Default)
- **Spreadsheet ID**: `1zIJ-ODc2noEqtJVMTUaGyDFuVIAuMlGV-2q0ykFr5r8`
- **Target Sheets**:
  - `希望入力`: `[日付, 氏名, 区分, 内容]`
  - `基本ルール`: `[項目, 設定値, 適用条件]`
  - `医師データ`: `[氏名, メールアドレス, 属性]`
- **Calendar ID**: `790569b5dbfbf16e98e182117a0effc0765b2382d33159af293d5c842d4d41e4@group.calendar.google.com`
- **Draft Destination**: `byoin-kanri@city.iwata.lg.jp`

## 命令ガイド
1. **データ収集**: `gws-sheets-read` で各シートを読み取り、現在の制約を確認する。
2. **パズル推論**: 各医師の「平日割合」と「休日配分」を計算し、欠員やルール違反のないシフト案をマークダウン形式で生成する。
3. **対話的調整**: 生成案をユーザーに提示し、自然言語による微調整を受け付ける。
4. **反映処理**: 最終確定後、カレンダーへのイベント登録とメール（送信せずに下書き保存）の作成を自律実行する。
