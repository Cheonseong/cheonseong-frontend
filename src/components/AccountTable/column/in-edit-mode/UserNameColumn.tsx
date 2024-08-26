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
      <AutoCompletionInput
        inputValue={record.userName}
        inputOnChange={(value) => handleInputChange(index, value)}
        inputPlaceholder="이름"
        inputWidth={32}
        addNewRecordFn={(value) => console.log(`사용자 ${value}을(를) 등록합니다.`)}
        data={userSampleData}
      />
    </td>
  );
};

export default UserNameColumnInEditMode;
