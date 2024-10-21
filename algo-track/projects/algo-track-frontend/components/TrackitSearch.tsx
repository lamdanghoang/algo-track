import { useRouter } from 'next/navigation';
import { Search } from "lucide-react";
import { useWallet } from '@aptos-labs/wallet-adapter-react';

const TrackitSearch = () => {
    const { account } = useWallet();
    const router = useRouter();

    const submitHandler = (e: any) => {
        e.preventDefault();
        router.push('/kana')
    };

    return (
        <div className="flex flex-col items-center space-y-14 text-white">
            <div className="flex flex-col items-center space-y-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 mt-4"
                >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <h3 className="text-xl font-bold">Search</h3>
            </div>
            <form className="relative w-3/4" onSubmit={submitHandler}>
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
                <input disabled={account === null} type="search" placeholder="Search..." className="pl-8 bg-gray-700 border-gray-600 w-full" />
            </form>
        </div>
    )
}

export default TrackitSearch;