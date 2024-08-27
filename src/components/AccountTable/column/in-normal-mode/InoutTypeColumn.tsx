import { AccountRecord } from '../../data/AccountData';
import { accountTableCellStyle } from '../../AccountTableBody';

interface InoutTypeColumnProps {
  record: AccountRecord;
}

const InoutTypeColumn = ({ record }: InoutTypeColumnProps) => {
  return (
    <td className={accountTableCellStyle}>
      <p
        className={`font-semibold ${
          record.inoutType === '수입' ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {record.inoutType}
      </p>
    </td>
  );
};

export default InoutTypeColumn;
