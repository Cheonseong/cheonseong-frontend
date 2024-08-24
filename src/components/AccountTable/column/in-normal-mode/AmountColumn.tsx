import { AccountRecord } from '../../AccountData';

interface AmountColumnProps {
  record: AccountRecord;
}

const AmountColumn = ({ record }: AmountColumnProps) => {
  return <td className="border border-gray-300 px-4 py-2">{record.amount.toLocaleString()} 원</td>;
};

export default AmountColumn;
