interface ButtonColumnInEditModeProps {
  setEditModeIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const ButtonColumnInEditMode = ({ setEditModeIndex }: ButtonColumnInEditModeProps) => {
  const handleEditConfirmButton = () => {
    setEditModeIndex(null);
  };

  return (
    <td className="border border-gray-300 px-4 py-2">
      <button onClick={handleEditConfirmButton} className="text-green-500 hover:text-green-700">
        ✔️
      </button>
    </td>
  );
};

export default ButtonColumnInEditMode;
