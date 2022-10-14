import { TextareaHTMLAttributes } from "react";

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextArea(props: TextAreaProps) {
  return (
    <textarea
      className="px-4 py-3 w-full bg-gray-100 text-sm rounded-md resize-none h-40 placeholder:text-purple-200 text-purple-800 outline-none focus-within:ring-2 ring-purple-200"
      {...props}
    />
  )
}