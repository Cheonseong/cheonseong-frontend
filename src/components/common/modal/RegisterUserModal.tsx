import { useState, useImperativeHandle, forwardRef, ChangeEvent } from 'react';
import { userSampleData } from '../../AccountTable/AccountData';

interface RegisterUserModalProps {
  initialInputValue?: string;
  onRegister: (value: string) => void;
}

interface RegisterUserModalRef {
  openModal: (value: string) => void;
  closeModal: () => void;
}

const RegisterUserModal = forwardRef<RegisterUserModalRef, RegisterUserModalProps>((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [nameInputValue, setNameInputValue] = useState<string>(props.initialInputValue || '');
  const [messageValue, setMessageValue] = useState<string>('오타가 없는지 잘 확인해주세요.');
  const [isConfirmButtonEnabled, setIsConfirmButtonEnabled] = useState<boolean>(true);

  const openModal = (value: string) => {
    setNameInputValue(value);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNameInputValue('');
  };

  const handleRegister = () => {
    props.onRegister(nameInputValue);
    closeModal();
  };

  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (userSampleData.filter((record) => record.value === e.target.value).length !== 0) {
      setMessageValue('⚠ 중복된 사용자 이름을 등록할 수 없습니다.');
      setIsConfirmButtonEnabled(false);
    } else {
      setMessageValue('오타가 없는지 잘 확인해주세요.');
      setIsConfirmButtonEnabled(true);
    }

    setNameInputValue(e.target.value);
  };

  useImperativeHandle(ref, () => ({
    openModal,
    closeModal,
  }));

  return (
    <>
      {isModalOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"></div>

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
              <h2 className="mb-4 text-xl font-semibold">새로운 사용자 등록</h2>
              <div>
                <span className="mx-3">이름</span>
                <span>
                  <input
                    type="text"
                    value={nameInputValue}
                    onChange={(e) => handleInputValueChange(e)}
                    placeholder="홍길동"
                    className="mx-3 mb-4 w-56 rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </span>
              </div>
              <p className="pb-6 text-sm">{messageValue}</p>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={closeModal}
                  className="rounded bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  취소
                </button>
                <button
                  onClick={handleRegister}
                  className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-500 disabled:text-gray-400"
                  disabled={!isConfirmButtonEnabled}
                >
                  등록
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
});

RegisterUserModal.displayName = 'RegisterUserModal';

export type { RegisterUserModalRef };
export default RegisterUserModal;
