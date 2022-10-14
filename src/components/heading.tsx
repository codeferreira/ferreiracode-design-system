import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface HeadingProps {
  size?: 'xl' | '2xl' | '3xl';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Heading({ size = '2xl', children, className, asChild = false }: HeadingProps) {
  const Component = asChild ? Slot : 'h2'

  return (
    <Component
      className={
        clsx("text-black font-sans",
          {
            'text-xl': size === 'xl',
            'text-2xl': size === '2xl',
            'text-3xl': size === '3xl',
          },
          className
        )
      }
    >
      {children}
    </Component>
  )
}