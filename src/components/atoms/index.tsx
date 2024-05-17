export interface AtomProps {
    variant?: "body-5xl" | "body-2xl" | "body-xl" | "body-lg" | "body-base" | "body-sm" | "body-md" | "body-xs";
    theme?: "red" | "grey" | "white" | "black";
    align?: "left" | "center" | "right";
    fontWeight?: "light" | "normal" | "bold";
    className?: string;
}

const variantStyles: Map<string | undefined, string> = new Map()
variantStyles.set("body-5xl", "text-5xl")
variantStyles.set("body-2xl", "text-2xl")
variantStyles.set("body-xl", "text-xl")
variantStyles.set("body-lg", "text-lg")
variantStyles.set("body-md", "text-base")
variantStyles.set("body-sm", "text-sm") // default
variantStyles.set("body-xs", "text-xs")

const colorStyles: Map<string | undefined, string> = new Map()
colorStyles.set("red", "text-red-500")
colorStyles.set("white", "text-white")
colorStyles.set("black", "text-black") // default
colorStyles.set("grey", "text-slate-800")

const fontWeightStyles: Map<string | undefined, string> = new Map()
fontWeightStyles.set("light", "font-light")
fontWeightStyles.set("normal", "font-normal") // default
fontWeightStyles.set("bold", "font-bold")

const alignStyles: Map<string | undefined, string> = new Map()
alignStyles.set("left", "text-left") // default
alignStyles.set("center", "text-center")
alignStyles.set("right", "text-right")

const getStyleClassname = (
    variant: string | undefined,
    color: string | undefined,
    align: string | undefined,
    fontWeight: string | undefined,
    classNames: Array<string>
): string => [variantStyles.get(variant), colorStyles.get(color), fontWeightStyles.get(fontWeight), alignStyles.get(align), ... (typeof classNames === "string" ? classNames : classNames)].filter(f => f).join(' ')

const useAtom = ({
    variant = "body-sm",
    theme = "black",
    align = "left",
    fontWeight = "normal",
    className = "",
}: AtomProps) => {
    return ({
        className: getStyleClassname(variant, theme, align, fontWeight, className.split(" "))
    })
}

export default useAtom