import { AccountRecord } from '../../AccountData';
import { accountTableCellStyle } from '../../AccountTableBody';

interface DetailColumnProps {
  record: AccountRecord;
}

const DetailColumn = ({ record }: DetailColumnProps) => {
  return <td className={accountTableCellStyle}>{record.detail || '-'}</td>;
};

export default DetailColumn;
