export interface GovernanceInfo {
    proposal_id: string;
    num_votes: number;
    should_pass: boolean;
    staking_pool_address: string;
    transaction_timestamp: string;
    transaction_version: number;
    voter_address: string;
}

export interface TokenSentimentInfo {
    name: string;
    price: number;
    change_24h: number;
    transaction_timestamp: number;
    sentiment: string;
    description: string;
}

export interface TokenIndicatorInfo{
    name: string;
    symbol: string;
    price: number;
    volume_24h: number;
    rsi: number;
    moving_average_50d: number;
    moving_average_200d: number;
    signal: string;
    description: string;
}