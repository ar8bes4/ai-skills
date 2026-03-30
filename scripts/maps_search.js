const axios = require('axios');
require('dotenv').config();

// Google Maps Platform API キーを .env から読み込み
const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

/**
 * Places API (New) を使用して場所を検索する関数
 * @param {string} query - 検索クエリ（例: "東京駅 レストラン"）
 */
async function searchPlaces(query) {
    const url = 'https://places.googleapis.com/v1/places:searchText';

    const headers = {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': API_KEY,
        // フィールドマスク: 取得したい情報を指定（コスト管理とペイロード削減のため）
        'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.location,places.rating'
    };

    const data = {
        textQuery: query,
        languageCode: 'ja'
    };

    try {
        const response = await axios.post(url, data, { headers });
        console.log('--- 検索結果 ---');
        if (response.data.places && response.data.places.length > 0) {
            response.data.places.forEach((place, index) => {
                console.log(`${index + 1}. ${place.displayName.text}`);
                console.log(`   住所: ${place.formattedAddress}`);
                console.log(`   評価: ${place.rating || 'N/A'}`);
                console.log(`   座標: ${place.location.latitude}, ${place.location.longitude}`);
                console.log('----------------');
            });
        } else {
            console.log('該当する場所が見つかりませんでした。');
        }
    } catch (error) {
        console.error('API エラー:', error.response ? error.response.data : error.message);
    }
}

// 実行サンプル
const query = process.argv[2] || '東京スカイツリー';
searchPlaces(query);
