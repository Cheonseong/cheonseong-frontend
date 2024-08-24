import { AccountRecord } from '../../AccountData';

interface DetailColumnProps {
  record: AccountRecord;
}

const DetailColumn = ({ record }: DetailColumnProps) => {
  return <td className="border border-gray-300 px-4 py-2">{record.detail || '-'}</td>;
};

export default DetailColumn;
