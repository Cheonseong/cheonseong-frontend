import { AccountRecord } from '../../AccountData';

interface UserNameColumnProps {
  record: AccountRecord;
}

const UserNameColumn = ({ record }: UserNameColumnProps) => {
  return <td className="border border-gray-300 px-4 py-2">{record.userName}</td>;
};

export default UserNameColumn;
