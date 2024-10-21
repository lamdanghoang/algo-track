import 'dotenv/config';

export const API_KEY = process.env.NEXT_PUBLIC_NODIT_API_KEY || '';

export const MAINNET = process.env.NEXT_PUBLIC_MAINNET_NETWORK;

export const TESTNET = process.env.NEXT_PUBLIC_TESTNET_NETWORK;

export const tokenAptLists = [
    {
        label: "APT",
        value: "0x1::aptos_coin::AptosCoin",
        supply: 1104566513.1
    },
    {
        label: "USDC (LayerZero)",
        value: "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC",
        supply: 98728793.5

    },
    {
        label: "USDT",
        value: "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDT",
        supply: 55742556.7

    },
    {
        label: "WETH (LayerZero)",
        value: "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::WETH",
        supply: 4142.8

    },
    {
        label: "USDC (Wormhole)",
        value: "0x5e156f1207d0ebfa19a9eeff00d62a282278fb8719f4fab3a586a0a2c0fffbea::coin::T",
        supply: 11079574.6
    },
    {
        label: "WETH (Wormhole)",
        value: "0xcc8a89c8dce9693d354449f1f73e60e14e347417854f029db5bc8e7454008abb::coin::T",
        supply: 1047.1
    },
    {
        label: "USDC (Celer)",
        value: "0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::UsdcCoin",
        supply: 455143.1
    },
    {
        label: "SOL (Wormhole)",
        value: "0xdd89c0e695df0692205912fb69fc290418bed0dbe6e4573d744a6d5e6bab6c13::coin::T",
        supply: 47092.6
    },
    {
        label: "MOJO",
        value: "0x881ac202b1f1e6ad4efcff7a1d0579411533f2502417a19211cfc49751ddb5f4::coin::MOJO",
        supply: 1000000000.0
    },
    {
        label: "USDT (Celer)",
        value: "0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::UsdtCoin",
        supply: 145474.4
    },
    {
        label: "BNB",
        value: "0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::BnbCoin",
        supply: 91.6
    },
    {
        label: "WBTC",
        value: "0xae478ff7d83ed072dbc5e264250e67ef58f57c99d89b447efd8a0a2e8b2be76e::coin::T",
        supply: 36
    },
    {
        label: "CAKE",
        value: "0x159df6b7689437016108a019fd5bef736bac692b6d4a1f10c941f6fbb9a74ca6::oft::CakeOFT",
        supply: 7214087.3
    },
]
