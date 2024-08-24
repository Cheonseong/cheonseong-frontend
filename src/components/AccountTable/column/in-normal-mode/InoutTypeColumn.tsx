import { AccountRecord } from '../../AccountData';

interface InoutTypeColumnProps {
  record: AccountRecord;
}

const InoutTypeColumn = ({ record }: InoutTypeColumnProps) => {
  return (
    <td className="border border-gray-300 px-4 py-2">
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
