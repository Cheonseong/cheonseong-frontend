import { AutoCompletionRecord } from '../common/auto-completion-input/AutoCompletionInput';
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

const categorySampleData: AutoCompletionRecord[] = [
  { value: '감사', lastSelectedAt: new Date('2024-08-26T19:44:00') },
  { value: '교회관리비', lastSelectedAt: new Date('2024-08-26T19:44:00') },
  { value: '구제', lastSelectedAt: new Date('2024-08-26T19:44:00') },
  { value: '구제(화재)', lastSelectedAt: new Date('2024-08-26T19:44:00') },
  { value: '노회비', lastSelectedAt: new Date('2024-08-26T19:44:00') },
  { value: '목회활동비', lastSelectedAt: new Date('2024-08-26T19:44:00') },
  { value: '복지후생', lastSelectedAt: new Date('2024-08-26T19:44:00') },
  { value: '복지후생비', lastSelectedAt: new Date('2024-08-26T19:44:00') },
  { value: '부서지원', lastSelectedAt: new Date('2024-08-26T19:44:00') },
  { value: '부활감사', lastSelectedAt: new Date('2024-08-26T19:44:00') },
  { value: '사례비', lastSelectedAt: new Date('2024-08-26T19:44:00') },
  { value: '상여금', lastSelectedAt: new Date('2024-08-26T19:44:00') },
  { value: '선교', lastSelectedAt: new Date('2024-08-26T19:44:00') },
  { value: '선교비', lastSelectedAt: new Date('2024-08-26T19:44:00') },
  { value: '신년감사', lastSelectedAt: new Date('2024-08-26T19:44:00') },
  { value: '심방,접대,경조', lastSelectedAt: new Date('2024-08-26T19:44:00') },
  { value: '십일조', lastSelectedAt: new Date('2024-08-26T19:44:00') },
  { value: '예금이자', lastSelectedAt: new Date('2024-08-26T19:44:00') },
  { value: '예탁적금', lastSelectedAt: new Date('2024-08-26T19:44:00') },
  { value: '장학', lastSelectedAt: new Date('2024-08-26T19:44:00') },
  { value: '장학금', lastSelectedAt: new Date('2024-08-26T19:44:00') },
  { value: '적금', lastSelectedAt: new Date('2024-08-26T19:44:00') },
  { value: '주정', lastSelectedAt: new Date('2024-08-26T19:44:00') },
  { value: '차량관리비', lastSelectedAt: new Date('2024-08-26T19:44:00') },
  { value: '행사비', lastSelectedAt: new Date('2024-08-26T19:44:00') },
  { value: '화재구재', lastSelectedAt: new Date('2024-08-26T19:44:00') },
];

const userSampleData: AutoCompletionRecord[] = [
  { value: '고영록', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '김가은', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '김경철', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '김금수', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '김민건', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '김상준', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '김선영', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '김영란', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '김영옥', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '김용배', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '김용익', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '김용일', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '김정춘', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '김지성', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '김지우', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '김지일', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '김천중', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '김현용', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '김홍순', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '김황제', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '김희주', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '남상순', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '남희자', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '무명', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '박두리', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '박선화', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '박순이', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '박용규', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '박준생', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '박지수', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '배두열', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '배정은', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '백명화', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '변정임', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '심경희', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '안성태', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '양세목', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '양은광', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '양준철', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '오상목', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '오은선', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '이건자', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '이광섭', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '이규민', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '이기철', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '이명수', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '이분요', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '이상천', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '이영원', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '이예찬', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '이용은', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '이용주', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '이인순', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '이종례', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '이종순', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '이진화', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '이창용', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '이철재', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '이하경', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '이하람', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '이학권', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '이희순', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '임승주', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '전다은', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '정광희', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '정민규', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '정재두', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '조영숙', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '차덕용', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '최만순', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '최은숙', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '추윤희', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '하윤중', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '하태열', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '함영선', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '홍현순', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '황미옥', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '황병용', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '황선혜', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
  { value: '황성남', type: '학생', lastSelectedAt: new Date('2024-08-26T13:38:00') },
];

const loadPreviousAccountData = () => {
  console.log('Loading previous account data...');
};

const loadNextAccountData = () => {
  console.log('Loading next account data...');
};

export type { AccountRecord };
export {
  initialAccountSampleData,
  loadPreviousAccountData,
  loadNextAccountData,
  userSampleData,
  categorySampleData,
};
