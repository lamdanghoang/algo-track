"use client"

import { useContext, useEffect, useState } from 'react'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/Select"
import { Menu, Search, Wallet } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/Sheet"
import { WalletSelector } from "@/components/provider/WalletSelector"
import GlobalContext from '@/context/store'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import logo from "@/assets/logo.png"
import PeraWallet from '../provider/PeraWalletConnect'

export default function Header() {
    const { setLoadingFullScreen, chain, setChain } = useContext(GlobalContext);
    const [input, setInput] = useState<string>();
    const router = useRouter();

    const changeHandler = (value: string) => {
        setInput(value);
        console.log(input);
    }

    const submitHandler = (e: any) => {
        e.preventDefault();
        console.log(input);
        setLoadingFullScreen(true);
        setTimeout(() => setLoadingFullScreen(false), 2000)
        setInput("");
        router.push('/kana');
    }

    useEffect(() => {
        if (chain) {
            console.log("Selected chain:", chain)
        }
    }, [chain])

    return (
        <header className="mb-1">
            <div className="container mx-auto px-5 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center text-white">
                    <Image src={logo} alt='trackit' height={40} />
                    <span className="font-bold text-2xl leading-10">TrackIt</span>
                </Link>
                {/* Mobile menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <nav className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="mobile-chain" className="text-sm font-medium">
                                        Select Chain
                                    </label>
                                    <Select value={chain} onValueChange={setChain}>
                                        <SelectTrigger id="mobile-chain">
                                            <SelectValue placeholder="Select chain" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="APTOS">APTOS</SelectItem>
                                            <SelectItem value="ALGORAND">ALGORAND</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="mobile-search" className="text-sm font-medium">
                                        Search Address
                                    </label>
                                    <form className="relative" onSubmit={e => submitHandler(e)}>
                                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input onChange={e => changeHandler(e.target.value)}
                                            id="search" placeholder="Search with TrackIt" className="pl-8"
                                            value={input}
                                        />
                                        <Input type="submit" value="Search" className='hidden' />
                                    </form>
                                </div>
                                {/* <Button className="w-full" onClick={clickHandler}>
                                    {!isClicked && (<><Wallet className="mr-2 h-4 w-4" /> Login</>)}
                                    {isClicked && (<span>{`${"0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa".slice(0, 5)}...${"0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa".slice(-5)}`}</span>)}
                                </Button> */}
                                {chain === "APTOS" && <WalletSelector />}
                                {chain === "ALGORAND" && <PeraWallet />}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center space-x-4">
                    <form className="relative" onSubmit={e => submitHandler(e)}>
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input value={input} onChange={e => changeHandler(e.target.value)} id="search" placeholder="Search with TrackIt" className="pl-8 w-[300px]" />
                        <Input type="submit" value="Search" className='hidden' />
                    </form>

                    <Select value={chain} onValueChange={setChain}>
                        <SelectTrigger className="w-[120px]">
                            <SelectValue placeholder="Select chain" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="APTOS">APTOS</SelectItem>
                            <SelectItem value="ALGORAND">ALGORAND</SelectItem>
                        </SelectContent>
                    </Select>

                    {/* <Button onClick={clickHandler}>
                        {!isClicked && (<><Wallet className="mr-2 h-4 w-4" /> Login </>)}
                        {isClicked && (<span>{`${"0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa".slice(0, 5)}...${"0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa".slice(-5)}`}</span>)}
                    </Button> */}
                    {chain === "APTOS" && <WalletSelector />}
                    {chain === "ALGORAND" && <PeraWallet />}
                </div>
            </div>
        </header>
    )
}