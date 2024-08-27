import { getLocaleString } from '../../../../utils/date';
import { AccountRecord } from '../../data/AccountData';
import { accountTableCellStyle } from '../../AccountTableBody';
import UpwardControlButton from '../../../common/button/control-button/UpwardControlButton';
import DownwardControlButton from '../../../common/button/control-button/DownwardControlButton';

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
          <UpwardControlButton onClick={() => incrementDay(index)} />

          <p>{getLocaleString(record.accountDate)}</p>

          <DownwardControlButton onClick={() => decrementDay(index)} />
        </div>
      }
    </td>
  );
};

export default AccountDateColumnInEditMode;
