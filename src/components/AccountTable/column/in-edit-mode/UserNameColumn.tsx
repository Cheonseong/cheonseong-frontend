import { AccountRecord, userSampleData } from '../../data/AccountData';
import { accountTableCellStyle } from '../../AccountTableBody';
import AutoCompletionInput from '../../../common/auto-completion-input/AutoCompletionInput';
import RegisterUserModal, { RegisterUserModalRef } from '../../../common/modal/RegisterUserModal';
import { useEffect, useRef } from 'react';
import VerboseErrorSign from '../../../common/error-sign/VerboseErrorSign';
import { ErrorMessage } from '../../../common/error-sign/errorMessage';

const UserNameColumnErrorSign = ({ record }: { [key: string]: AccountRecord }) => {
  return record.userName === '' ? (
    <>
      <VerboseErrorSign fontSize="text-xs" errorMessage={ErrorMessage.USER_NOT_SELECTED} />
      <span>{record.userName}</span>
    </>
  ) : userSampleData.filter((x) => x.value === record.userName).length === 0 ? (
    <>
      <VerboseErrorSign fontSize="text-xs" errorMessage={ErrorMessage.USER_NOT_REGISTERED} />
    </>
  ) : (
    <></>
  );
};

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
  const modalRef = useRef<RegisterUserModalRef>(null);

  useEffect(() => {
    if (!modalRef.current) {
      console.error('modalRef is not attached');
    }
  }, []);

  const openModal = (value: string) => {
    if (modalRef.current) {
      modalRef.current.openModal(value);
    }
  };

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
        addNewRecordFn={(value) => {
          openModal(value);
        }}
        data={userSampleData}
      />

      <UserNameColumnErrorSign record={record} />

      <RegisterUserModal
        ref={modalRef}
        onRegister={(newUserName) => {
          // TODO: request to server
          console.log(`user ${newUserName} is successfully registered!`);
        }}
      />
    </td>
  );
};

export default UserNameColumnInEditMode;
