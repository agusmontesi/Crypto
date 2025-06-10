# Crypto Trading Assistant

This repository contains a small prototype for a trading assistant. It has a
Node.js backend (`Crypto/`) and a React front‑end (`CryptoFront/`).

## New `/report` endpoint

The backend now exposes a `/report` route that generates a brief market report
for a given topic. It fetches price information from CoinGecko and recent news
from the NewsAPI service. A short summary is returned along with the raw data.

Example request:

```
GET /report?topic=bitcoin
```

Environment variables:

- `NEWS_API_KEY` – key for https://newsapi.org

Run the server from the `Crypto` directory:

```
npm start
```

This is only a minimal example and can be expanded with real analytics or AI
based summaries.
