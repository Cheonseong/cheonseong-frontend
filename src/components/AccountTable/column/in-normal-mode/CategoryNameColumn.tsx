import { AccountRecord } from '../../AccountData';
import { accountTableCellStyle } from '../../AccountTableBody';

interface CategoryNameColumnProps {
  record: AccountRecord;
}

const CategoryNameColumn = ({ record }: CategoryNameColumnProps) => {
  return <td className={accountTableCellStyle}>{record.categoryName}</td>;
};

export default CategoryNameColumn;
