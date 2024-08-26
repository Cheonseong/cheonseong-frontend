import { FocusEvent } from 'react';
import { AccountRecord } from '../../AccountData';
import { accountTableCellStyle } from '../../AccountTableBody';

interface DetailColumnInEditModeProps {
  index: number;
  record: AccountRecord;
  accountData: AccountRecord[];
  setAccountData: React.Dispatch<React.SetStateAction<AccountRecord[]>>;
}

const DetailColumnInEditMode = ({
  index,
  record,
  accountData,
  setAccountData,
}: DetailColumnInEditModeProps) => {
  const handleInputChange = (index: number, value: string) => {
    const updatedData = [...accountData];
    updatedData[index].detail = value;
    setAccountData(updatedData);
  };

  const handleFocus = (e: FocusEvent<HTMLTextAreaElement>): void => {
    e.target.select();
  };

  return (
    <td className={accountTableCellStyle}>
      {
        <textarea
          value={record.detail || ''}
          onChange={(e) => handleInputChange(index, e.target.value)}
          onFocus={handleFocus}
          className="size-full min-h-[80px] resize-none rounded border border-gray-300 px-2 py-1"
          placeholder="비고"
        />
      }
    </td>
  );
};

export default DetailColumnInEditMode;
