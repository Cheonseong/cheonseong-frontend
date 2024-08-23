import React, { useState } from 'react';

// Define the type for each financial record
interface FinancialRecord {
  date: Date; // Updated to use Date object
  type: '수입' | '지출';
  amount: number;
  name: string;
  remarks?: string;
}

// Sample data for the table with dates as Date objects
const initialFinancialData: FinancialRecord[] = [
  {
    date: new Date('2024-01-01'),
    type: '수입',
    amount: 500000,
    name: 'Salary',
    remarks: 'Monthly salary',
  },
  {
    date: new Date('2024-01-15'),
    type: '수입',
    amount: 200000,
    name: 'Freelance',
    remarks: 'Project A',
  },
  {
    date: new Date('2024-01-20'),
    type: '지출',
    amount: 150000,
    name: 'Groceries',
    remarks: 'Supermarket',
  },
  {
    date: new Date('2024-01-22'),
    type: '지출',
    amount: 50000,
    name: 'Transport',
    remarks: 'Bus and subway',
  },
  {
    date: new Date('2024-01-25'),
    type: '지출',
    amount: 100000,
    name: 'Entertainment',
    remarks: 'Movie and dinner',
  },
];

const FinancialTable: React.FC = () => {
  const [financialData, setFinancialData] =
    useState<FinancialRecord[]>(initialFinancialData);
  const [editableIndex, setEditableIndex] = useState<number | null>(null);

  const loadPreviousData = () => {
    console.log('Loading previous financial data...');
  };

  const loadNextData = () => {
    console.log('Loading next financial data...');
  };

  const totalIncome = financialData
    .filter((record) => record.type === '수입')
    .reduce((sum, record) => sum + record.amount, 0);
  const totalOutcome = financialData
    .filter((record) => record.type === '지출')
    .reduce((sum, record) => sum + record.amount, 0);
  const totalAmount = totalIncome - totalOutcome;

  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const week = Math.ceil(now.getDate() / 7);

  const handleRowClick = (index: number) => {
    if (editableIndex === null) {
      setEditableIndex(index);
    } else if (editableIndex !== index) {
      setEditableIndex(index);
    }
  };

  const handleInputChange = (
    index: number,
    field: keyof FinancialRecord,
    value: string | number | Date,
  ) => {
    const updatedData = [...financialData];
    if (field === 'amount') {
      updatedData[index].amount = Number(value);
    } else if (field === 'date') {
      updatedData[index].date = value as Date; // Update date as Date object
    } else {
      updatedData[index][field] = value as string;
    }
    setFinancialData(updatedData);
  };

  const handleTypeChange = (index: number, type: '수입' | '지출') => {
    const updatedData = [...financialData];
    updatedData[index].type = type;
    setFinancialData(updatedData);
  };

  const handleEditConfirm = () => {
    setEditableIndex(null);
  };

  const handleDeleteRow = (index: number) => {
    const updatedData = financialData.filter((_, i) => i !== index);
    setFinancialData(updatedData);
    if (editableIndex === index) {
      setEditableIndex(null); // Exit edit mode if the deleted row was in edit mode
    }
  };

  const addRow = () => {
    const lastRecord = financialData[financialData.length - 1];
    const newRecord: FinancialRecord = {
      date: new Date(lastRecord.date), // Copy the last date
      type: lastRecord.type, // Use last type (수입 or 지출)
      amount: lastRecord.amount, // Use last amount
      name: '',
      remarks: '',
    };
    setFinancialData([...financialData, newRecord]);
    setEditableIndex(financialData.length); // Enter edit mode for the new row
  };

  // New handlers for date manipulation
  const incrementDay = (index: number) => {
    const updatedData = [...financialData];
    updatedData[index].date.setDate(updatedData[index].date.getDate() + 1);
    setFinancialData(updatedData);
  };

  const decrementDay = (index: number) => {
    const updatedData = [...financialData];
    updatedData[index].date.setDate(updatedData[index].date.getDate() - 1);
    setFinancialData(updatedData);
  };

  const incrementAmount = (index: number) => {
    const updatedData = [...financialData];
    updatedData[index].amount += 10000;
    setFinancialData(updatedData);
  };

  const decrementAmount = (index: number) => {
    const updatedData = [...financialData];
    if (updatedData[index].amount >= 10000) {
      updatedData[index].amount -= 10000;
      setFinancialData(updatedData);
    }
  };

  return (
    <div className="container mx-auto mt-8 px-10">
      <div className="relative mb-4">
        <button
          onClick={loadPreviousData}
          className="absolute left-0 top-1/2 -translate-y-1/2 px-4 py-2"
        >
          <div className="size-0 border-y-8 border-r-8 border-y-transparent border-r-black"></div>
        </button>
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h3 className="text-center text-lg font-semibold">{`${year}.${month} ${week}주차`}</h3>
          <div className="mt-2 flex items-center justify-around">
            <div className="ml-4">
              <p className="text-gray-700">합계</p>
              <p className="text-2xl font-bold">
                {totalAmount.toLocaleString()} 원
              </p>
            </div>
            <div className="mr-4 text-left">
              <p className="text-gray-700">수입계</p>
              <p className="text-xl font-semibold text-green-600">
                {totalIncome.toLocaleString()} 원
              </p>
              <div className="my-2" />
              <p className="text-gray-700">지출계</p>
              <p className="text-xl font-semibold text-red-600">
                {totalOutcome.toLocaleString()} 원
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={loadNextData}
          className="absolute right-0 top-1/2 -translate-y-1/2 px-4 py-2"
        >
          <div className="size-0 border-y-8 border-l-8 border-y-transparent border-l-black"></div>
        </button>
      </div>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="w-1/14 border border-gray-300 px-4 py-2">#</th>
            <th className="w-2/14 border border-gray-300 px-4 py-2">날짜</th>
            <th className="w-2/14 border border-gray-300 px-4 py-2">
              수입/지출
            </th>
            <th className="w-2/14 border border-gray-300 px-4 py-2">금액</th>
            <th className="w-4/14 border border-gray-300 px-4 py-2">이름</th>
            <th className="w-2/14 border border-gray-300 px-4 py-2">비고</th>
            <th className="w-1/14 border border-gray-300 px-4 py-2">작업</th>
          </tr>
        </thead>
        <tbody>
          {financialData.map((record, index) => (
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
                    <p>{`${
                      record.date.getMonth() + 1
                    }월 ${record.date.getDate()}일 ${
                      ['일', '월', '화', '수', '목', '금', '토'][
                        record.date.getDay()
                      ]
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
                        record.type === '수입'
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 text-black'
                      }`}
                    >
                      수입
                    </button>
                    <button
                      onClick={() => handleTypeChange(index, '지출')}
                      className={`rounded px-4 py-1 ${
                        record.type === '지출'
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-200 text-black'
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
                      onChange={(e) =>
                        handleInputChange(index, 'amount', e.target.value)
                      }
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
                    onChange={(e) =>
                      handleInputChange(index, 'name', e.target.value)
                    }
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
                    onChange={(e) =>
                      handleInputChange(index, 'remarks', e.target.value)
                    }
                    className="w-full rounded border border-gray-300 px-2 py-1"
                    placeholder="비고"
                  />
                ) : (
                  record.remarks || '-'
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {editableIndex === index ? (
                  <button
                    onClick={handleEditConfirm}
                    className="text-green-500 hover:text-green-700"
                  >
                    ✔️
                  </button>
                ) : (
                  <button
                    onClick={() => handleDeleteRow(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    🗑️
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={addRow}
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
      >
        Add Row
      </button>
    </div>
  );
};

export default FinancialTable;
