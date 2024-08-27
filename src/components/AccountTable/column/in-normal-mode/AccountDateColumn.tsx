import { getLocaleString } from '../../../../utils/date';
import { AccountRecord } from '../../data/AccountData';
import { accountTableCellStyle } from '../../AccountTableBody';

interface AccountDateColumnProps {
  record: AccountRecord;
}

const AccountDateColumn = ({ record }: AccountDateColumnProps) => {
  return (
    <td className={accountTableCellStyle}>
      <p>{getLocaleString(record.accountDate)}</p>
    </td>
  );
};

export default AccountDateColumn;
