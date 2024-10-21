type Props = {
    list: any[]
}

const List: React.FC<Props> = ({ list }) => {
    return (
        <ul className="space-y-2">
            {list.map((item, index) => (
                item
            ))}
        </ul>
    );
}

export default List;