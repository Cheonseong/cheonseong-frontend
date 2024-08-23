import { INOUT_TYPE } from './constant';

interface AccountRecord {
  accountDate: Date;
  inoutType: keyof typeof INOUT_TYPE;
  amount: number;
  userName: string;
  detail?: string;
}

const initialAccountSampleData: AccountRecord[] = [
  {
    accountDate: new Date('2024-01-01'),
    inoutType: '수입',
    amount: 500000,
    userName: '이예찬',
    detail: 'Monthly salary',
  },
  {
    accountDate: new Date('2024-01-15'),
    inoutType: '수입',
    amount: 200000,
    userName: '김예찬',
    detail: 'Project A',
  },
  {
    accountDate: new Date('2024-01-20'),
    inoutType: '지출',
    amount: 150000,
    userName: '최예찬',
    detail: '',
  },
  {
    accountDate: new Date('2024-01-22'),
    inoutType: '지출',
    amount: 50000,
    userName: '박예찬',
    detail: 'Bus and subway',
  },
  {
    accountDate: new Date('2024-01-25'),
    inoutType: '지출',
    amount: 100000,
    userName: '정예찬',
    detail: '',
  },
];

const loadPreviousAccountData = () => {
  console.log('Loading previous account data...');
};

const loadNextAccountData = () => {
  console.log('Loading next account data...');
};

export type { AccountRecord };
export { initialAccountSampleData, loadPreviousAccountData, loadNextAccountData };
