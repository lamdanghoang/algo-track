import { API_KEY } from "../constants/constants";
import { BalanceDataType, HolderDataType, NftDataType, ProposalVoteType, TableTransactionDataType } from "./getData";
import axios, { AxiosInstance } from 'axios';
import { createCompletion, loadModel } from 'gpt4all';

export interface Blockchain {
    fetchAssetBalance(address: string): Promise<any>;
    fetchNFTsBalance(address: string): Promise<any>;
    fetchTopHolder(asset_type: string, numberAccount: number, chain: string): Promise<any>;
    fetchTransactionByAccount(address: string): Promise<any>;
    fetchTransaction(address: string): Promise<any>;
    fetchCoinsCreatedByAccount(address: string): Promise<any>;
    fetchAccountResources(address: string): Promise<any>;
    fetchGovernanceVotes(): Promise<any>;
    getAIInsights(analysisResults: any): Promise<any>;
}


class AptosBlockChain implements Blockchain {
    private url: any;

    constructor(network: any) {
        this.url = {
            indexer: `https://aptos-${network}.nodit.io/${API_KEY}/v1/graphql`,
            urlGet: `https://aptos-${network}.nodit.io/v1`
        }

    }

    async getAIInsights(data: any): Promise<any> {
        // const chatGPT = new ChatGPTAPI({ apiKey: '' });

        const model = await loadModel('mistral-7b-openorca.gguf2.Q4_0.gguf', {
            verbose: true,
            device: 'gpu',
            modelConfigFile: "./models3.json"
        });

        const prompt = `
          can you analyze this data to find best proposal in Aptos ?
            1-proposal_id: ${data.proposal_id},
            2-num_votes: ${data.num_votes},
            3-should_pass: ${data.should_pass},
            4-staking_pool_address: ${data.staking_pool_address},
            5-transaction_timestamp: ${data.transaction_timestamp},
            6-transaction_version: ${data.transaction_version},
            7-voter_address: ${data.voter_address},
        `;

        const response = await createCompletion(model, prompt, { verbose: true })

        console.log("Ai resp: ", response)
        return response;
    }

    async fetchGovernanceVotes(): Promise<any> {
        const operationsDoc = `
            query MyQuery {
                proposal_votes(limit: 30, order_by: {transaction_version: desc}) {
                    num_votes
                    proposal_id
                    should_pass
                    staking_pool_address
                    transaction_timestamp
                    transaction_version
                    voter_address
                }
            }
        `;

        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                query: operationsDoc,
                operationName: "MyQuery",
            }),
        };

        try {
            const response = await fetch(this.url.indexer, options);
            console.log("URL: ", this.url.indexer)
            if (response.ok) {
                const result = await response.json();
                const proposalVotes: ProposalVoteType[] = result.data.proposal_votes;
                return proposalVotes;
            } else {
                return [];
            }
        } catch (error) {
            throw new Error('Cannot fetch proposal vote transaction data. Try again later.');
        }
    }

    async fetchAccountResources(account: string): Promise<any> {
        const link = `${this.url.urlGet}/accounts/${account}/resources`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'X-API-KEY': API_KEY,
            }
        };

        try {
            const response = await fetch(link, options);
            if (response.ok) {
                const result = await response.json();
                return result;
            } else {
                return [];
            }
        } catch (error) {
            throw new Error('Cannot fetch resources data. Try again later.');
        }
    }

    async fetchCoinsCreatedByAccount(address: string): Promise<any> {
        const operationsDoc = `
query MyQuery($address: String) {
  coin_infos(where: {creator_address: {_eq: $address}}) {
    coin_type
    coin_type_hash
    creator_address
    decimals
    name
    supply_aggregator_table_handle
    supply_aggregator_table_key
    symbol
    transaction_created_timestamp
    transaction_version_created
  }
}
`;

        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                query: operationsDoc,
                variables: { address },
                operationName: "MyQuery",
            }),
        };

        try {
            const response = await fetch(this.url.indexer, options);
            console.log("URL: ", this.url.indexer)
            if (response.ok) {
                const result = await response.json();
                const coinInfos: BalanceDataType[] = result.data.coin_infos;
                return coinInfos;
            } else {
                return [];
            }
        } catch (error) {
            throw new Error('Cannot fetch coin info data. Try again later.');
        }
    }

    async fetchAssetBalance(address: string): Promise<any> {
        const operationsDoc = `
query MyQuery($address: String) {
  current_fungible_asset_balances(
    where: {owner_address: {_eq: $address}}
  ) {
    owner_address
    amount
    storage_id
    is_frozen
    metadata {
      asset_type
      creator_address
      decimals
      icon_uri
      name
      project_uri
      symbol
      token_standard
      maximum_v2
      supply_v2
    }
  }
}
`;

        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                query: operationsDoc,
                variables: { address },
                operationName: "MyQuery",
            }),
        };

        try {
            const response = await fetch(this.url.indexer, options);
            if (response.ok) {
                const result = await response.json();
                const assetBalances: BalanceDataType[] = result.data.current_fungible_asset_balances;
                return assetBalances;
            } else {
                return [];
            }
        } catch (error) {
            throw new Error('Cannot fetch asset data. Try again later.');
        }
    }

    async fetchNFTsBalance(address: string): Promise<any> {
        const operationsDoc = `
query MyQuery($address: String) {
  current_token_ownerships_v2(
    limit: 5
    offset: 0
    where: {
      owner_address: {
        _eq: $address
      }
    }
  ) {
    amount
    is_fungible_v2
    is_soulbound_v2
    last_transaction_timestamp
    non_transferrable_by_owner
    last_transaction_version
    owner_address
    property_version_v1
    storage_id
    table_type_v1
    token_data_id
    token_properties_mutated_v1
    token_standard
    current_token_data {
      collection_id
      token_name
      current_collection {
        creator_address
      }
    }
  }
}
`;

        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                query: operationsDoc,
                variables: { address },
                operationName: "MyQuery",
            }),
        };

        try {
            const response = await fetch(this.url.indexer, options);

            if (response.ok) {
                const result = await response.json();
                const nftBalance: NftDataType[] = result.data.current_token_ownerships_v2;
                return nftBalance;
            } else {
                return [];
            }
        } catch (error) {
            throw new Error('Cannot fetch NFT asset data. Try again later.');
        }
    }

    async fetchTopHolder(asset_type: string, numberAccount: number, chain: string): Promise<any> {
        const operationsDoc = `
query MyQuery($asset_type: String, $numberAccount: Int) {
  current_fungible_asset_balances(
    limit: $numberAccount
    where: {metadata: {asset_type: {_eq: $asset_type}}, amount: {_gt: "0"}}
    order_by: {amount: desc}
  ) {
    amount
    owner_address
    asset_type
    is_frozen
    is_primary
    last_transaction_timestamp
    last_transaction_version
    storage_id
    token_standard
    metadata {
      icon_uri
      maximum_v2
      project_uri
      supply_aggregator_table_handle_v1
      supply_aggregator_table_key_v1
      supply_v2
      name
      symbol
      token_standard
      last_transaction_version
      last_transaction_timestamp
      decimals
      creator_address
      asset_type
    }
  }
}
`;

        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                query: operationsDoc,
                variables: { asset_type, numberAccount },
                operationName: "MyQuery",
            }),
        };

        try {
            const response = await fetch(this.url.indexer, options);
            if (response.ok) {
                const result = await response.json();
                const topHolder: HolderDataType[] = result.data.current_fungible_asset_balances;
                return topHolder;
            } else {
                return [];
            }
        } catch (error) {
            throw new Error('Cannot fetch top holder data. Try again later.');
        }
    }

    async fetchTransaction(address: string): Promise<any> {
        const operationsDoc = `
query MyQuery($address: String) {
    account_transactions(
        where: { account_address: { _eq: $address } }
      order_by: { transaction_version: desc }
    ) {
        transaction_version
        __typename
      user_transaction {
            entry_function_id_str
            sender
            timestamp
            __typename
        }
      fungible_asset_activities {
            amount
            asset_type
            entry_function_id_str
            event_index
            is_gas_fee
            owner_address
            type
            __typename
        }
    }
}
`;

        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                query: operationsDoc,
                variables: { address },
                operationName: "MyQuery",
            }),
        };

        try {
            const response = await fetch(this.url.indexer, options);
            if (response.ok) {
                const result = await response.json();
                const transactions = result.data.account_transactions;
                return transactions;
            } else {
                return [];
            }
        } catch (error) {
            throw new Error('Cannot fetch transaction data. Try again later.');
        }
    }

    async fetchTransactionByAccount(account: string): Promise<any> {
        const link = `${this.url.urlGet}/accounts/${account}/transactions`
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'X-API-KEY': API_KEY,
            }
        };

        try {
            const response = await fetch(link, options);
            if (response.ok) {
                const result: TableTransactionDataType[] = await response.json();
                return result;
            } else {
                return [];
            }
        } catch (error) {
            throw new Error('Cannot fetch transaction data. Try again later.');
        }
    }
}

class OtherBlockchain implements Blockchain {
    private fetchUrl: string;
    private api: AxiosInstance;
    constructor(url: string) {
        this.fetchUrl = url;
        this.api = axios.create({
            baseURL: 'http://dgt-dev.vercel.app/v1',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            // You can add more default configurations here
        });
        this.api.interceptors.response.use(
            response => response,
            error => {
                console.error('API request failed:', error);
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.error('Error data:', error.response.data);
                    console.error('Error status:', error.response.status);
                    console.error('Error headers:', error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error('No response received:', error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.error('Error setting up request:', error.message);
                }
                return Promise.reject(error);
            }
        );
    }

    fetchGovernanceVotes(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    getAIInsights(analysisResults: any): Promise<any> {
        throw new Error("Method not implemented.");
    }

    fetchAccountResources(address: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    fetchCoinsCreatedByAccount(account: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

    private async fetchData(endpoint: string, params: Record<string, any> = {}): Promise<any> {
        try {
            const response = await this.api.get(endpoint, { params });
            return response.data;
        } catch (error) {
            console.error(`Error fetching data from ${endpoint}:`, error);
            throw new Error(`Cannot fetch data from ${endpoint}.`);
        }
    }

    async fetchAssetBalance(address: string): Promise<BalanceDataType[]> {
        const result = await this.fetchData('/user', { wallet: address });
        return result.assetHoldings;
    }

    async fetchNFTsBalance(address: string): Promise<NftDataType[]> {
        const result = await this.fetchData('/user', { wallet: address });
        return result.nftHoldings;
    }

    async fetchTopHolder(asset_type: string, numberAccount: number, chain: string): Promise<HolderDataType[]> {
        const result = await this.fetchData('/top_holders', { chain: chain });
        return result.topHolders;
    }

    async fetchTransaction(account: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async fetchTransactionByAccount(account: string): Promise<TableTransactionDataType[]> {
        const result = await this.fetchData('/user', { wallet: account });
        return result.transactions;
    }


    // async fetchAssetBalance(address: string): Promise<any> {
    //     try {
    //         const response = await fetch(this.fetchUrl, {
    //             mode: 'no-cors'
    //         });
    //         console.log(response)
    //         if (response.ok) {
    //             const result = await response.json();
    //             const assetHoldings = result.assetHoldings;
    //             return assetHoldings;
    //         } else {
    //             throw new Error("Cannot fetch data. Try again.");
    //         }
    //     } catch (error) {
    //         throw new Error("Cannot fetch data. Try again.");
    //     }
    // }
    // async fetchNFTsBalance(address: string): Promise<any> {
    //     try {
    //         const response = await fetch(this.fetchUrl, {
    //             mode: 'no-cors'
    //         });
    //         if (response.ok) {
    //             const result = await response.json();
    //             const nftHoldings = result.nftHoldings;
    //             return nftHoldings;
    //         } else {
    //             throw new Error("Cannot fetch data. Try again.");
    //         }
    //     } catch (error) {
    //         throw new Error("Cannot fetch data. Try again.");
    //     }
    // }
    // async fetchTopHolder(asset_type: string, numberAccount: number): Promise<any> {
    //     try {
    //         const response = await fetch(this.fetchUrl, {
    //             mode: 'no-cors'
    //         });
    //         if (response.ok) {
    //             const result = await response.json();
    //             const topHolders = result.topHolders;
    //             return topHolders;
    //         } else {
    //             throw new Error("Cannot fetch data. Try again.");
    //         }
    //     } catch (error) {
    //         throw new Error("Cannot fetch data. Try again.");
    //     }
    // }
    // async fetchTransactionByAccount(account: string, numberTransaction: number): Promise<any> {
    //     try {
    //         const response = await fetch(this.fetchUrl, {
    //             mode: 'no-cors'
    //         });

    //         const result = await response.json();
    //         const transactions = result.transactions;
    //         return transactions;

    //     } catch (error) {
    //         throw new Error("Cannot fetch data. Try again.");
    //     }
    // }
}

export function getBlockchain(chainName: string): Blockchain {
    if (chainName === 'apt') {
        return new AptosBlockChain('mainnet');
    } else if (chainName === 'sui' || chainName === 'icp') {
        return new OtherBlockchain('http://dgt-dev.vercel.app/v1');
    } else {
        throw new Error('Invalid blockchain');
    }
}