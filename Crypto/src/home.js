const express = require("express");
const app = express();

//1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

app.get("/", async (req, res) => {
    let apiCoins = await CoinGeckoClient.coins.markets();
        let Coins = apiCoins.data.map(element => ({
        id: element.id,
        name: element.name,
        price: element.current_price,
        image: element.image,
        price_change_24h: element.price_change_24h
    }));
    res.send(Coins)
})

module.exports = app;