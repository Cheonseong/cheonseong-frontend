interface LeftwardControlButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const LeftwardControlButton = ({ onClick }: LeftwardControlButtonProps) => {
  return (
    <button onClick={onClick} className="absolute left-0 top-1/2 -translate-y-1/2 px-4 py-2">
      <div className="size-0 border-y-8 border-r-8 border-y-transparent border-r-gray-700"></div>
    </button>
  );
};

export default LeftwardControlButton;
