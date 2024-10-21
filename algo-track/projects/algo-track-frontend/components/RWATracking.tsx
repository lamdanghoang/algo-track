import { BarChart2, Users, DollarSign, Calendar } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"

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
                <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Asset Performance Chart"
                    className="w-full h-48 object-cover rounded-md"
                />
                <div className="flex items-center space-x-2">
                    <DollarSign className="text-lido" width={14} height={14} />
                    <span className='text-sm text-lido'>Market capitalization insights</span>
                </div>
                <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Market Capitalization Chart"
                    className="w-full h-48 object-cover rounded-md"
                />
            </TabsContent>
            <TabsContent value="distribution" className="px-3 space-y-4">
                <div className="flex items-center space-x-2">
                    <Users className="text-lido" width={14} height={14} />
                    <span className='text-sm text-lido'>Holder distribution analysis</span>
                </div>
                <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Holder Distribution Chart"
                    className="w-full h-48 object-cover rounded-md"
                />
                <div className="flex items-center space-x-2">
                    <Calendar className="text-lido" width={14} height={14} />
                    <span className='text-sm text-lido'>Historical data and trends</span>
                </div>
                <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Historical Trends Chart"
                    className="w-full h-48 object-cover rounded-md"
                />
            </TabsContent>
        </Tabs>
    );
}

export default Tracking;