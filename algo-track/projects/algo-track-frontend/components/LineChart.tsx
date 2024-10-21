"use client"

import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip } from "@/components/ui/Chart"
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"

// Updated sample data with more volatility
const tradeData = [
    { time: "09:00", price: 150.25 },
    { time: "09:30", price: 152.50, action: "buy", quantity: 100 },
    { time: "10:00", price: 151.75 },
    { time: "10:30", price: 153.00 },
    { time: "11:00", price: 155.50 },
    { time: "11:30", price: 154.25, action: "sell", quantity: 50 },
    { time: "12:00", price: 153.75 },
    { time: "12:30", price: 152.00 },
    { time: "13:00", price: 151.50, action: "buy", quantity: 75 },
    { time: "13:30", price: 153.25 },
    { time: "14:00", price: 156.00 },
    { time: "14:30", price: 157.50, action: "sell", quantity: 100 },
    { time: "15:00", price: 156.75 },
    { time: "15:30", price: 158.00 },
    { time: "16:00", price: 157.25 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload
        return (
            <div className="bg-background p-4 rounded-lg shadow-lg border border-border">
                <p className="font-bold">{`Time: ${data.time}`}</p>
                <p className="text-primary">{`Price: $${data.price.toFixed(2)}`}</p>
                {data.action && (
                    <p className={data.action === "buy" ? "text-green-500" : "text-red-500"}>
                        {`${data.action.charAt(0).toUpperCase() + data.action.slice(1)}: ${data.quantity} shares`}
                    </p>
                )}
            </div>
        )
    }
    return null
}

const CustomizedDot = (props: any) => {
    const { cx, cy, payload } = props

    if (payload.action === "buy") {
        return (
            <g transform={`translate(${cx},${cy})`}>
                <circle r="6" fill="#0FFF50" />
                {/* <ArrowUpIcon className="w-4 h-4 text-background" style={{ transform: 'translate(-8px, -8px)' }} /> */}
            </g>
        )
    } else if (payload.action === "sell") {
        return (
            <g transform={`translate(${cx},${cy})`}>
                <circle r="6" fill="#ff0800" />
                {/* <ArrowDownIcon className="w-4 h-4 text-background" style={{ transform: 'translate(-8px, -8px)' }} /> */}
            </g>
        )
    }

    return null
}

export default function CustomChart() {
    return (
        <ChartContainer
            config={{
                price: {
                    label: "Price",
                    color: "#f9fafb",
                },
                buy: {
                    label: "Buy",
                    color: "hsl(var(--success))",
                },
                sell: {
                    label: "Sell",
                    color: "hsl(var(--destructive))",
                },
            }}
            className="h-[400px] w-full"
        >
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={tradeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" tick={{ stroke: '#ccc' }} />
                    <YAxis domain={['dataMin - 1', 'dataMax + 1']} tick={{ stroke: '#ccc' }} />
                    <ChartTooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="price"
                        stroke="#ccc"
                        strokeWidth={2}
                        dot={<CustomizedDot />}
                    />
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    )
}