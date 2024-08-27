import { AccountRecord } from '../../data/AccountData';
import { accountTableCellStyle } from '../../AccountTableBody';

interface UserNameColumnProps {
  record: AccountRecord;
}

const UserNameColumn = ({ record }: UserNameColumnProps) => {
  return <td className={accountTableCellStyle}>{record.userName}</td>;
};

export default UserNameColumn;
