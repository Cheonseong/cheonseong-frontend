import { AccountRecord, userSampleData } from '../../data/AccountData';
import { accountTableCellStyle } from '../../AccountTableBody';
import CompactErrorSign from '../../../common/error-sign/CompactErrorSign';
import { ErrorMessage } from '../../../common/error-sign/errorMessage';

interface UserNameColumnProps {
  record: AccountRecord;
}

const UserNameColumn = ({ record }: UserNameColumnProps) => {
  return (
    <>
      <td className={accountTableCellStyle}>
        {record.userName === '' ? (
          <>
            <CompactErrorSign fontSize="text-base" errorMessage={ErrorMessage.USER_NOT_SELECTED} />
            <span>{record.userName}</span>
          </>
        ) : userSampleData.filter((x) => x.value === record.userName).length === 0 ? (
          <>
            <CompactErrorSign
              fontSize="text-base"
              errorMessage={ErrorMessage.USER_NOT_REGISTERED}
            />
            <span className="text-rose-600">{record.userName}</span>
          </>
        ) : (
          record.userName
        )}
      </td>
    </>
  );
};

export default UserNameColumn;
