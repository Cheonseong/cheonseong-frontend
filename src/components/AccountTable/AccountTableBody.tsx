import React from 'react';
import { AccountRecord } from './AccountData';
import IndexColumn from './column/IndexColumn';
import AccountDateColumn from './column/in-normal-mode/AccountDateColumn';
import InoutTypeColumn from './column/in-normal-mode/InoutTypeColumn';
import AmountColumn from './column/in-normal-mode/AmountColumn';
import UserNameColumn from './column/in-normal-mode/UserNameColumn';
import DetailColumn from './column/in-normal-mode/DetailColumn';
import ButtonColumn from './column/in-normal-mode/ButtonColumn';
import CategoryNameColumn from './column/in-normal-mode/CategoryNameColumn';
import AccountDateColumnInEditMode from './column/in-edit-mode/AccountDateColumn';
import CategoryNameColumnInEditMode from './column/in-edit-mode/CategoryNameColumn';
import InoutTypeColumnInEditMode from './column/in-edit-mode/InoutTypeColumn';
import AmountColumnInEditMode from './column/in-edit-mode/AmountColumn';
import UserNameColumnInEditMode from './column/in-edit-mode/UserNameColumn';
import DetailColumnInEditMode from './column/in-edit-mode/DetailColumn';
import ButtonColumnInEditMode from './column/in-edit-mode/ButtonColumn';

interface AccountTableBodyProps {
  accountData: AccountRecord[];
  setAccountData: React.Dispatch<React.SetStateAction<AccountRecord[]>>;
  editModeIndex: number | null;
  setEditModeIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const AccountTableBody = ({
  accountData,
  setAccountData,
  editModeIndex,
  setEditModeIndex,
}: AccountTableBodyProps) => {
  const handleRowClick = (index: number) => {
    if (editModeIndex === null) {
      setEditModeIndex(index);
    } else if (editModeIndex !== index) {
      setEditModeIndex(index);
    }
  };

  const isInEditMode = (index: number) => {
    return editModeIndex === index;
  };

  return (
    <table className="w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="w-1/14 border border-gray-300 px-4 py-2">#</th>
          <th className="w-2/14 border border-gray-300 px-4 py-2">날짜</th>
          <th className="w-5/14 border border-gray-300 px-4 py-2">분류</th>
          <th className="w-2/14 border border-gray-300 px-4 py-2">수입/지출</th>
          <th className="w-1/14 border border-gray-300 px-4 py-2">금액</th>
          <th className="w-2/14 border border-gray-300 px-4 py-2">이름</th>
          <th className="w-3/14 border border-gray-300 px-4 py-2">비고</th>
          <th className="w-1/14 border border-gray-300 px-4 py-2"></th>
        </tr>
      </thead>
      <tbody>
        {accountData.map((record, index) => (
          <tr
            key={index}
            className={`text-center transition-all duration-200 ${
              isInEditMode(index) ? 'h-16 bg-gray-100' : 'h-12'
            } hover:bg-gray-100`}
            onClick={() => handleRowClick(index)}
          >
            <IndexColumn index={index} />
            {!isInEditMode(index) ? (
              <>
                <AccountDateColumn record={record} />
                <CategoryNameColumn record={record} />
                <InoutTypeColumn record={record} />
                <AmountColumn record={record} />
                <UserNameColumn record={record} />
                <DetailColumn record={record} />
                <ButtonColumn
                  index={index}
                  accountData={accountData}
                  setAccountData={setAccountData}
                  setEditModeIndex={setEditModeIndex}
                />
              </>
            ) : (
              <>
                <AccountDateColumnInEditMode
                  index={index}
                  record={record}
                  accountData={accountData}
                  setAccountData={setAccountData}
                />
                <CategoryNameColumnInEditMode
                  index={index}
                  record={record}
                  accountData={accountData}
                  setAccountData={setAccountData}
                />
                <InoutTypeColumnInEditMode
                  index={index}
                  record={record}
                  accountData={accountData}
                  setAccountData={setAccountData}
                />
                <AmountColumnInEditMode
                  index={index}
                  record={record}
                  accountData={accountData}
                  setAccountData={setAccountData}
                />
                <UserNameColumnInEditMode
                  index={index}
                  record={record}
                  accountData={accountData}
                  setAccountData={setAccountData}
                />
                <DetailColumnInEditMode
                  index={index}
                  record={record}
                  accountData={accountData}
                  setAccountData={setAccountData}
                />
                <ButtonColumnInEditMode setEditModeIndex={setEditModeIndex} />
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AccountTableBody;
