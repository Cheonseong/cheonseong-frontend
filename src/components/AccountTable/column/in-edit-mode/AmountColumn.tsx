import { FocusEvent } from 'react';
import { toKoreanPronunciation } from '../../../../utils/currency';
import { AccountRecord } from '../../data/AccountData';
import { accountTableCellStyle } from '../../AccountTableBody';
import UpwardControlButton from '../../../common/button/control-button/UpwardControlButton';
import DownwardControlButton from '../../../common/button/control-button/DownwardControlButton';

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

  const handleFocus = (e: FocusEvent<HTMLInputElement>): void => {
    e.target.select();
  };

  return (
    <td className={accountTableCellStyle}>
      <div className="flex flex-col items-center">
        <UpwardControlButton onClick={() => incrementAmount(index)} />
        <input
          type="number"
          value={record.amount}
          onChange={(e) => handleInputChange(index, e.target.value)}
          onFocus={handleFocus}
          className="w-32 rounded border border-gray-300 px-2 py-1 text-center"
        />{' '}
        <p className="text-sm">{`${toKoreanPronunciation(record.amount)} 원`}</p>
        <DownwardControlButton onClick={() => decrementAmount(index)} />
      </div>
    </td>
  );
};

export default AmountColumnInEditMode;
