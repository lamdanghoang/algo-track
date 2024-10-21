"use client"
import { createContext, Dispatch, SetStateAction, useState } from "react"

interface ContextProps {
    loadingFullScreen: boolean;
    setLoadingFullScreen: Dispatch<SetStateAction<boolean>>,
    chain: string;
    setChain: Dispatch<SetStateAction<string>>,
}

const GlobalContext = createContext<ContextProps>({
    loadingFullScreen: false,
    setLoadingFullScreen: () => { },
    chain: "APTOS",
    setChain: () => { },
});

export default GlobalContext;

export const GlobalContextProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const [loadingFullScreen, setLoadingFullScreen] = useState(false);
    const [chain, setChain] = useState("ALGORAND");

    return <GlobalContext.Provider value={{ loadingFullScreen, setLoadingFullScreen, chain, setChain }} >
        {children}
    </GlobalContext.Provider>
}