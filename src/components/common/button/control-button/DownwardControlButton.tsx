interface DownwardControlButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const DownwardControlButton = ({ onClick }: DownwardControlButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="mt-3 size-0 border-x-[7px] border-t-[10px] border-x-transparent border-t-gray-700"
    ></button>
  );
};

export default DownwardControlButton;
