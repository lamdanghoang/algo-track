import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { ScrollArea } from "@/components/ui/ScrollArea"
import { Input } from "@/components/ui/Input"
import { Loader2 } from "lucide-react"

import { Deserializer, SimpleTransaction, U64 } from '@aptos-labs/ts-sdk';
import {
    SignMessageResponse,
    useWallet
} from '@aptos-labs/wallet-adapter-react';

interface Transaction {
    id: string
    type: 'buy' | 'sell'
    amount: number
    currency: string
    price: number
    timestamp: number
}

export default function KanabotDashboard() {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [input, setInput] = useState('')

    useEffect(() => {
        // Simulating fetching transaction history
        const mockTransactions: Transaction[] = [
            { id: '0', type: 'buy', amount: 1000, currency: 'ALGO', price: 0.13, timestamp: Date.now() - 1800000 },
            { id: '1', type: 'buy', amount: 0.5, currency: 'APT', price: 10, timestamp: Date.now() - 3600000 },
            { id: '2', type: 'sell', amount: 100, currency: 'CETUS', price: 1, timestamp: Date.now() - 7200000 },
            { id: '3', type: 'buy', amount: 0.1, currency: 'BTC', price: 60000, timestamp: Date.now() - 10800000 },
        ]
        setTransactions(mockTransactions)
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleInputSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (input.trim() === 'clear') {
            setTransactions([])
        } else {
            const [amount, currency] = input.split(' ')
            setTransactions(prev => [...prev, {
                id: Date.now().toString(),
                type: Math.random() > 0.5 ? 'buy' : 'sell',
                amount: parseFloat(amount) || 0,
                currency: currency || 'UNKNOWN',
                price: Math.random() * 1000,
                timestamp: Date.now()
            }])
        }
        setInput('')
    }

    const formatTimestamp = (timestamp: number) => {
        return new Date(timestamp).toLocaleString()
    }

    return (


        <Card className="bg-black text-green-400 font-mono">
            <CardHeader>
                <CardTitle className="text-xl">Transaction History</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[300px] w-full mb-4 p-4 bg-gray-900 rounded">
                    {transactions.map(tx => (
                        <div key={tx.id} className="mb-2">
                            <span className="text-gray-500">[{formatTimestamp(tx.timestamp)}]</span>{' '}
                            <span className={tx.type === 'buy' ? 'text-green-400' : 'text-red-400'}>
                                {tx.type.toUpperCase()} {tx.amount} {tx.currency}
                            </span>{' '}
                            <span className="text-blue-400">@ ${tx.price.toFixed(2)}</span>
                        </div>
                    ))}
                </ScrollArea>
                {/* <form onSubmit={handleInputSubmit} className="flex">
                        <span className="mr-2">$</span>
                        <Input
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            className="flex-grow bg-transparent border-none text-green-400 focus:ring-0"
                            placeholder="Enter 'amount currency' or 'clear'"
                        />
                    </form> */}
            </CardContent>
        </Card>

    )
}