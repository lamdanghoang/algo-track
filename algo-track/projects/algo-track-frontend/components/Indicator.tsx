type Props = {
    info: {
        name: string;
        symbol: string;
        price: number;
        volume_24h: number;
        rsi: number;
        moving_average_50d: number;
        moving_average_200d: number;
        signal: string;
        description: string;
    }
}

const Indicator: React.FC<Props> = ({ info }) => {
    return (
        <div className="block rounded-lg transition-colors duration-300 mt-2 mx-2 bg-item hover:bg-gray-700 text-gray-50 border-bordercolor border">
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h3 className="font-semibold text-xl">{info.name}</h3>
                        <p className="text-sm text-gray-300">{info.symbol}</p>
                    </div>
                    <div className="text-right">
                        <p className="font-semibold text-lg">{info.price.toFixed(6)}</p>
                        <p className="text-sm">Volume 24h: {info.volume_24h.toLocaleString()}</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <p className="text-sm font-semibold">RSI</p>
                        <p>{info.rsi}</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Signal</p>
                        <p>{info.signal}</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">50d MA</p>
                        <p>{info.moving_average_50d.toFixed(6)}</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">200d MA</p>
                        <p>{info.moving_average_200d.toFixed(6)}</p>
                    </div>
                </div>
                <p className="text-sm mb-4">{info.description}</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View Chart
                </button>
            </div>
        </div>
    )
}

export default Indicator;