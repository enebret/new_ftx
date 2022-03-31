/*jshint esversion: 8 */
const axios = require ('axios');
const coins = ['bitcoin', 'ethereum', 'ripple'];
var btc = 'bitcoin';

const get_coin_img = async () => {
    let ep = await axios.get(`https://api.coingecko.com/api/v3/coins/${btc}?localization=false&tickers=true&market_data=false&community_data=false&developer_data=true`);
    console.log((ep.data.image));
};

get_coin_img();