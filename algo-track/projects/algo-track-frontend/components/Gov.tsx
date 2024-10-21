import { Progress } from "./ui/Progress";
import { formatDistanceToNow } from 'date-fns'
import { CheckCircle, XCircle, User, Database } from 'lucide-react'

type Props = {
    info: {
        proposal_id: number;
        num_votes: number;
        should_pass: boolean;
        staking_pool_address: string;
        transaction_timestamp: string;
        transaction_version: number;
        voter_address: string;
    }
}

function formatAddress(address: string): string {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
}

function formatVotes(votes: number): string {
    return (votes / 1e9).toFixed(2) + 'B'
}

const Governance: React.FC<Props> = ({ info }) => {
    return (
        <div className="p-4 block rounded-lg transition-colors duration-300 mt-2 ml-1 mr-2 bg-item hover:bg-gray-700 text-gray-50 border-bordercolor border">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Proposal {info.proposal_id}</span>
                <span className="text-xs text-gray-400">
                    {formatDistanceToNow(new Date(info.transaction_timestamp), { addSuffix: true })}
                </span>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <User size={16} className="text-blue-400" />
                    <span className="text-xs">{formatAddress(info.voter_address)}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Database size={16} className="text-green-400" />
                    <span className="text-xs font-medium">{formatVotes(info.num_votes)} votes</span>
                </div>
            </div>
            <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center space-x-1">
                    {info.should_pass ? (
                        <CheckCircle size={16} className="text-green-500" />
                    ) : (
                        <XCircle size={16} className="text-red-500" />
                    )}
                    <span className="text-xs">{info.should_pass ? 'Pass' : 'Reject'}</span>
                </div>
                <span className="text-xs text-gray-400">v{info.transaction_version}</span>
            </div>
        </div>
    );
};

export default Governance;