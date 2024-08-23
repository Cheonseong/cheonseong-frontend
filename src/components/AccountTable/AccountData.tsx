import { INOUT_TYPE } from './constant';

interface AccountRecord {
  accountId: string | undefined;
  accountDate: Date;
  categoryName: string;
  inoutType: keyof typeof INOUT_TYPE;
  amount: number;
  userName: string;
  detail?: string;
}

const initialAccountSampleData: AccountRecord[] = [
  {
    accountId: 'A240101_1',
    accountDate: new Date('2024-01-01'),
    categoryName: '감사',
    inoutType: '수입',
    amount: 500000,
    userName: '이예찬',
    detail: 'Monthly salary',
  },
  {
    accountId: 'A240115_21',
    accountDate: new Date('2024-01-15'),
    categoryName: '장학',
    inoutType: '수입',
    amount: 200000,
    userName: '김예찬',
    detail: 'Project A',
  },
  {
    accountId: 'A240120_14',
    accountDate: new Date('2024-01-20'),
    categoryName: '예탁적금',
    inoutType: '지출',
    amount: 150000,
    userName: '최예찬',
    detail: '',
  },
  {
    accountId: 'A240122_2',
    accountDate: new Date('2024-01-22'),
    categoryName: '선교',
    inoutType: '지출',
    amount: 50000,
    userName: '박예찬',
    detail: 'Bus and subway',
  },
  {
    accountId: 'A240125_52',
    accountDate: new Date('2024-01-25'),
    categoryName: '복지후생비',
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
