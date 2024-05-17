
export interface FlexProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}

const Flex = ({ children, style, className="" }:FlexProps) => {
    return (
        <div className={`flex flex-col flex-wrap content-around justify-evenly  ${className ? ` ${className}` : ""}`} style={{...style}} >
            {children}
        </div>
    )
}

export default Flex