import { AccountRecord, userSampleData } from '../../data/AccountData';
import { accountTableCellStyle } from '../../AccountTableBody';
import CompactErrorSign from '../../../common/warning-sign/CompactWarningSign';

interface UserNameColumnProps {
  record: AccountRecord;
}

const UserNameColumn = ({ record }: UserNameColumnProps) => {
  return (
    <>
      <td className={accountTableCellStyle}>
        {record.userName === '' ? (
          <>
            <CompactErrorSign fontSize="text-base" errorMessage="이름이 선택되지 않았습니다." />
            <span>{record.userName}</span>
          </>
        ) : userSampleData.filter((x) => x.value === record.userName).length === 0 ? (
          <>
            <CompactErrorSign fontSize="text-base" errorMessage="등록되지 않은 이름입니다." />
            <span>{record.userName}</span>
          </>
        ) : (
          record.userName
        )}
      </td>
    </>
  );
};

export default UserNameColumn;
