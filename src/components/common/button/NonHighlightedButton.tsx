import { ReactElement } from 'react';

interface NonHighlightedButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  innerText?: string;
  disabled?: boolean;
  children?: ReactElement | string;
}

const NonHighlightedButton = ({
  onClick,
  className,
  disabled,
  children,
}: NonHighlightedButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={
        'mx-2 my-4 rounded  bg-gray-300 px-4 py-2 text-gray-700 font-semibold  hover:bg-gray-400 focus:outline-none focus:ring-2  focus:ring-gray-400 disabled:bg-gray-500 disabled:text-gray-400 ' +
        className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default NonHighlightedButton;
