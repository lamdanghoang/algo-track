import { PeraWalletConnect } from "@perawallet/connect";
import { useEffect, useState } from "react";

const peraWallet = new PeraWalletConnect();

export default function PeraWallet() {
    const [accountAddress, setAccountAddress] = useState<string | null>(null);
    const isConnectedToPeraWallet = !!accountAddress;

    useEffect(() => {
        // Reconnect to the session when the component is mounted
        peraWallet
            .reconnectSession()
            .then((accounts) => {
                peraWallet.connector?.on("disconnect", handleDisconnectWalletClick);

                if (accounts.length) {
                    setAccountAddress(accounts[0]);
                }
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <button
            onClick={
                isConnectedToPeraWallet
                    ? handleDisconnectWalletClick
                    : handleConnectWalletClick
            }
            className="px-4 py-2 bg-lido hover:bg-lido/80 font-bold text-gray-50 text-sm leading-6 rounded-md"
        >
            {isConnectedToPeraWallet ? `${accountAddress.slice(0, 6)}...${accountAddress.slice(-5)}` : "Connect a Wallet"}
        </button>
    );

    function handleConnectWalletClick() {
        peraWallet
            .connect()
            .then((newAccounts) => {
                peraWallet.connector?.on("disconnect", handleDisconnectWalletClick);

                setAccountAddress(newAccounts[0]);
            })
            .catch((error) => {
                if (error?.data?.type !== "CONNECT_MODAL_CLOSED") {
                    console.log(error);
                }
            });
    }

    function handleDisconnectWalletClick() {
        peraWallet.disconnect();

        setAccountAddress(null);
    }
}
