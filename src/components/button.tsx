import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  variant?: 'default' | 'outline' | 'naked';
  asChild?: boolean;
}

export function Button({ variant = 'default', children, asChild = false }: ButtonProps) {
  const Component = asChild ? Slot : 'button'

  return (
    <Component
      className={
        clsx(
          'py-3 px-4 font-semibold rounded-md text-sm w-full transition-colors hover:bg-purple-800 hover:text-white focus:ring-2 ring-purple-100',
          variant === 'default' && 'bg-purple-700 text-white',
          variant === 'outline' && 'bg-transparent text-purple-700 border border-purple-700',
          variant === 'naked' && 'bg-transparent text-purple-700 hover:bg-transparent hover:text-purple-800'
        )
      }
    >
      {children}
    </Component>
  )
}