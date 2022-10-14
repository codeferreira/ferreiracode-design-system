import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Text({ size = 'md', children, className, asChild = false }: TextProps) {
  const Component = asChild ? Slot : 'span'

  return (
    <Component
      className={
        clsx("text-black font-sans",
          {
            'text-xs': size === 'xs',
            'text-sm': size === 'sm',
            'text-md': size === 'md',
            'text-lg': size === 'lg',
          },
          className
        )
      }
    >
      {children}
    </Component>
  )
}