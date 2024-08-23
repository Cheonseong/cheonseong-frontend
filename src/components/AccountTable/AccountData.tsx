interface AccountRecord {
  date: Date;
  type: '수입' | '지출';
  amount: number;
  name: string;
  remarks?: string;
}

const initialAccountSampleData: AccountRecord[] = [
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

export type { AccountRecord };
export { initialAccountSampleData };
