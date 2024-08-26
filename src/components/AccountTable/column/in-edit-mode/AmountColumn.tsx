import { toKoreanPronunciation } from '../../../../utils/currency';
import { AccountRecord } from '../../AccountData';
import { accountTableCellStyle } from '../../AccountTableBody';

interface AmountColumnInEditModeProps {
  index: number;
  record: AccountRecord;
  accountData: AccountRecord[];
  setAccountData: React.Dispatch<React.SetStateAction<AccountRecord[]>>;
}

const AmountColumnInEditMode = ({
  index,
  record,
  accountData,
  setAccountData,
}: AmountColumnInEditModeProps) => {
  const handleInputChange = (index: number, value: string | number | Date) => {
    const updatedData = [...accountData];
    updatedData[index].amount = Number(value);
    setAccountData(updatedData);
  };

  const incrementAmount = (index: number) => {
    const updatedData = [...accountData];
    updatedData[index].amount += 10000;
    setAccountData(updatedData);
  };

  const decrementAmount = (index: number) => {
    const updatedData = [...accountData];
    if (updatedData[index].amount >= 10000) {
      updatedData[index].amount -= 10000;
      setAccountData(updatedData);
    }
  };

  return (
    <td className={accountTableCellStyle}>
      <div className="flex flex-col items-center">
        <button
          onClick={() => incrementAmount(index)}
          className="mb-3 size-0 border-x-[7px] border-b-[10px] border-x-transparent border-b-gray-700"
        ></button>
        <input
          type="number"
          value={record.amount}
          onChange={(e) => handleInputChange(index, e.target.value)}
          className="w-32 rounded border border-gray-300 px-2 py-1 text-center"
        />{' '}
        <p className="text-sm">{`${toKoreanPronunciation(record.amount)} 원`}</p>
        <button
          onClick={() => decrementAmount(index)}
          className="mt-3 size-0 border-x-[7px] border-t-[10px] border-x-transparent border-t-gray-700"
        ></button>
      </div>
    </td>
  );
};

export default AmountColumnInEditMode;
