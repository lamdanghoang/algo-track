import React from 'react'

const CustomFilters = () => {
    return (
        <div className="bg-gray-900 text-white p-6 rounded-lg max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-6">Custom Filters</h1>

            <div className="space-y-6">
                <div>
                    <label htmlFor="filter-name">Filter name</label>
                    <input id="filter-name" placeholder="Filter name for remember" className="bg-gray-800 border-gray-700 text-white" />
                </div>

                <div>
                    <label>Token type</label>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <label htmlFor="hide-pools" className="cursor-pointer">Hide pools with stable and native</label>
                            <switch id="hide-pools" />
                        </div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="hide-tokens" className="cursor-pointer">Hide tokens without social networks</label>
                            <switch id="hide-tokens" />
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="chain">Chain</label>
                    <select>
                        {/* <SelectTrigger id="chain" className="bg-gray-800 border-gray-700 text-white">
                            <SelectValue placeholder="All chains" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All chains</SelectItem>
                        </SelectContent> */}
                    </select>
                </div>

                <div>
                    <label htmlFor="exchange">Exchange</label>
                    <select>
                        {/* <SelectTrigger id="exchange" className="bg-gray-800 border-gray-700 text-white">
                            <SelectValue placeholder="All exchanges" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All exchanges</SelectItem>
                        </SelectContent> */}
                    </select>
                </div>

                {['Total liquidity', 'Volume (24h)', 'Swaps (24h)', 'T.M.Cap'].map((label) => (
                    <div key={label}>
                        <label>{label}</label>
                        <div className="flex space-x-2">
                            <input placeholder="Min" className="bg-gray-800 border-gray-700 text-white" />
                            <input placeholder="Max" className="bg-gray-800 border-gray-700 text-white" />
                        </div>
                    </div>
                ))}

                <div>
                    <label htmlFor="dextscore">DEXTScore</label>
                    <select>
                        {/* <SelectTrigger id="dextscore" className="bg-gray-800 border-gray-700 text-white">
                            <SelectValue placeholder="No minimum selected" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="no-min">No minimum selected</SelectItem>
                        </SelectContent> */}
                    </select>
                </div>

                <div>
                    <label htmlFor="contract">Contract</label>
                    <select>
                        {/* <SelectTrigger id="contract" className="bg-gray-800 border-gray-700 text-white">
                            <SelectValue placeholder="No filtered contract" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="no-filter">No filtered contract</SelectItem>
                        </SelectContent> */}
                    </select>
                </div>

                <div>
                    <label>Pool created</label>
                    <div className="flex space-x-2">
                        <select>
                            {/* <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                                <SelectValue placeholder="Less than" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="less-than">Less than</SelectItem>
                                <SelectItem value="more-than">More than</SelectItem>
                            </SelectContent> */}
                        </select>
                        <input placeholder="Num" className="bg-gray-800 border-gray-700 text-white w-20" />
                        <select>
                            {/* <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                                <SelectValue placeholder="Days" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="days">Days</SelectItem>
                                <SelectItem value="weeks">Weeks</SelectItem>
                                <SelectItem value="months">Months</SelectItem>
                            </SelectContent> */}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomFilters;