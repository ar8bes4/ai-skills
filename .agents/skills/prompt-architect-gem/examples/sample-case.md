# prompt-architect-gem 具体例：オンライン会議ツールの選定

このリファレンスは、ユーザーの曖昧な要望をどのように分析し、構造化されたプロンプトへ変換するかを示した実例です。

## 1. ユーザー入力 (User Input)
> 「google AI proとmicrosoft365familyを契約している状態です。オンライン会議ツールを選びたい。google meetとteamsとzoomとwebexが候補？」

## 2. 前提条件の確認表 (Assumptions & Gaps)
不足している情報を補うため、以下の設定を仮定します。

| 不足要素 | 本来の質問 | 今回適用した回答例（仮定） |
| :--- | :--- | :--- |
| **主な利用目的** | 個人利用か、ビジネスか？ | ビジネス・実務利用（AI活用を前提） |
| **重視する指標** | 画質、録画、AI要約のどれを優先するか？ | AIによる議事録作成・要約の精度と連携 |
| **接続相手の環境** | 相手も同じツールか、ブラウザ参加か？ | 不特定多数（ブラウザ参加の容易さを重視） |
| **予算追加の有無** | 追加料金を払ってZoom等を契約するか？ | 追加予算なし（既存の有料契約内で完結） |

## 3. 最適化された XML プロンプト (XML Structured Prompt)

```xml
<prompt_architecture>
    <role>
        あなたはITコンサルタントおよび生産性向上エンジニアです。
        特に「Google Workspace (Gemini)」と「Microsoft 365 (Copilot)」の両方の高度な機能を熟知し、ユーザーのライフスタイルや業務フローに合わせた最適なツール選定を支援します。
    </role>

    <context>
        ユーザーは以下の有料サブスクリプションを既に契約済みです。
        - Google AI Pro (Gemini Advanced, Google Meetのプレミアム機能)
        - Microsoft 365 Family (個人向けTeamsのプレミアム機能, Copilot Pro*想定)
        
        候補ツール：Google Meet, Microsoft Teams, Zoom, Webex
        ※ユーザーの真の目的は、追加費用をかけずに「既存リソースを最大化して、最も効率的かつスマートに会議を運用すること」です。
    </context>

    <instructions>
        以下のステップで、最適な会議ツールの選定と運用アドバイスを提供してください。

        1. 既存アセットの優位性分析:
           - Google AI ProによるGoogle Meetの利点（AI要約、ノイズキャンセル、録画等）。
           - Microsoft 365 FamilyによるTeamsの利点（時間制限解除、カレンダー連携、Officeアプリ親和性）。
        2. 競合比較 (Zoom/Webex):
           - 無料版Zoom/Webexの制限（時間制限等）と、既存の有料ツールと比較した際のデメリットを明確にする。
        3. 利用シーン別の使い分け提案:
           - 「社外の知人とのカジュアルな面談」「クライアントとの正式な会議」「多人数でのワークショップ」などのシナリオ別に推奨ツールを提示。
        4. 最終推奨:
           - ユーザーがメインで使用すべき「メインツール」と、バックアップとしての「サブツール」を決定する。
    </instructions>

    <output_format>
        出力は以下の構成で、人間が見やすいMarkdown形式で行うこと。
        - ## 結論：あなたに最適なメインツール
        - ### 1. 既存契約ツールの徹底比較表（Meet vs Teams）
        - ### 2. Zoom・Webexをあえて選ばない理由（または併用案）
        - ### 3. AI（Gemini/Copilot）を会議で使い倒すテクニック
        - ### 4. まとめ：明日からの運用フロー
    </output_format>
</prompt_architecture>
```
