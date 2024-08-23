import { AccountRecord } from './AccountData';

interface AccountTableFooterProps {
  accountData: AccountRecord[];
  setAccountData: React.Dispatch<React.SetStateAction<AccountRecord[]>>;
  setEditModeIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const AccountTableFooter = ({ accountData, setAccountData, setEditModeIndex }: AccountTableFooterProps) => {
  const addRow = () => {
    const lastRecord = accountData[accountData.length - 1];
    const newRecord: AccountRecord = {
      date: new Date(lastRecord.date),
      type: lastRecord.type,
      amount: lastRecord.amount,
      name: '',
      remarks: '',
    };
    setAccountData([...accountData, newRecord]);
    setEditModeIndex(accountData.length);
  };

  return (
    <button onClick={addRow} className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
      Add Row
    </button>
  );
};

export default AccountTableFooter;
