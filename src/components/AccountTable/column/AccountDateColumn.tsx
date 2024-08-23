import { getLocaleString } from '../../../utils/date';
import { AccountRecord } from '../AccountData';

interface AccountDateColumnProps {
  index: number;
  record: AccountRecord;
  accountData: AccountRecord[];
  setAccountData: React.Dispatch<React.SetStateAction<AccountRecord[]>>;
  isInEditMode: boolean;
}

const AccountDateColumn = ({ index, record, accountData, setAccountData, isInEditMode }: AccountDateColumnProps) => {
  const incrementDay = (index: number) => {
    const updatedData = [...accountData];
    updatedData[index].accountDate.setDate(updatedData[index].accountDate.getDate() + 1);
    setAccountData(updatedData);
  };

  const decrementDay = (index: number) => {
    const updatedData = [...accountData];
    updatedData[index].accountDate.setDate(updatedData[index].accountDate.getDate() - 1);
    setAccountData(updatedData);
  };

  return (
    <td className="border border-gray-300 px-4 py-2">
      {isInEditMode ? (
        <div className="flex flex-col items-center">
          <button
            onClick={() => incrementDay(index)}
            className="mb-3 size-0 border-x-[7px] border-b-[10px] border-x-transparent border-b-gray-700"
          ></button>
          <p>{getLocaleString(record.accountDate)}</p>
          <button
            onClick={() => decrementDay(index)}
            className="mt-3 size-0 border-x-[7px] border-t-[10px] border-x-transparent border-t-gray-700"
          ></button>
        </div>
      ) : (
        <p>{getLocaleString(record.accountDate)}</p>
      )}
    </td>
  );
};

export default AccountDateColumn;
