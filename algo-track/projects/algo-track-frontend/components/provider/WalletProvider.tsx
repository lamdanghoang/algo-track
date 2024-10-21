"use client";
import React from "react";
import { PropsWithChildren } from "react";
import { Network } from "@aptos-labs/ts-sdk";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { PontemWallet } from "@pontem/wallet-adapter-plugin";
import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";

const WalletProvider = ({ children }: PropsWithChildren) => {
    const wallets = [
        new PetraWallet(),
        new PontemWallet(),
        new MartianWallet(),
    ];

    return (
        <React.StrictMode>
            <AptosWalletAdapterProvider
                plugins={wallets}
                autoConnect={true}
                dappConfig={{ network: Network.MAINNET }}
                onError={(error) => {
                    console.log("error", error);
                }}
            >
                {children}
            </AptosWalletAdapterProvider>
        </React.StrictMode>
    );
};

export default WalletProvider;