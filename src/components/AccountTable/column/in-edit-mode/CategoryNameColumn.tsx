import { FocusEvent } from 'react';
import { AccountRecord } from '../../AccountData';
import { accountTableCellStyle } from '../../AccountTableBody';

interface CategoryNameColumnInEditModeProps {
  index: number;
  record: AccountRecord;
  accountData: AccountRecord[];
  setAccountData: React.Dispatch<React.SetStateAction<AccountRecord[]>>;
}

const CategoryNameColumnInEditMode = ({
  index,
  record,
  accountData,
  setAccountData,
}: CategoryNameColumnInEditModeProps) => {
  const handleInputChange = (index: number, value: string) => {
    const updatedData = [...accountData];
    updatedData[index].categoryName = value;
    setAccountData(updatedData);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>): void => {
    e.target.select();
  };

  return (
    <td className={accountTableCellStyle}>
      <input
        type="text"
        value={record.categoryName}
        onChange={(e) => handleInputChange(index, e.target.value)}
        onFocus={handleFocus}
        className="w-24 rounded border border-gray-300 px-2 py-1"
        placeholder="분류"
      />
    </td>
  );
};

export default CategoryNameColumnInEditMode;
