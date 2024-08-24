import { AccountRecord } from '../AccountData';

interface ButtonColumnProps {
  index: number;
  accountData: AccountRecord[];
  setAccountData: React.Dispatch<React.SetStateAction<AccountRecord[]>>;
  setEditModeIndex: React.Dispatch<React.SetStateAction<number | null>>;
  isInEditMode: boolean;
}

const ButtonColumn = ({
  index,
  accountData,
  setAccountData,
  setEditModeIndex,
  isInEditMode,
}: ButtonColumnProps) => {
  const handleEditConfirmButton = () => {
    setEditModeIndex(null);
  };

  const handleDeleteRowButton = (index: number) => {
    const confirmed = confirm('정말 삭제하시겠습니까?');
    if (!confirmed) return;

    const updatedData = accountData.filter((_, i) => i !== index);
    setAccountData(updatedData);
    setEditModeIndex(null);
  };

  return (
    <td className="border border-gray-300 px-4 py-2">
      {isInEditMode ? (
        <button onClick={handleEditConfirmButton} className="text-green-500 hover:text-green-700">
          ✔️
        </button>
      ) : (
        <button
          onClick={() => handleDeleteRowButton(index)}
          className="text-red-500 hover:text-red-700"
        >
          🗑
        </button>
      )}
    </td>
  );
};

export default ButtonColumn;
