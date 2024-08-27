import { AccountRecord, categorySampleData } from '../../data/AccountData';
import { accountTableCellStyle } from '../../AccountTableBody';
import CompactErrorSign from '../../../common/error-sign/CompactErrorSign';
import { ErrorMessage } from '../../../common/error-sign/errorMessage';

interface CategoryNameColumnProps {
  record: AccountRecord;
}

const CategoryNameColumn = ({ record }: CategoryNameColumnProps) => {
  return (
    <td className={accountTableCellStyle}>
      {record.categoryName === '' ? (
        <>
          <CompactErrorSign
            fontSize="text-base"
            errorMessage={ErrorMessage.CATEGORY_NOT_SELECTED}
          />
          <span>{record.categoryName}</span>
        </>
      ) : categorySampleData.filter((x) => x.value === record.categoryName).length === 0 ? (
        <>
          <CompactErrorSign
            fontSize="text-base"
            errorMessage={ErrorMessage.CATEGORY_NOT_REGISTERED}
          />
          <span className="text-rose-600">{record.categoryName}</span>
        </>
      ) : (
        record.categoryName
      )}
    </td>
  );
};

export default CategoryNameColumn;
