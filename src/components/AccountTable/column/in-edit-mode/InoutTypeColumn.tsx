import { AccountRecord } from '../../AccountData';
import { accountTableCellStyle } from '../../AccountTableBody';

interface InoutTypeColumnInEditModeProps {
  index: number;
  record: AccountRecord;
  accountData: AccountRecord[];
  setAccountData: React.Dispatch<React.SetStateAction<AccountRecord[]>>;
}

const InoutTypeColumnInEditMode = ({
  index,
  record,
  accountData,
  setAccountData,
}: InoutTypeColumnInEditModeProps) => {
  const handleTypeChange = (index: number, type: '수입' | '지출') => {
    const updatedData = [...accountData];
    updatedData[index].inoutType = type;
    setAccountData(updatedData);
  };

  return (
    <td className={accountTableCellStyle}>
      {
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
      }
    </td>
  );
};

export default InoutTypeColumnInEditMode;
