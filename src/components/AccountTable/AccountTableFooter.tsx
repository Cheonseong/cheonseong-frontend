import { useEffect, useRef } from 'react';
import { AccountRecord } from './AccountData';

interface AccountTableFooterProps {
  accountData: AccountRecord[];
  setAccountData: React.Dispatch<React.SetStateAction<AccountRecord[]>>;
  setEditModeIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const AccountTableFooter = ({
  accountData,
  setAccountData,
  setEditModeIndex,
}: AccountTableFooterProps) => {
  const bottomOfDocumentRef = useRef<HTMLDivElement>(null);

  const addRow = () => {
    const lastRecord = accountData[accountData.length - 1];
    const newRecord: AccountRecord = {
      accountId: undefined,
      accountDate: new Date(lastRecord.accountDate),
      categoryName: lastRecord.categoryName,
      inoutType: lastRecord.inoutType,
      amount: lastRecord.amount,
      userName: '',
      detail: '',
    };
    setAccountData([...accountData, newRecord]);
    setEditModeIndex(accountData.length);
    setTimeout(() => scrollToBottom(), 10);
  };

  const addMultipleRows = () => {
    console.log('add multiple rows');
  };

  const save = () => {
    console.log('save!!');
  };

  const scrollToBottom = () => {
    if (bottomOfDocumentRef.current) {
      bottomOfDocumentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="relative mb-12">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
          <div className="mt-2 flex items-center justify-between">
            <div className="flex justify-center">
              <button
                onClick={addRow}
                className="mx-2 my-4 rounded bg-sky-600 px-4 py-2 text-white"
              >
                항목 추가
              </button>

              <button
                onClick={addMultipleRows}
                className="mx-2 my-4 rounded  bg-sky-600 px-4 py-2 text-white"
              >
                항목 다수 추가
              </button>
            </div>
            <div className="mr-4">
              <button onClick={save} className="mx-2 my-4 rounded  bg-sky-600 px-4 py-2 text-white">
                저장
              </button>
            </div>
          </div>
        </div>
      </div>
      <div ref={bottomOfDocumentRef}></div>
    </>
  );
};

export default AccountTableFooter;
