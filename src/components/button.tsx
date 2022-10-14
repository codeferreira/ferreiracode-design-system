import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, ReactNode } from 'react';


export interface ButtonIconProps {
  children: ReactNode;
}

function ButtonIcon({children}: ButtonIconProps) {
  return (
    <Slot className="w-6 h-6">
      {children}
    </Slot>
  )
}

ButtonIcon.displayName = 'Button.Icon'

export interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'outline' | 'naked';
  asChild?: boolean;
}

function ButtonRoot({ variant = 'default', children, asChild = false }: ButtonRootProps) {
  const Component = asChild ? Slot : 'button'

  return (
    <Component
      className={
        clsx(
          'py-3 px-4 font-semibold rounded-md text-sm w-full transition-colors hover:bg-purple-800 hover:text-white focus:ring-2 ring-purple-100 flex items-center justify-center gap-3',
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

ButtonRoot.displayName = 'Button.Root'

export const Button = {
  Root: ButtonRoot,
  Icon: ButtonIcon
}