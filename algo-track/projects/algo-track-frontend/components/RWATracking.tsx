import { BarChart2, Users, DollarSign, Calendar } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"

const SimpleLineChart = () => (
    <svg className="w-full h-48" viewBox="0 0 400 200">
      <path d="M 0 200 L 40 180 L 80 190 L 120 170 L 160 160 L 200 140 L 240 130 L 280 110 L 320 90 L 360 70 L 400 50" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
      <path d="M 0 200 L 400 200" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <path d="M 0 0 L 0 200" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
    </svg>
)
  
const SimpleBarChart = () => (
<svg className="w-full h-48" viewBox="0 0 400 200">
    {[40, 60, 80, 100, 120, 140, 160, 180].map((height, index) => (
    <rect key={index} x={index * 50} y={200 - height} width="40" height={height} fill="hsl(var(--primary))" opacity={0.8 - index * 0.1} />
    ))}
    <path d="M 0 200 L 400 200" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
    <path d="M 0 0 L 0 200" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
</svg>
)

const SimplePieChart = () => (
<svg className="w-full h-48" viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="80" fill="hsl(var(--primary))" />
    <path d="M 100 100 L 100 20 A 80 80 0 0 1 180 100 Z" fill="hsl(var(--secondary))" />
    <path d="M 100 100 L 180 100 A 80 80 0 0 1 100 180 Z" fill="hsl(var(--accent))" />
</svg>
)

const SimpleAreaChart = () => (
<svg className="w-full h-48" viewBox="0 0 400 200">
    <path d="M 0 200 L 40 180 L 80 190 L 120 170 L 160 160 L 200 140 L 240 130 L 280 110 L 320 90 L 360 70 L 400 50 L 400 200 Z" fill="hsl(var(--primary))" opacity="0.5" />
    <path d="M 0 200 L 40 180 L 80 190 L 120 170 L 160 160 L 200 140 L 240 130 L 280 110 L 320 90 L 360 70 L 400 50" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
    <path d="M 0 200 L 400 200" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
    <path d="M 0 0 L 0 200" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
</svg>
)

const Tracking = () => {
    return (
        <Tabs defaultValue="performance" className="space-y-4">
            <TabsList className="mx-auto grid w-3/4 grid-cols-2">
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="distribution">Distribution</TabsTrigger>
            </TabsList>
            <TabsContent value="performance" className="px-3 space-y-4">
                <div className="flex items-center space-x-1">
                    <BarChart2 className="text-lido" width={14} height={14} />
                    <span className='text-sm text-lido'>Real-time asset performance tracking</span>
                </div>
                <SimpleLineChart />
                <div className="flex items-center space-x-2">
                    <DollarSign className="text-lido" width={14} height={14} />
                    <span className='text-sm text-lido'>Market capitalization insights</span>
                </div>
                <SimpleAreaChart />
            </TabsContent>
            <TabsContent value="distribution" className="px-3 space-y-4">
                <div className="flex items-center space-x-2">
                    <Users className="text-lido" width={14} height={14} />
                    <span className='text-sm text-lido'>Holder distribution analysis</span>
                </div>
                <SimplePieChart />
                <div className="flex items-center space-x-2">
                    <Calendar className="text-lido" width={14} height={14} />
                    <span className='text-sm text-lido'>Historical data and trends</span>
                </div>
                <SimpleBarChart />
            </TabsContent>
        </Tabs>
    );
}

export default Tracking;