import { AccountRecord } from '../../AccountData';

interface CategoryNameColumnProps {
  record: AccountRecord;
}

const CategoryNameColumn = ({ record }: CategoryNameColumnProps) => {
  return <td className="border border-gray-300 px-4 py-2">{record.categoryName}</td>;
};

export default CategoryNameColumn;
