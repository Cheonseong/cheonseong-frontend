interface UpwardControlButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const UpwardControlButton = ({ onClick }: UpwardControlButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="mb-3 size-0 border-x-[7px] border-b-[10px] border-x-transparent border-b-gray-700"
    ></button>
  );
};

export default UpwardControlButton;
