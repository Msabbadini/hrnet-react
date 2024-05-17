import React from "react";
import useAtom, { AtomProps } from "#components/atoms";

export interface Props extends AtomProps, React.HTMLAttributes<HTMLDivElement> {
    component?:  React.FunctionComponent |"h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
    children: React.ReactNode;
}

export const Typography = ({
    component:Component = "div",
    ...props
}: Props) => {
    return (
        <Component {...props} {...useAtom(props)}>{props.children}</Component>
    )
}

export default Typography

