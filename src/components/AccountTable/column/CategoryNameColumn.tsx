import { AccountRecord } from '../AccountData';

interface CategoryNameColumnProps {
  index: number;
  record: AccountRecord;
  accountData: AccountRecord[];
  setAccountData: React.Dispatch<React.SetStateAction<AccountRecord[]>>;
  isInEditMode: boolean;
}

const CategoryNameColumn = ({
  index,
  record,
  accountData,
  setAccountData,
  isInEditMode,
}: CategoryNameColumnProps) => {
  const handleInputChange = (index: number, value: string) => {
    const updatedData = [...accountData];
    updatedData[index].categoryName = value;
    setAccountData(updatedData);
  };

  return (
    <td className="border border-gray-300 px-4 py-2">
      {isInEditMode ? (
        <input
          type="text"
          value={record.categoryName}
          onChange={(e) => handleInputChange(index, e.target.value)}
          className="w-24 rounded border border-gray-300 px-2 py-1"
          placeholder="분류"
        />
      ) : (
        record.categoryName
      )}
    </td>
  );
};

export default CategoryNameColumn;
