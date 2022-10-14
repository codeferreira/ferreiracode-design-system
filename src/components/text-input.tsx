import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';


export interface InputRootProps {
  children: ReactNode;
}

function InputRoot({children}: InputRootProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-gray-100 text-sm rounded-md w-full  focus-within:ring-2 ring-purple-200">
      {children}
    </div>
  )
}

InputRoot.displayName = 'TextInput.Root';

export interface InputIconProps {
  children: ReactNode;
}

function InputIcon({children}: InputIconProps) {
  return (
    <Slot className="w-6 h-6 text-purple-200">
      {children}
    </Slot>
  )
}

InputIcon.displayName = 'TextInput.Icon';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: TextInputProps) {
  return (
    <input
      className="bg-transparent flex-1 placeholder:text-purple-200 text-purple-800 outline-none"
      {...props}
    />
  )
}

Input.displayName = 'TextInput.Input';

export const TextInput = {
  Root: InputRoot,
  Input,
  Icon: InputIcon
}