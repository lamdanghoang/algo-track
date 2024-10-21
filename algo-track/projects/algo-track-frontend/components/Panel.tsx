import { ScrollArea, ScrollBar } from "@/components/ui/ScrollArea";

type Props = {
    children: React.ReactNode,
    title: string,
    height: string,
}

const Panel: React.FC<Props> = ({ children, title, height }) => {
    const classes = `${height} w-full`;
    return (
        <section className="pb-1 rounded-lg shadow-md relative bg-panel">
            <h3 className="z-0 sticky top-0 py-2 px-4 flex items-center text-xl font-semibold text-lido backdrop-blur-sm">
                {title}
            </h3>
            <ScrollArea className={classes}>
                <div>

                    {children}

                </div>
                <ScrollBar orientation="vertical" />
            </ScrollArea>
        </section>
    );
}

export default Panel;