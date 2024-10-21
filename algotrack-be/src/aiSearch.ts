import { createCompletion, loadModel } from 'gpt4all';

export async function getAIInsights(prompt: string) {
    // const chatGPT = new ChatGPTAPI({ apiKey: '' });

    const model = await loadModel('mistral-7b-openorca.gguf2.Q4_0.gguf', {
        verbose: true,
        device: 'gpu',
        modelConfigFile: "./models3.json"
    });   

    const response = await createCompletion(model, prompt, { verbose: true })

    return response;
}

export async function getTokenSentiment() {
    // const chatGPT = new ChatGPTAPI({ apiKey: '' });

    // const model = await loadModel('mistral-7b-openorca.gguf2.Q4_0.gguf', {
    //     verbose: true,
    //     device: 'gpu',
    //     modelConfigFile: "./models3.json"
    // });   

    // const prompt = "{\"tokens\": [{\"coin_type\": \"0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::WETH\",\"name\": \"Wrapped Ether\",\"price\": 2500,\"change\": 2.85,\"transaction_timestamp\": \"2024-09-30T09:16:01\",\"transaction_version_created\": 1740927519},{\"coin_type\": \"0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC\",\"name\": \"USD Coin\",\"price\": 1,\"change\": 0.05,\"transaction_timestamp\": \"2024-09-30T09:13:22\",\"transaction_version_created\": 1740922012},{\"coin_type\": \"0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDD\",\"name\": \"Decentralized USD\",\"price\": 1,\"change\": 0.05,\"transaction_timestamp\": \"2024-09-21T06:54:28\",\"transaction_version_created\": 1713889549},{\"coin_type\": \"0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::WBTC\",\"name\": \"Wrapped BTC\",\"price\": 64000,\"change\": 1.05,\"transaction_timestamp\": \"2024-09-30T01:55:06\",\"transaction_version_created\": 1740033631}],\"analysis_type\": \"sentiment\",\"criteria\": [\"price_change\",\"transaction_frequency\",\"price_stability\"]}"

    // const response = await createCompletion(model, prompt, { verbose: true })
    const token_sentiment = {
        "tokens": [
            {
              "name": "Fluffy Inu (FLUFFY)",
              "symbol": "FLUFFY",
              "price": 0.00001234,
              "change_24h": 35.4,
              "sentiment": "Bullish",
              "description": "Fluffy Inu has surged by 35.4% in the past 24 hours, attracting a large number of speculative buyers, making it one of the hottest meme coins on Aptos DEX."
            },
            {
              "name": "Aptos Doge (APDOGE)",
              "symbol": "APDOGE",
              "price": 0.0025,
              "change_24h": -12.6,
              "sentiment": "Bearish",
              "description": "Aptos Doge is currently facing a correction, down 12.6% in the past 24 hours. Despite the downturn, it remains popular within the meme coin community on Aptos DEX."
            },
            {
              "name": "Super Shiba (SPSHIBA)",
              "symbol": "SPSHIBA",
              "price": 0.00089,
              "change_24h": 4.7,
              "sentiment": "Neutral",
              "description": "Super Shiba has had a mild increase of 4.7% in price, indicating steady interest among traders on Aptos DEX with moderate activity in the past day."
            },
            {
              "name": "Aptos Moon (APMOON)",
              "symbol": "APMOON",
              "price": 0.015,
              "change_24h": 22.1,
              "sentiment": "Bullish",
              "description": "Aptos Moon has risen by 22.1% in price over the last 24 hours, fueled by a wave of positive sentiment as traders speculate on its moonshot potential."
            }
        ],
        "summary": {
          "overall_sentiment": "Mixed",
          "insights": "The sentiment across the tokens is mixed, with WETH showing bullish signs while stablecoins like USDC and USDD remain largely unaffected by market shifts. WBTC is performing steadily, with no signs of major volatility in the short term."
        }
      }
      
    return token_sentiment.tokens;
}

export async function getTokenIndicator(){
    const indicator = {
        "token_indicators": [
          {
            "name": "Fluffy Inu",
            "symbol": "FLUFFY",
            "price": 0.00001234,
            "volume_24h": 1500000,
            "rsi": 75,
            "moving_average_50d": 0.00001150,
            "moving_average_200d": 0.00000980,
            "signal": "Buy",
            "description": "Fluffy Inu has strong upward momentum with an RSI above 70 and is trading above both 50-day and 200-day moving averages, signaling a potential buying opportunity."
          },
          {
            "name": "Aptos Doge",
            "symbol": "APDOGE",
            "price": 0.0025,
            "volume_24h": 350000,
            "rsi": 40,
            "moving_average_50d": 0.0030,
            "moving_average_200d": 0.0028,
            "signal": "Sell",
            "description": "Aptos Doge is showing a downward trend, with its price below the 50-day moving average and a low RSI, indicating a potential selling signal."
          },
          {
            "name": "Super Shiba",
            "symbol": "SPSHIBA",
            "price": 0.00089,
            "volume_24h": 500000,
            "rsi": 55,
            "moving_average_50d": 0.00090,
            "moving_average_200d": 0.00088,
            "signal": "Hold",
            "description": "Super Shiba is trading near its 50-day moving average with a neutral RSI, suggesting a hold strategy for now."
          },
          {
            "name": "Aptos Moon",
            "symbol": "APMOON",
            "price": 0.015,
            "volume_24h": 1200000,
            "rsi": 82,
            "moving_average_50d": 0.014,
            "moving_average_200d": 0.013,
            "signal": "Strong Buy",
            "description": "Aptos Moon has a very high RSI and is well above both moving averages, signaling strong buying momentum and potential for further growth."
          }
        ]
    }

    return indicator.token_indicators
}