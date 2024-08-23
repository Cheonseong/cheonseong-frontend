import { AccountRecord, loadNextAccountData, loadPreviousAccountData } from './AccountData';

interface AccountTableHeaderProps {
  accountData: AccountRecord[];
}

const AccountTableHeader = ({ accountData }: AccountTableHeaderProps) => {
  const totalIncome = accountData
    .filter((record) => record.inoutType === '수입')
    .reduce((sum, record) => sum + record.amount, 0);
  const totalOutcome = accountData
    .filter((record) => record.inoutType === '지출')
    .reduce((sum, record) => sum + record.amount, 0);
  const totalAmount = totalIncome - totalOutcome;

  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const week = Math.ceil(now.getDate() / 7);

  return (
    <div className="relative mb-4">
      <button onClick={loadPreviousAccountData} className="absolute left-0 top-1/2 -translate-y-1/2 px-4 py-2">
        <div className="size-0 border-y-8 border-r-8 border-y-transparent border-r-black"></div>
      </button>
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <h3 className="text-center text-lg font-semibold">{`${year}.${month} ${week}주차`}</h3>
        <div className="mt-2 flex items-center justify-around">
          <div className="ml-4">
            <p className="text-gray-700">합계</p>
            <p className="text-2xl font-bold">{totalAmount.toLocaleString()} 원</p>
          </div>
          <div className="mr-4 text-left">
            <p className="text-gray-700">수입계</p>
            <p className="text-xl font-semibold text-green-600">{totalIncome.toLocaleString()} 원</p>
            <div className="my-2" />
            <p className="text-gray-700">지출계</p>
            <p className="text-xl font-semibold text-red-600">{totalOutcome.toLocaleString()} 원</p>
          </div>
        </div>
      </div>
      <button onClick={loadNextAccountData} className="absolute right-0 top-1/2 -translate-y-1/2 px-4 py-2">
        <div className="size-0 border-y-8 border-l-8 border-y-transparent border-l-black"></div>
      </button>
    </div>
  );
};

export default AccountTableHeader;
