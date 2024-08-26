import { getLocaleString } from '../../../../utils/date';
import { AccountRecord } from '../../AccountData';
import { accountTableCellStyle } from '../../AccountTableBody';

interface AccountDateColumnInEditModeProps {
  index: number;
  record: AccountRecord;
  accountData: AccountRecord[];
  setAccountData: React.Dispatch<React.SetStateAction<AccountRecord[]>>;
}

const AccountDateColumnInEditMode = ({
  index,
  record,
  accountData,
  setAccountData,
}: AccountDateColumnInEditModeProps) => {
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
    <td className={accountTableCellStyle}>
      {
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
      }
    </td>
  );
};

export default AccountDateColumnInEditMode;
