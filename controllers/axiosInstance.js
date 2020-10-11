const axios = require("axios");

const axiosInstance = axios.create({
    baseURL: "https://developers.zomato.com/api/v2.1",
    timeout: 3000,
    crossdomain: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'user-key' : 'd59feda09d10d77f26582f08bfcb519d'
    }
});

module.exports = axiosInstance;