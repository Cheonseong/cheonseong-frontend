import { AccountRecord } from '../../AccountData';

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

  return (
    <td className="border border-gray-300 px-4 py-2">
      {
        <textarea
          value={record.detail || ''}
          onChange={(e) => handleInputChange(index, e.target.value)}
          className="size-full min-h-[80px] resize-none rounded border border-gray-300 px-2 py-1"
          placeholder="비고"
        />
      }
    </td>
  );
};

export default DetailColumnInEditMode;
