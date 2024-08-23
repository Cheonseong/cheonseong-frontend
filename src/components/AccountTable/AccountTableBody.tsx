import React from 'react';
import { AccountRecord } from './AccountData';
import IndexColumn from './column/IndexColumn';
import AccountDateColumn from './column/AccountDateColumn';
import InoutTypeColumn from './column/InoutTypeColumn';
import AmountColumn from './column/AmountColumn';
import UserNameColumn from './column/UserNameColumn';
import DetailColumn from './column/DetailColumn';
import ButtonColumn from './column/ButtonColumn';

interface AccountTableBodyProps {
  accountData: AccountRecord[];
  setAccountData: React.Dispatch<React.SetStateAction<AccountRecord[]>>;
  editModeIndex: number | null;
  setEditModeIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const AccountTableBody = ({ accountData, setAccountData, editModeIndex, setEditModeIndex }: AccountTableBodyProps) => {
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
              editModeIndex === index ? 'h-16 bg-gray-100' : 'h-12'
            } hover:bg-gray-100`}
            onClick={() => handleRowClick(index)}
          >
            <IndexColumn index={index} />
            <AccountDateColumn
              index={index}
              record={record}
              accountData={accountData}
              setAccountData={setAccountData}
              isInEditMode={isInEditMode(index)}
            />
            <td className="border border-gray-300 px-4 py-2">
              {/* {isInEditMode(index) ? (
                <input
                  type="text"
                  value={record.categoryName}
                  onChange={(e) => handleInputChange(index, 'categoryName', e.target.value)}
                  className="w-24 rounded border border-gray-300 px-2 py-1"
                  placeholder="분류"
                />
              ) : (
                record.categoryName
              )} */}
            </td>
            <InoutTypeColumn
              index={index}
              record={record}
              accountData={accountData}
              setAccountData={setAccountData}
              isInEditMode={isInEditMode(index)}
            />
            <AmountColumn
              index={index}
              record={record}
              accountData={accountData}
              setAccountData={setAccountData}
              isInEditMode={isInEditMode(index)}
            />
            <UserNameColumn
              index={index}
              record={record}
              accountData={accountData}
              setAccountData={setAccountData}
              isInEditMode={isInEditMode(index)}
            />
            <DetailColumn
              index={index}
              record={record}
              accountData={accountData}
              setAccountData={setAccountData}
              isInEditMode={isInEditMode(index)}
            />
            <ButtonColumn
              index={index}
              accountData={accountData}
              setAccountData={setAccountData}
              editModeIndex={editModeIndex}
              setEditModeIndex={setEditModeIndex}
              isInEditMode={isInEditMode(index)}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AccountTableBody;
