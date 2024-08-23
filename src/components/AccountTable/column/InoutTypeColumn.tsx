import { AccountRecord } from '../AccountData';

interface InoutTypeColumnProps {
  index: number;
  record: AccountRecord;
  accountData: AccountRecord[];
  setAccountData: React.Dispatch<React.SetStateAction<AccountRecord[]>>;
  isInEditMode: boolean;
}

const InoutTypeColumn = ({ index, record, accountData, setAccountData, isInEditMode }: InoutTypeColumnProps) => {
  const handleTypeChange = (index: number, type: '수입' | '지출') => {
    const updatedData = [...accountData];
    updatedData[index].inoutType = type;
    setAccountData(updatedData);
  };

  return (
    <td className="border border-gray-300 px-4 py-2">
      {isInEditMode ? (
        <div className="flex justify-center">
          <button
            onClick={() => handleTypeChange(index, '수입')}
            className={`rounded px-4 py-1 ${
              record.inoutType === '수입' ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'
            }`}
          >
            수입
          </button>
          <button
            onClick={() => handleTypeChange(index, '지출')}
            className={`rounded px-4 py-1 ${
              record.inoutType === '지출' ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'
            }`}
          >
            지출
          </button>
        </div>
      ) : (
        <p className={`font-semibold ${record.inoutType === '수입' ? 'text-green-500' : 'text-red-500'}`}>
          {record.inoutType}
        </p>
      )}
    </td>
  );
};

export default InoutTypeColumn;
