export interface ISymbolTicker {
  priceChange: number;
  priceChangePercent: number;
  close: string;
  high: string;
  low: string;
  quoteVolume: string;
}
/* RETORNO DA STREAM @TICKER 
{
  "e": "24hrTicker",  // Event type
  "E": 1672515782136, // Event time
  "s": "BNBBTC",      // Symbol
  "p": "0.0015",      // Price change
  "P": "250.00",      // Price change percent
  "w": "0.0018",      // Weighted average price
  "x": "0.0009",      // First trade(F)-1 price (first trade before the 24hr rolling window)
  "c": "0.0025",      // Last price
  "Q": "10",          // Last quantity
  "b": "0.0024",      // Best bid price
  "B": "10",          // Best bid quantity
  "a": "0.0026",      // Best ask price
  "A": "100",         // Best ask quantity
  "o": "0.0010",      // Open price
  "h": "0.0025",      // High price
  "l": "0.0010",      // Low price
  "v": "10000",       // Total traded base asset volume
  "q": "18",          // Total traded quote asset volume
  "O": 0,             // Statistics open time
  "C": 86400000,      // Statistics close time
  "F": 0,             // First trade ID
  "L": 18150,         // Last trade Id
  "n": 18151          // Total number of trades
} */

export interface ICoinByIdResponse {
  id: string;
  symbol: string;
  name: string;
  image: IImage;
}
interface IImage {
  thumb: string;
  small: string;
  large: string;
}

export type TSymbolTicker = ICoinByIdResponse & ISymbolTicker;
