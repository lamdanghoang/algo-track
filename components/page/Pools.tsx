"use client";
import { Loader2, Search } from 'lucide-react'
import BarChart from '../BarChart';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select';
import { useState } from 'react';
import CustomChart from '../LineChart';
import KanabotDashboard from '../KanaUI';
import { Card, CardContent } from '../ui/Card';

import { Deserializer, SimpleTransaction, U64 } from '@aptos-labs/ts-sdk';
import {
    SignMessageResponse,
    useWallet
} from '@aptos-labs/wallet-adapter-react';

const chartData = [
    { name: 'ETH-USDC', TVL: 100000, Volume: 80000 },
    { name: 'BTC-USDT', TVL: 120000, Volume: 100000 },
    { name: 'SOL-USDC', TVL: 80000, Volume: 60000 },
    { name: 'AVAX-USDT', TVL: 60000, Volume: 40000 },
    { name: 'MATIC-USDC', TVL: 70000, Volume: 50000 },
]

const poolsData = [
    { pool: 'BTC-USDT', TVL: '$2,000,000', volume: '$750,000', APY: '10.20%' },
    { pool: 'ETH-USDC', TVL: '$1,500,000', volume: '$500,000', APY: '8.50%' },
    { pool: 'SOL-USDC', TVL: '$800,000', volume: '$300,000', APY: '7.80%' },
    { pool: 'AVAX-USDT', TVL: '$600,000', volume: '$200,000', APY: '6.90%' },
    { pool: 'MATIC-USDC', TVL: '$700,000', volume: '$250,000', APY: '7.20%' },
]

const tokenList = [
    {
        symbol: "BTC",
        name: "bitcoin",
    },
    {
        symbol: "ETH",
        name: "ethereum",
    },
    {
        symbol: "SOL",
        name: "solana",
    },
    {
        symbol: "ALGO",
        name: "algorand",
    },
    {
        symbol: "APT",
        name: "aptos",
    },
    {
        symbol: "USDT",
        name: "tether",
    },
]

export default function Pools() {
    const [selectedToken, setSelectedToken] = useState('algorand');
    const [selectedPosition, setSelectedPosition] = useState('buy');
    const [isLoading, setIsLoading] = useState(false);
    const {
        account,
        signMessage,
        signTransaction,
        submitTransaction,
        signAndSubmitTransaction
    } = useWallet();

    const simulateHandler = async () => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 3000)

        const module_adr = "0xaaf5681a00ad1b4c62887a4ba51d57f910130d34d9052abddd4546b042813bc2"
        const modul = "trackit"
        const name = "make_post"

        const tx = await signAndSubmitTransaction({
            data: {
                function: `${module_adr}::${modul}::${name}`,
                typeArguments: [],
                functionArguments: [
                    "APT",
                    "buy"
                ]
            }
        });

        alert("Transaction successfully: " + tx.hash)
    }

    return (
        <main className="container mx-auto px-3 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-panel rounded-lg shadow">
                    <h3 className="px-4 py-2 rounded-t-lg flex items-center text-lg font-semibold text-lido backdrop-blur-sm">
                        Trading Request
                    </h3>
                    {/* <div className="px-6 text-3xl font-bold text-gray-50">$0.56</div> */}
                    <div className="mt-2 px-12 py-2 flex justify-between items-center ">
                        <div>
                            <div className="text-lg text-gray-200 font-bold">Token</div>
                        </div>
                        <div className='w-1/3'>
                            <Select value={selectedToken} onValueChange={setSelectedToken}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    {tokenList.map(token => <SelectItem key={token.name} value={token.name}>{token.symbol}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="px-12 py-2 flex justify-between items-center ">
                        <div>
                            <div className="text-lg text-gray-200 font-bold">Position</div>
                        </div>
                        <div className='w-1/3'>
                            <Select value={selectedPosition} onValueChange={setSelectedPosition}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="buy">BUY</SelectItem>
                                    <SelectItem value="sell">SELL</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="bg-panel rounded-lg shadow">
                    <h3 className="px-4 py-2 rounded-t-lg flex items-center text-lg font-semibold text-lido backdrop-blur-sm">
                        Deposit Amount
                    </h3>
                    <div className='px-6 h-9 '>
                        <Input placeholder='Type your amount' className="px-2 py-1" />
                    </div>
                    <div className="mt-2 px-6 py-2 flex justify-between items-center ">
                        <div>
                            <div className="text-md text-gray-200 font-bold">Expect Profit (%)</div>
                        </div>
                        <Input className="w-1/4 px-2 py-1 rounded " />
                    </div>
                    <div className="px-6 py-2 flex justify-between items-center ">
                        <div>
                            <div className="text-md text-gray-200 font-bold">Expect Loss (%)</div>
                        </div>
                        <Input className="w-1/4 px-2 py-1" />
                    </div>
                </div>
                <div className="flex items-center justify-center bg-panel rounded-lg shadow">
                    <Button onClick={simulateHandler}
                        className="w-1/2 h-1/3 bg-lido hover:bg-lido/80 text-md text-white font-bold text-wrap">
                        Simulate Position Performance
                    </Button>
                </div>
            </div>

            <div className="bg-panel pb-5 rounded-lg shadow mb-8">
                <h3 className="px-4 py-4 flex items-center text-xl font-bold bg-panel text-lido backdrop-blur-sm rounded-t-lg">
                    Kanabot
                </h3>
                <div className="w-full mx-auto px-4 space-y-4">
                    {isLoading && (
                        <Card className="bg-gradient-to-r from-purple-600 to-indigo-600">
                            <CardContent className="flex items-center justify-center p-6">
                                <div className="flex items-center space-x-4">
                                    <Loader2 className="h-6 w-6 animate-spin text-white" />
                                    <span className="text-xl font-semibold text-white">Kanabot running</span>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                    <KanabotDashboard />
                </div>
            </div>

            <div className="bg-panel rounded-lg shadow mb-8">
                <h3 className="px-4 py-4 mb-5 flex items-center text-xl font-bold bg-panel text-lido backdrop-blur-sm rounded-t-lg">
                    Chart
                </h3>
                <CustomChart />
            </div>

            <div className="bg-panel rounded-lg shadow">
                <div className='flex justify-between items-center'>
                    <h3 className="px-6 py-2 rounded-t-lg flex items-center text-xl font-bold bg-panel text-lido backdrop-blur-sm">
                        History
                    </h3>
                    <div className="px-6 py-2 flex justify-between items-center">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search pools..."
                                className="pl-10 pr-4 py-2 border border-gray-500 rounded-lg bg-gray-100"
                            />
                            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                        </div>
                        {/* <button className="flex items-center bg-gray-200 px-4 py-2 rounded-lg">
                        Sort by <ChevronDown className="ml-2" size={20} />
                    </button> */}
                    </div>
                </div>
                <div className='px-6 py-4 bg-gray-100 rounded-lg '>
                    <table className="w-full">
                        <thead>
                            <tr className="text-left text-gray-600">
                                <th className="pb-2">Symbol</th>
                                <th className="pb-2">Amount</th>
                                <th className="pb-2">24h Volume</th>
                                <th className="pb-2">PNL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {poolsData.map((pool, index) => (
                                <tr key={index} className="border-t">
                                    <td className="py-3">{pool.pool}</td>
                                    <td className="py-3">{pool.TVL}</td>
                                    <td className="py-3">{pool.volume}</td>
                                    <td className="py-3">{pool.APY}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}