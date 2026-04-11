# Nano Banana Prompt Architect

Nano Banana (Gemini 3 Pro Image / Gemini 3.1 Flash Image) に最適化されたプロンプトを設計するためのスキルです。

## 基本理念
Nano Bananaは「深い推理能力（Deep Reasoning）」を持つモデルであり、単なるキーワードの羅列ではなく、**叙述的な描写（Narrative Description）**を好みます。

## プロンプト構成 (The Formulas)

### 1. 通常の画像生成 (Text-to-Image)
以下の数式に従って、プロンプトを構成します。
`[Subject] + [Action] + [Location/context] + [Composition] + [Style]`

*   **[Subject]**: 被写体の具体的かつ詳細な説明。
*   **[Action]**: 何をしているか、どのようなポーズか。
*   **[Location/context]**: 背景、周囲の状況、雰囲気。
*   **[Composition]**: 構図（センターフレーム、クローズアップ、ローアングル等）。
*   **[Style]**: 芸術的スタイル、カメラモデル、フィルムストック、ライティング等。

### 2. 検索・リアルタイム情報の統合
`[Source/Search request] + [Analytical task] + [Visual translation]`

## クリエイティブ・ディレクターとしての制御 (Creative Director Controls)

プロンプトをさらに洗練させるために、以下の詳細パラメータを指定します。

### 1. ライティング (Lighting)
*   スタジオ設定: "Three-point softbox setup"
*   ドラマチック: "Chiaroscuro lighting with high contrast"
*   自然光: "Golden hour backlighting creating long shadows"

### 2. カメラ・レンズ・フォーカス
*   **ハードウェア指定**: 
    *   "GoPro": 没入感のあるアクション、歪み。
    *   "Fujifilm": 本物らしい色彩感。
    *   "Disposable camera": 懐かしいフラッシュ。
*   **レンズ・被写界深度**:
    *   "f/1.8": 浅い被写界深度（背景ボケ）。
    *   "Wide-angle lens": 壮大なスケール。
    *   "Macro lens": 精緻なディテール。

### 3. 色彩とフィルムストック
*   ノスタルジック: "1980s color film, slightly grainy"
*   モダン・ムーディ: "Cinematic color grading with muted teal tones"

### 4. 素材と質感 (Materiality and Texture)
*   物理的な特性（例：「ネイビーブルーのツイード」、「彫刻が施されたエルフのプレートアーマー」など）を具体的に記述します。

## テキスト描画のルール (Text Rendering)
*   **引用符**: 描画したい文字は必ず引用符で囲む (e.g., "URBAN EXPLORER")。
*   **フォント指定**: 書体や特徴を指定する (e.g., "bold, white, sans-serif font")。
*   **翻訳・ローカライズ**: プロンプト内でターゲット言語を指定可能（10ヶ国語以上対応）。

## 運用のヒント
*   **肯定的なフレーミング**: 「車がない」ではなく「空っぽの通り」と記述する。
*   **強い動詞**: プロンプトの冒頭には、モデルに行わせたい主要な操作（Generate, Edit, Transform等）を示す強い動詞を使用する。
*   **日本語併記**: ユーザーへの提示時は、英語のプロンプトの後に必ず日本語の解説と翻訳を添えること。
