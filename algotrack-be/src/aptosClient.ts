import { API_KEY } from "../constants/constants";
import { Aptos, AptosConfig } from "@aptos-labs/ts-sdk";

let aptos: Aptos;

export function aptosClient(network: any) {
    if (!aptos) {
        // Set fullnode endpoint and indexer endpoint
        aptos = new Aptos(
            new AptosConfig({
                network,
                fullnode: `https://aptos-${network}.nodit.io/${API_KEY}/v1`,
                indexer: `https://aptos-${network}.nodit.io/${API_KEY}/v1/graphql`
            }),
        );
    }
    return aptos;
}