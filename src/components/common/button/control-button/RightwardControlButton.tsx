interface RightwardControlButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const RightwardControlButton = ({ onClick }: RightwardControlButtonProps) => {
  return (
    <button onClick={onClick} className="absolute right-0 top-1/2 -translate-y-1/2 px-4 py-2">
      <div className="size-0 border-y-8 border-l-8 border-y-transparent border-l-gray-700"></div>
    </button>
  );
};

export default RightwardControlButton;
