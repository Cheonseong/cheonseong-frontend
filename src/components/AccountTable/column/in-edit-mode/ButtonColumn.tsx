import { accountTableCellStyle } from '../../AccountTableBody';

interface ButtonColumnInEditModeProps {
  setEditModeIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const ButtonColumnInEditMode = ({ setEditModeIndex }: ButtonColumnInEditModeProps) => {
  const handleEditConfirmButton = () => {
    setEditModeIndex(null);
  };

  return (
    <td className={accountTableCellStyle}>
      <button onClick={handleEditConfirmButton} className="text-green-500 hover:text-green-700">
        ✔️
      </button>
    </td>
  );
};

export default ButtonColumnInEditMode;
