// File: perps-trading-bot.ts

import axios from 'axios';
import dotenv from 'dotenv';
import { createCompletion, loadModel } from 'gpt4all';
import { stringify } from 'querystring';

dotenv.config();

const API_BASE_URL = 'https://perps-tradeapi.kanalabs.io';
const API_KEY = process.env.API_KEY;
const MODEL_PATH = process.env.MODEL_PATH || './models/gpt4all-model.bin';

if (!API_KEY) {
  console.error('API_KEY is not set in the environment variables');
  process.exit(1);
}

interface MarketInfo {
  symbol: string;
  price: number;
}

interface OrderParams {
  symbol: string;
  side: 'BUY' | 'SELL';
  orderType: 'MARKET' | 'LIMIT';
  quantity: number;
  price?: number;
}

class PerpsTradingBot {
  private axiosInstance;
  private model: any;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async initialize() {
    console.log('Loading AI model...');
    this.model = await loadModel(MODEL_PATH);
    console.log('AI model loaded successfully');
  }

  async getMarketInfo(symbol: string): Promise<MarketInfo> {
    try {
      const response = await this.axiosInstance.get(`/v1/market/${symbol}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching market info:', error);
      throw error;
    }
  }

  async placeOrder(params: OrderParams): Promise<any> {
    try {
      const response = await this.axiosInstance.post('/v1/order', params);
      return response.data;
    } catch (error) {
      console.error('Error placing order:', error);
      throw error;
    }
  }

  async getOpenPositions(): Promise<any> {
    try {
      const response = await this.axiosInstance.get('/v1/positions');
      return response.data;
    } catch (error) {
      console.error('Error fetching open positions:', error);
      throw error;
    }
  }

  async getAIInsight(marketInfo: MarketInfo, positions: any[]): Promise<string> {
    const prompt = `
      Given the following market information and current positions, provide a brief trading insight and suggestion:
      
      Market: ${marketInfo.symbol}
      Current Price: ${marketInfo.price}
      Open Positions: ${JSON.stringify(positions)}
      
      Trading Insight:
    `;

    const completion = await createCompletion(this.model, prompt);
    return stringify.apply(completion);
  }

  async runAIEnhancedStrategy() {
    const symbol = 'BTCUSD';
    const quantity = 0.01; // Adjust based on your risk tolerance

    try {
      const marketInfo = await this.getMarketInfo(symbol);
      console.log(`Current ${symbol} price: ${marketInfo.price}`);

      const positions = await this.getOpenPositions();
      const existingPosition = positions.find((p: any) => p.symbol === symbol);

      if (existingPosition) {
        console.log(`Existing position for ${symbol}: ${existingPosition.size}`);
      } else {
        console.log('No existing position');
      }

      const aiInsight = await this.getAIInsight(marketInfo, positions);
      console.log('AI Trading Insight:', aiInsight);

      // Implement your AI-enhanced trading logic here
      // For demonstration, we'll just place a buy order if there's no existing position
      if (!existingPosition) {
        console.log('Placing a new order based on AI insight');
        const orderParams: OrderParams = {
          symbol,
          side: 'BUY',
          orderType: 'MARKET',
          quantity,
        };

        const orderResult = await this.placeOrder(orderParams);
        console.log('Order placed:', orderResult);
      }
    } catch (error) {
      console.error('Error running AI-enhanced strategy:', error);
    }
  }
}

// Usage
async function test() {
  const bot = new PerpsTradingBot();
  await bot.initialize();
  await bot.runAIEnhancedStrategy();
}

test();