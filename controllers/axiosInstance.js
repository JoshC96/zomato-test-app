const axios = require("axios");

const axiosInstance = axios.create({
    baseURL: "https://developers.zomato.com/api/v2.1",
    timeout: 3000,
    crossdomain: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'user-key' : process.env.ZOMATO_API_KEY
    }
});

module.exports = axiosInstance;