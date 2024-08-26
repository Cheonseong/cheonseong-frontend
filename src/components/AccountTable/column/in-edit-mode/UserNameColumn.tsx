import { AccountRecord, userSampleData } from '../../AccountData';
import { accountTableCellStyle } from '../../AccountTableBody';
import AutoCompletionInput from '../../auto-completion/AutoCompletionInput';

interface UserNameColumnInEditModeProps {
  index: number;
  record: AccountRecord;
  accountData: AccountRecord[];
  setAccountData: React.Dispatch<React.SetStateAction<AccountRecord[]>>;
}

const UserNameColumnInEditMode = ({
  index,
  record,
  accountData,
  setAccountData,
}: UserNameColumnInEditModeProps) => {
  const handleInputChange = (index: number, value: string) => {
    const updatedData = [...accountData];
    updatedData[index].userName = value;
    setAccountData(updatedData);
  };

  return (
    <td className={accountTableCellStyle}>
      {/* <input
        type="text"
        value={record.userName}
        onChange={(e) => handleInputChange(index, e.target.value)}
        className="w-24 rounded border border-gray-300 px-2 py-1"
        placeholder="이름"
      /> */}

      <AutoCompletionInput
        inputValue={record.userName}
        inputOnChange={(value) => handleInputChange(index, value)}
        inputPlaceholder="이름"
        inputWidth={32}
        data={userSampleData}
      />
    </td>
  );
};

export default UserNameColumnInEditMode;
