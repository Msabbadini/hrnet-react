import React from 'react'
import useAtom, { AtomProps } from '#components/atoms';

interface LabelProps extends AtomProps {
    htmlFor: string;
    children?: React.ReactNode;
}

export default function Label({...props}: LabelProps) {
    return (
        <label {...props} {...useAtom(props)} htmlFor={props.htmlFor}>
            {props.children}
        </label>
    )
}
