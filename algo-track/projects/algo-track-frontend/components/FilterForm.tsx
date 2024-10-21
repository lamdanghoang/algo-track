import React, { useState } from 'react'
import { Checkbox } from "@/components/ui/Checkbox"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { Button } from "@/components/ui/Button"
import { ScrollArea } from './ui/ScrollArea'
import Popup from './Popup'
import toast, { Toaster } from 'react-hot-toast'
import { Deserializer, SimpleTransaction, U64 } from '@aptos-labs/ts-sdk';
import {
    SignMessageResponse,
    useWallet
} from '@aptos-labs/wallet-adapter-react';

const FilterForm = () => {
    const {
        account,
        signMessage,
        signTransaction,
        submitTransaction,
        signAndSubmitTransaction
    } = useWallet();

    const [filters, setFilters] = useState({
        withAtLeast1Social: false,
        top10Holders: false,
        devHasntSoldYet: false,
        devSellAll: false,
        devBurnt: false,
        mktCapMin: '',
        mktCapMax: '',
        tkMin: '',
        tkMax: '',
        totalHoldersMin: '',
        totalHoldersMax: '',
        createdMin: '',
        createdMax: ''
    });

    const handleCheckboxChange = (name: string) => {
        setFilters((prev: any) => ({ ...prev, [name]: !prev[name] }))
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFilters(prev => ({ ...prev, [name]: value }))
    }

    const handleReset = () => {
        setFilters({
            withAtLeast1Social: false,
            top10Holders: false,
            devHasntSoldYet: false,
            devSellAll: false,
            devBurnt: false,
            mktCapMin: '',
            mktCapMax: '',
            tkMin: '',
            tkMax: '',
            totalHoldersMin: '',
            totalHoldersMax: '',
            createdMin: '',
            createdMax: ''
        })
    }

    const handleApply = async () => {
        console.log('Applied filters:', filters);
        toast.success('Filters applied successfully');

        const module_adr = "0xaaf5681a00ad1b4c62887a4ba51d57f910130d34d9052abddd4546b042813bc2"
        const modul = "trackit"
        const name = "create_user_profile"

        const tx = await signAndSubmitTransaction({
            data: {
                function: `${module_adr}::${modul}::${name}`,
                typeArguments: [],
                functionArguments: [
                    "PQD",
                    "PQD",
                    "PQD"
                ]
            }
        });

        alert("Transaction successfully: " + tx.hash)
    }

    return (
        <ScrollArea className="h-[492px] bg-item text-white p-4 rounded-lg max-w-xs">
            <Toaster position="top-center" />
            <div className="space-y-4">
                <div className="space-y-2">
                    {[
                        { id: 'withAtLeast1Social', label: 'With at least 1 social' },
                        { id: 'top10Holders', label: 'Top 10 holders' },
                        { id: 'devHasntSoldYet', label: "Dev hasn't sold yet" },
                        { id: 'devSellAll', label: 'Dev Sell all' },
                        { id: 'devBurnt', label: 'DEV Burnt' },
                    ].map(({ id, label }) => (
                        <div key={id} className="flex items-center">
                            <Checkbox
                                id={id}
                                checked={filters[id as keyof typeof filters] as boolean}
                                onCheckedChange={() => handleCheckboxChange(id)}
                                className='bg-white'
                            />
                            <Label htmlFor={id} className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                {label}
                            </Label>
                        </div>
                    ))}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="mktCap" className="text-sm font-medium">MKT Cap.</Label>
                    <div className="flex space-x-2">
                        <Input
                            id="mktCapMin"
                            name="mktCapMin"
                            placeholder="K"
                            value={filters.mktCapMin}
                            onChange={handleInputChange}
                            className="bg-gray-100 text-gray-800"
                        />
                        <Input
                            id="mktCapMax"
                            name="mktCapMax"
                            placeholder="K"
                            value={filters.mktCapMax}
                            onChange={handleInputChange}
                            className="bg-gray-100 text-gray-800"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="tk" className="text-sm font-medium">% TKs</Label>
                    <div className="flex space-x-2">
                        <Input
                            id="tkMin"
                            name="tkMin"
                            placeholder="Number"
                            value={filters.tkMin}
                            onChange={handleInputChange}
                            className="bg-gray-100 text-gray-800"
                        />
                        <Input
                            id="tkMax"
                            name="tkMax"
                            placeholder="Number"
                            value={filters.tkMax}
                            onChange={handleInputChange}
                            className="bg-gray-100 text-gray-800"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="totalHolders" className="text-sm font-medium">Total Holders</Label>
                    <div className="flex space-x-2">
                        <Input
                            id="totalHoldersMin"
                            name="totalHoldersMin"
                            placeholder="Number"
                            value={filters.totalHoldersMin}
                            onChange={handleInputChange}
                            className="bg-gray-100 text-gray-800"
                        />
                        <Input
                            id="totalHoldersMax"
                            name="totalHoldersMax"
                            placeholder="Number"
                            value={filters.totalHoldersMax}
                            onChange={handleInputChange}
                            className="bg-gray-100 text-gray-800"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="created" className="text-sm font-medium">Created</Label>
                    <div className="flex space-x-2">
                        <Input
                            id="createdMin"
                            name="createdMin"
                            placeholder="min"
                            value={filters.createdMin}
                            onChange={handleInputChange}
                            className="bg-gray-100 border-gray-700"
                        />
                        <Input
                            id="createdMax"
                            name="createdMax"
                            placeholder="max"
                            value={filters.createdMax}
                            onChange={handleInputChange}
                            className="bg-gray-100 text-gray-800"
                        />
                    </div>
                </div>

                <div className="flex space-x-2 pt-4">
                    <Button onClick={handleReset} className="flex-1 bg-gray-50 hover:bg-gray-50/80 text-gray-800">
                        Reset
                    </Button>
                    <Button onClick={handleApply} className="flex-1 bg-blue text-white hover:bg-blue/80 font-bold" variant="secondary">
                        Apply
                    </Button>
                </div>

                <Popup />
            </div>

        </ScrollArea>
    )
}

export default FilterForm;