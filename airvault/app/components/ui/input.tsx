import { FC } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: FC<InputProps> = ({ className, ...props }) => (
  <input
    className={`border rounded px-3 py-2 text-sm text-gray-700 ${className}`}
    {...props}
  />
);
