import { format } from 'date-fns'

type Props = {
    info: {
        name: string;
        price: number;
        change_24h: any;
        transaction_timestamp: number;
        sentiment: string;
        description: string;
    }
}

const Pool: React.FC<Props> = ({ info }) => {
    const formattedDate = format(new Date(info.transaction_timestamp), 'yyyy-MM-dd HH:mm:ss');
    const isPositiveChange = info.change_24h > 0;

    return (
        <div className="block rounded-lg transition-colors duration-300 mt-2 ml-1 mr-2 bg-item hover:bg-gray-700 border-bordercolor border">
            <div className="p-3 flex items-center justify-between">
                <div className="flex items-center">
                    <div className="w-6 h-6 flex-shrink-0 mr-3"></div>
                    <div>
                        <h3 className="font-semibold text-gray-50">{info.name}</h3>
                        <p className="text-sm text-gray-100">Created on {formattedDate}</p>
                        <span className="text-xs font-medium block">
                            <span className="text-gray-100">${info.price}</span>
                            <span className={`ml-1 ${isPositiveChange ? 'text-green-600' : 'text-red-600'}`}>
                                {isPositiveChange ? '+' : ''}{info.change_24h}%
                            </span>
                        </span>
                        <p className={`text-sm mt-1 ${info.sentiment === 'Bullish' ? 'text-green-500' : info.sentiment === 'Bearish' ? 'text-red-500' : 'text-gray-400'}`}>
                            {info.sentiment}
                        </p>
                        <p className="text-xs text-gray-300 mt-1">{info.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pool;