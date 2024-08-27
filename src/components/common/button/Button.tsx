import { ReactElement } from 'react';

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  innerText?: string;
  disabled?: boolean;
  children?: ReactElement | string;
}

const Button = ({ onClick, className, disabled, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={
        'mx-2 my-4 rounded bg-sky-600 px-4 py-2 text-white font-semibold  hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 disabled:bg-gray-500 disabled:text-gray-400 ' +
        className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
