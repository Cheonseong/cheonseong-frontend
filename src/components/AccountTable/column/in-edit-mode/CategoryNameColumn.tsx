import { AccountRecord, categorySampleData } from '../../data/AccountData';
import { accountTableCellStyle } from '../../AccountTableBody';
import AutoCompletionInput from '../../../common/auto-completion-input/AutoCompletionInput';
import { useRef } from 'react';
import RegisterCategoryModal, {
  RegisterCategoryModalRef,
} from '../../../common/modal/RegisterCategoryModal';

interface CategoryNameColumnInEditModeProps {
  index: number;
  record: AccountRecord;
  accountData: AccountRecord[];
  setAccountData: React.Dispatch<React.SetStateAction<AccountRecord[]>>;
}

const CategoryNameColumnInEditMode = ({
  index,
  record,
  accountData,
  setAccountData,
}: CategoryNameColumnInEditModeProps) => {
  const modalRef = useRef<RegisterCategoryModalRef>(null);

  const handleInputChange = (index: number, value: string) => {
    const updatedData = [...accountData];
    updatedData[index].categoryName = value;
    setAccountData(updatedData);
  };

  const openModal = (value: string) => {
    if (modalRef.current) {
      modalRef.current.openModal(value);
    }
  };

  return (
    <td className={accountTableCellStyle}>
      <AutoCompletionInput
        inputValue={record.categoryName}
        inputOnChange={(value) => handleInputChange(index, value)}
        inputPlaceholder="분류"
        inputWidth={32}
        data={categorySampleData}
        addNewRecordFn={(value) => {
          openModal(value);
        }}
      />
      <RegisterCategoryModal
        ref={modalRef}
        initialInputValue={record.categoryName}
        onRegister={(newCategoryName) => {
          // TODO: request to server
          console.log(`category ${newCategoryName} is successfully registered!`);
        }}
      />
    </td>
  );
};

export default CategoryNameColumnInEditMode;
