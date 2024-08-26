import { AccountRecord } from '../../AccountData';
import { accountTableCellStyle } from '../../AccountTableBody';

interface AmountColumnProps {
  record: AccountRecord;
}

const AmountColumn = ({ record }: AmountColumnProps) => {
  return <td className={accountTableCellStyle}>{record.amount.toLocaleString()} 원</td>;
};

export default AmountColumn;
