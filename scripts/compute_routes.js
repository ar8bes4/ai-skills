const axios = require('axios');
require('dotenv').config();

// Google Maps Platform API キーを .env から読み込み
const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

/**
 * Routes API を使用して、2 地点間のルート、距離、所用時間を計算する関数
 * @param {string} origin - 出発地（例: "東京駅"）
 * @param {string} destination - 目的地（例: "品川駅"）
 */
async function computeRoutes(origin, destination) {
    const url = 'https://routes.googleapis.com/directions/v2:computeRoutes';

    const headers = {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': API_KEY,
        // フィールドマスク: 必要な情報のみに絞る
        'X-Goog-FieldMask': 'routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline'
    };

    const data = {
        origin: {
            address: origin
        },
        destination: {
            address: destination
        },
        travelMode: 'DRIVE', // 他に 'BICYCLE', 'WALKING', 'TRANSIT' などを指定可能
        routingPreference: 'TRAFFIC_AWARE',
        languageCode: 'ja'
    };

    try {
        const response = await axios.post(url, data, { headers });
        console.log(`--- ルート計算結果: ${origin} から ${destination} ---`);

        if (response.data.routes && response.data.routes.length > 0) {
            const route = response.data.routes[0];
            const distanceKm = (route.distanceMeters / 1000).toFixed(2);
            // duration は ISO 8601 形式の文字列（例: "540s"）が返ることが多いため、パースが必要な場合あり
            console.log(`距離: ${distanceKm} km`);
            console.log(`所要時間: ${route.duration}`); // そのまま出力
            console.log(`ポリライン (エンコード): ${route.polyline.encodedPolyline.substring(0, 30)}...`);
            console.log('----------------');
        } else {
            console.log('ルートが見つかりませんでした。');
        }
    } catch (error) {
        if (error.response) {
            console.error('API エラー (Status):', error.response.status);
            console.error('API エラー (Data):', JSON.stringify(error.response.data, null, 2));
        } else {
            console.error('API エラー (Message):', error.message);
        }
    }
}

// 実行サンプル
const origin = process.argv[2] || '東京駅';
const destination = process.argv[3] || '品川駅';
computeRoutes(origin, destination);
