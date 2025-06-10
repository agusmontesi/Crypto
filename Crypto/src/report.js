const express = require("express");
const axios = require("axios");
const CoinGecko = require('coingecko-api');

const router = express.Router();
const CoinGeckoClient = new CoinGecko();

const NEWS_API = "https://newsapi.org/v2/everything";

router.get('/', async (req, res) => {
  try {
    const { topic = 'bitcoin' } = req.query;

    // market data from CoinGecko
    let market = await CoinGeckoClient.coins.fetch(topic);

    // news data using NewsAPI
    const apiKey = process.env.NEWS_API_KEY;
    let news = { articles: [] };
    if (apiKey) {
      const newsResp = await axios.get(NEWS_API, {
        params: {
          q: topic,
          apiKey,
          sortBy: 'publishedAt',
          language: 'en'
        }
      });
      news = newsResp.data;
    }

    const summary = buildSummary(market.data, news.articles);

    res.json({ topic, summary, market: market.data, news: news.articles });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to generate report' });
  }
});

function buildSummary(market, articles) {
  if (!market || !market.name) return 'No market data available';
  let text = `${market.name} current price: $${market.market_data.current_price.usd}`;
  if (articles && articles.length) {
    text += `. Latest news: ${articles[0].title}`;
  }
  return text;
}

module.exports = router;
