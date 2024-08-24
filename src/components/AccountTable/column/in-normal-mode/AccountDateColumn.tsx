import { getLocaleString } from '../../../../utils/date';
import { AccountRecord } from '../../AccountData';

interface AccountDateColumnProps {
  record: AccountRecord;
}

const AccountDateColumn = ({ record }: AccountDateColumnProps) => {
  return (
    <td className="border border-gray-300 px-4 py-2">
      <p>{getLocaleString(record.accountDate)}</p>
    </td>
  );
};

export default AccountDateColumn;
