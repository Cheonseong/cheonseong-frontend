import React from 'react';
import { AccountRecord } from './AccountData';
import { INOUT_TYPE } from './constant';
import { getLocaleString } from '../../utils/date';
import { toKoreanPronunciation } from '../../utils/currency';

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

  const handleInputChange = (index: number, field: keyof AccountRecord, value: string | number | Date) => {
    const updatedData = [...accountData];
    if (field === 'amount') {
      updatedData[index].amount = Number(value);
    } else if (field === 'accountDate') {
      updatedData[index].accountDate = value as Date;
    } else if (field === 'inoutType') {
      updatedData[index][field] = value as keyof typeof INOUT_TYPE;
    } else {
      updatedData[index][field] = value as string;
    }
    setAccountData(updatedData);
  };

  const handleTypeChange = (index: number, type: '수입' | '지출') => {
    const updatedData = [...accountData];
    updatedData[index].inoutType = type;
    setAccountData(updatedData);
  };

  const handleEditConfirmButton = () => {
    setEditModeIndex(null);
  };

  const handleDeleteRowButton = (index: number) => {
    const confirmed = confirm('정말 삭제하시겠습니까?');
    if (!confirmed) return;

    const updatedData = accountData.filter((_, i) => i !== index);
    setAccountData(updatedData);
    if (editModeIndex === index) {
      //
    }
    setEditModeIndex(null);
  };

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
            <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
            <td className="border border-gray-300 px-4 py-2">
              {isInEditMode(index) ? (
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
            <td className="border border-gray-300 px-4 py-2">
              {isInEditMode(index) ? (
                <input
                  type="text"
                  value={record.categoryName}
                  onChange={(e) => handleInputChange(index, 'categoryName', e.target.value)}
                  className="w-24 rounded border border-gray-300 px-2 py-1"
                  placeholder="분류"
                />
              ) : (
                record.categoryName
              )}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {isInEditMode(index) ? (
                <div className="flex justify-center">
                  <button
                    onClick={() => handleTypeChange(index, '수입')}
                    className={`rounded px-4 py-1 ${
                      record.inoutType === '수입' ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'
                    }`}
                  >
                    수입
                  </button>
                  <button
                    onClick={() => handleTypeChange(index, '지출')}
                    className={`rounded px-4 py-1 ${
                      record.inoutType === '지출' ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'
                    }`}
                  >
                    지출
                  </button>
                </div>
              ) : (
                <p className={`font-semibold ${record.inoutType === '수입' ? 'text-green-500' : 'text-red-500'}`}>
                  {record.inoutType}
                </p>
              )}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {isInEditMode(index) ? (
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => incrementAmount(index)}
                    className="mb-3 size-0 border-x-[7px] border-b-[10px] border-x-transparent border-b-gray-700"
                  ></button>
                  <input
                    type="number"
                    value={record.amount}
                    onChange={(e) => handleInputChange(index, 'amount', e.target.value)}
                    className="w-32 rounded border border-gray-300 px-2 py-1 text-center"
                  />{' '}
                  <p className="text-sm">{`${toKoreanPronunciation(record.amount)} 원`}</p>
                  <button
                    onClick={() => decrementAmount(index)}
                    className="mt-3 size-0 border-x-[7px] border-t-[10px] border-x-transparent border-t-gray-700"
                  ></button>
                </div>
              ) : (
                `${record.amount.toLocaleString()} 원`
              )}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {isInEditMode(index) ? (
                <input
                  type="text"
                  value={record.userName}
                  onChange={(e) => handleInputChange(index, 'userName', e.target.value)}
                  className="w-24 rounded border border-gray-300 px-2 py-1"
                  placeholder="이름"
                />
              ) : (
                record.userName
              )}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {isInEditMode(index) ? (
                <input
                  type="text"
                  value={record.detail || ''}
                  onChange={(e) => handleInputChange(index, 'detail', e.target.value)}
                  className="w-full rounded border border-gray-300 px-2 py-1"
                  placeholder="비고"
                />
              ) : (
                record.detail || '-'
              )}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {isInEditMode(index) ? (
                <button onClick={handleEditConfirmButton} className="text-green-500 hover:text-green-700">
                  ✔️
                </button>
              ) : (
                <button onClick={() => handleDeleteRowButton(index)} className="text-red-500 hover:text-red-700">
                  🗑
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
