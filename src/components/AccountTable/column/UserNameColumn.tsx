import { AccountRecord } from '../AccountData';

interface UserNameColumnProps {
  index: number;
  record: AccountRecord;
  accountData: AccountRecord[];
  setAccountData: React.Dispatch<React.SetStateAction<AccountRecord[]>>;
  isInEditMode: boolean;
}

const UserNameColumn = ({
  index,
  record,
  accountData,
  setAccountData,
  isInEditMode,
}: UserNameColumnProps) => {
  const handleInputChange = (index: number, value: string) => {
    const updatedData = [...accountData];
    updatedData[index].userName = value;
    setAccountData(updatedData);
  };

  return (
    <td className="border border-gray-300 px-4 py-2">
      {isInEditMode ? (
        <input
          type="text"
          value={record.userName}
          onChange={(e) => handleInputChange(index, e.target.value)}
          className="w-24 rounded border border-gray-300 px-2 py-1"
          placeholder="이름"
        />
      ) : (
        record.userName
      )}
    </td>
  );
};

export default UserNameColumn;
