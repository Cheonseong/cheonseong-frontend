import { AccountRecord } from '../../data/AccountData';
import { accountTableCellStyle } from '../../AccountTableBody';

interface ButtonColumnProps {
  index: number;
  accountData: AccountRecord[];
  setAccountData: React.Dispatch<React.SetStateAction<AccountRecord[]>>;
  setEditModeIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const ButtonColumn = ({
  index,
  accountData,
  setAccountData,
  setEditModeIndex,
}: ButtonColumnProps) => {
  const handleDeleteRowButton = (index: number) => {
    const confirmed = confirm('정말 삭제하시겠습니까?');
    if (!confirmed) return;

    const updatedData = accountData.filter((_, i) => i !== index);
    setAccountData(updatedData);
    setEditModeIndex(null);
  };

  return (
    <td className={accountTableCellStyle}>
      <button
        onClick={() => handleDeleteRowButton(index)}
        className="text-red-500 hover:text-red-700"
      >
        🗑
      </button>
    </td>
  );
};

export default ButtonColumn;
