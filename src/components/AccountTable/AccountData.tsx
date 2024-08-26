import { AutoCompletionRecord } from './auto-completion/AutoCompletionInput';
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

const userSampleData: AutoCompletionRecord[] = [
  { value: '김예찬', type: '학생', updatedAt: new Date('2024-08-26T09:15:00') },
  { value: '박예찬', type: '청년', updatedAt: new Date('2024-08-26T10:30:00') },
  { value: '이예찬', type: '대학생', updatedAt: new Date('2024-08-25T08:00:00') },
  { value: '정예찬', type: 'Manager', updatedAt: new Date('2024-08-24T11:00:00') },
  { value: '최예찬', type: 'Architect', updatedAt: new Date('2024-08-21T12:15:00') },
  { value: '김찬우', type: 'Analyst', updatedAt: new Date('2024-08-22T13:00:00') },
  { value: 'Evelyn', type: 'Consultant', updatedAt: new Date('2024-08-21T14:30:00') },
  { value: 'Frank', type: 'Technician', updatedAt: new Date('2024-08-20T15:45:00') },
  { value: 'Grace', type: 'Scientist', updatedAt: new Date('2024-08-19T16:00:00') },
  { value: 'Henry', type: 'Developer', updatedAt: new Date('2024-08-18T17:25:00') },
  { value: 'Isabella', type: 'Designer', updatedAt: new Date('2024-08-17T18:10:00') },
  { value: 'Jack', type: 'Engineer', updatedAt: new Date('2024-08-16T19:00:00') },
  { value: 'Karen', type: 'Manager', updatedAt: new Date('2024-08-15T20:30:00') },
  { value: 'Liam', type: 'Consultant', updatedAt: new Date('2024-08-14T21:15:00') },
  { value: 'Mia', type: 'Analyst', updatedAt: new Date('2024-08-13T22:00:00') },
  { value: 'Noah', type: 'Architect', updatedAt: new Date('2024-08-12T23:10:00') },
  { value: 'Olivia', type: 'Engineer', updatedAt: new Date('2024-08-11T08:25:00') },
  { value: 'Peter', type: 'Designer', updatedAt: new Date('2024-08-10T09:45:00') },
  { value: 'Quincy', type: 'Developer', updatedAt: new Date('2024-08-09T10:30:00') },
  { value: 'Rachel', type: 'Consultant', updatedAt: new Date('2024-08-08T11:15:00') },
  { value: 'Sophia', type: 'Scientist', updatedAt: new Date('2024-08-07T12:45:00') },
  { value: 'Tom', type: 'Technician', updatedAt: new Date('2024-08-06T13:30:00') },
  { value: 'Ursula', type: 'Manager', updatedAt: new Date('2024-08-05T14:20:00') },
  { value: 'Victor', type: 'Analyst', updatedAt: new Date('2024-08-04T15:35:00') },
  { value: 'Wendy', type: 'Designer', updatedAt: new Date('2024-08-03T16:50:00') },
  { value: 'Xander', type: 'Engineer', updatedAt: new Date('2024-08-02T17:55:00') },
  { value: 'Yvonne', type: 'Scientist', updatedAt: new Date('2024-08-01T18:05:00') },
  { value: 'Zach', type: 'Developer', updatedAt: new Date('2024-07-31T19:15:00') },
];

const loadPreviousAccountData = () => {
  console.log('Loading previous account data...');
};

const loadNextAccountData = () => {
  console.log('Loading next account data...');
};

export type { AccountRecord };
export { initialAccountSampleData, loadPreviousAccountData, loadNextAccountData, userSampleData };
