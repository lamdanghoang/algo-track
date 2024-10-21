"use client"
import { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import GlobalContext from "@/context/store";
import { Loader2 } from 'lucide-react';

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const { loadingFullScreen } = useContext(GlobalContext);
    return (
        <main className="flex flex-col min-h-screen">
            {loadingFullScreen && (
                <div className="z-10 absolute inset-0 bg-gray-400 bg-opacity-90 flex items-center justify-center rounded-lg">
                    <Loader2 className="h-8 w-8 animate-spin text-white" />
                </div>
            )}
            <Header />
            {children}
            <Footer />
        </main>
    );
}

export default Layout;