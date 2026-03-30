const axios = require('axios');
require('dotenv').config();

// Google Maps Platform API キーを .env から読み込み
const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

/**
 * Geocoding API を使用して住所から座標を取得する関数
 * @param {string} address - 住所（例: "東京都世田谷区"）
 */
async function getGeocode(address) {
    const url = 'https://maps.googleapis.com/maps/api/geocode/json';

    const params = {
        address: address,
        key: API_KEY,
        language: 'ja'
    };

    try {
        const response = await axios.get(url, { params });
        console.log(`--- Geocoding 結果: ${address} ---`);
        if (response.data.status === 'OK') {
            const result = response.data.results[0];
            const location = result.geometry.location;
            console.log(`緯度: ${location.lat}`);
            console.log(`経度: ${location.lng}`);
            console.log(`正規化された住所: ${result.formatted_address}`);
            console.log('----------------');
        } else {
            console.log(`エラー: ${response.data.status}`);
        }
    } catch (error) {
        console.error('API エラー:', error.message);
    }
}

// 実行サンプル
const address = process.argv[2] || '富士山';
getGeocode(address);
