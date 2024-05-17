import React from 'react'
import useAtom, { AtomProps } from '#components/atoms'

interface ButtonProps extends AtomProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function Button({ ...props }:ButtonProps) {
  return (
    <button type='button' {...props} {...useAtom(props)}>{props.children}</button>
  )
}
