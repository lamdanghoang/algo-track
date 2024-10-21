import { PeraWalletConnect } from "@perawallet/connect";
import { useEffect, useState, useCallback } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/DropdownMenu";
import { Button } from "../ui/Button";
import {
    Copy,
    LogOut,
    ArrowRightFromLine
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/useToast";

const peraWallet = new PeraWalletConnect();

export default function PeraWallet() {
    const [accountAddress, setAccountAddress] = useState<string | null>(null);
    const isConnectedToPeraWallet = !!accountAddress;
    const router = useRouter();
    const { toast } = useToast();

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

    const copyAddress = useCallback(async () => {
        if (!accountAddress) return;
        try {
            await navigator.clipboard.writeText(accountAddress);
            toast({
                title: "Success",
                description: "Copied wallet address to clipboard.",
            });
        } catch {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Failed to copy wallet address.",
            });
        }
    }, [accountAddress, toast]);

    const routerHandler = () => {
        router.push('/kana');
    }

    return isConnectedToPeraWallet ? (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="bg-lido hover:bg-lido/80 font-bold">
                    {`${accountAddress.slice(0, 6)}...${accountAddress.slice(-5)}`}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onSelect={routerHandler} className="gap-2">
                    <ArrowRightFromLine className="h-4 w-4" /> Kanabot
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={copyAddress} className="gap-2">
                    <Copy className="h-4 w-4" /> Copy address
                </DropdownMenuItem>
                {/* {wallet && isAptosConnectWallet(wallet) && (
                    <DropdownMenuItem asChild>
                        <a
                            href={APTOS_CONNECT_ACCOUNT_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-2"
                        >
                            <User className="h-4 w-4" /> Account
                        </a>
                    </DropdownMenuItem>
                )} */}
                <DropdownMenuItem onSelect={handleDisconnectWalletClick} className="gap-2">
                    <LogOut className="h-4 w-4" /> Disconnect
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ) : (
        <Button onClick={handleConnectWalletClick} className="bg-lido hover:bg-lido/80 font-bold">Connect a Wallet</Button>
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
