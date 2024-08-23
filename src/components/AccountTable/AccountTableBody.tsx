import React from 'react';
import { AccountRecord } from './AccountData';

interface AccountTableBodyProps {
  accountData: AccountRecord[];
  setAccountData: React.Dispatch<React.SetStateAction<AccountRecord[]>>;
  editModeIndex: number | null;
  setEditModeIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const AccountTableBody = ({
  accountData,
  setAccountData,
  editModeIndex: editableIndex,
  setEditModeIndex: setEditModeIndex,
}: AccountTableBodyProps) => {
  const handleRowClick = (index: number) => {
    if (editableIndex === null) {
      setEditModeIndex(index);
    } else if (editableIndex !== index) {
      setEditModeIndex(index);
    }
  };

  const handleInputChange = (index: number, field: keyof AccountRecord, value: string | number | Date) => {
    const updatedData = [...accountData];
    if (field === 'amount') {
      updatedData[index].amount = Number(value);
    } else if (field === 'date') {
      updatedData[index].date = value as Date;
    } else if (field === 'type') {
      updatedData[index][field] = value as '수입' | '지출';
    } else {
      updatedData[index][field] = value as string;
    }
    setAccountData(updatedData);
  };

  const handleTypeChange = (index: number, type: '수입' | '지출') => {
    const updatedData = [...accountData];
    updatedData[index].type = type;
    setAccountData(updatedData);
  };

  const handleEditConfirm = () => {
    setEditModeIndex(null);
  };

  const handleDeleteRow = (index: number) => {
    const updatedData = accountData.filter((_, i) => i !== index);
    setAccountData(updatedData);
    if (editableIndex === index) {
      setEditModeIndex(null);
    }
  };

  const incrementDay = (index: number) => {
    const updatedData = [...accountData];
    updatedData[index].date.setDate(updatedData[index].date.getDate() + 1);
    setAccountData(updatedData);
  };

  const decrementDay = (index: number) => {
    const updatedData = [...accountData];
    updatedData[index].date.setDate(updatedData[index].date.getDate() - 1);
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
    <table className="w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="w-1/14 border border-gray-300 px-4 py-2">#</th>
          <th className="w-2/14 border border-gray-300 px-4 py-2">날짜</th>
          <th className="w-2/14 border border-gray-300 px-4 py-2">수입/지출</th>
          <th className="w-2/14 border border-gray-300 px-4 py-2">금액</th>
          <th className="w-4/14 border border-gray-300 px-4 py-2">이름</th>
          <th className="w-2/14 border border-gray-300 px-4 py-2">비고</th>
          <th className="w-1/14 border border-gray-300 px-4 py-2">작업</th>
        </tr>
      </thead>
      <tbody>
        {accountData.map((record, index) => (
          <tr
            key={index}
            className={`text-center transition-all duration-200 ${
              editableIndex === index ? 'h-16 bg-gray-100' : 'h-12'
            } hover:bg-gray-100`}
            onClick={() => handleRowClick(index)}
          >
            <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
            <td className="border border-gray-300 px-4 py-2">
              {editableIndex === index ? (
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => decrementDay(index)}
                    className="border-b-6 mb-1 size-0 border-x-4 border-x-transparent border-b-black"
                  ></button>
                  <p>{`${record.date.getMonth() + 1}월 ${record.date.getDate()}일 ${
                    ['일', '월', '화', '수', '목', '금', '토'][record.date.getDay()]
                  }`}</p>
                  <button
                    onClick={() => incrementDay(index)}
                    className="border-t-6 mt-1 size-0 border-x-4 border-x-transparent border-t-black"
                  ></button>
                </div>
              ) : (
                `${record.date.getMonth() + 1}/${record.date.getDate()}`
              )}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {editableIndex === index ? (
                <div className="flex justify-center">
                  <button
                    onClick={() => handleTypeChange(index, '수입')}
                    className={`rounded px-4 py-1 ${
                      record.type === '수입' ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'
                    }`}
                  >
                    수입
                  </button>
                  <button
                    onClick={() => handleTypeChange(index, '지출')}
                    className={`rounded px-4 py-1 ${
                      record.type === '지출' ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'
                    }`}
                  >
                    지출
                  </button>
                </div>
              ) : (
                record.type
              )}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {editableIndex === index ? (
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => decrementAmount(index)}
                    className="border-b-6 mb-1 size-0 border-x-4 border-x-transparent border-b-black"
                  ></button>
                  <input
                    type="number"
                    value={record.amount}
                    onChange={(e) => handleInputChange(index, 'amount', e.target.value)}
                    className="w-full rounded border border-gray-300 px-2 py-1 text-center"
                  />
                  <button
                    onClick={() => incrementAmount(index)}
                    className="border-t-6 mt-1 size-0 border-x-4 border-x-transparent border-t-black"
                  ></button>
                </div>
              ) : (
                record.amount.toLocaleString()
              )}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {editableIndex === index ? (
                <input
                  type="text"
                  value={record.name}
                  onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                  className="w-full rounded border border-gray-300 px-2 py-1"
                  placeholder="이름"
                />
              ) : (
                record.name
              )}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {editableIndex === index ? (
                <input
                  type="text"
                  value={record.remarks || ''}
                  onChange={(e) => handleInputChange(index, 'remarks', e.target.value)}
                  className="w-full rounded border border-gray-300 px-2 py-1"
                  placeholder="비고"
                />
              ) : (
                record.remarks || '-'
              )}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {editableIndex === index ? (
                <button onClick={handleEditConfirm} className="text-green-500 hover:text-green-700">
                  ✔️
                </button>
              ) : (
                <button onClick={() => handleDeleteRow(index)} className="text-red-500 hover:text-red-700">
                  🗑️
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AccountTableBody;
