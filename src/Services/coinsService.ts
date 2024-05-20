import axios from 'axios';

import { coinMapping } from '../Shared/CoinsMapping';
import { ICoinByIdResponse } from '../Shared/StreamsInterfaces/SymbolTickerInterface';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/';
const API_KEY = 'CG-DERC3Bae6Lz2d8qLRHgiEEf2';

export async function fetchCoinData(symbol: keyof typeof coinMapping) {
  const coinId = coinMapping[symbol];
  if (!coinId) {
    throw new Error(`Symbol ${symbol} not found in coinMapping`);
  }

  const url = `${COINGECKO_API_URL}coins/${coinId}`;

  try {
    const response = await axios.get<ICoinByIdResponse>(url, {
      headers: {
        'x-cg-pro-api-key': API_KEY,
      },
    });

    const { data } = response;
    const { id, symbol: coinSymbol, name, image } = data;

    if (!id || !coinSymbol || !name || !image) {
      throw new Error(
        `Missing required data in coin data for symbol ${symbol}`
      );
    }

    return { id, symbol: coinSymbol, name, image };
  } catch (error) {
    console.error('[fetchCoinData ERROR]', error);
    throw error;
  }
}
