type Props = {
    info: {
        author: string;
        is_positive: boolean;
        time_created: string;
        content: string;
    }
}

const News: React.FC<Props> = ({ info }) => {
    return (
        <div className="p-4 block rounded-lg transition-colors duration-300 mt-2 ml-1 mr-2 bg-item hover:bg-gray-700 text-gray-50 border-bordercolor border">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold">{info.author}</h3>
                {/* <span className="text-red-400 text-xs">Negative</span> */}
            </div>
            <p className="text-sm text-gray-400">{info.time_created}</p>
            <p className="text-sm font-medium">{info.content}</p>
        </div>
    );
}

export default News;