import { useState, useImperativeHandle, forwardRef, ChangeEvent } from 'react';
import { categorySampleData } from '../../AccountTable/AccountData';

interface RegisterCategoryModalProps {
  initialInputValue?: string;
  onRegister: (value: string) => void;
}

interface RegisterCategoryModalRef {
  openModal: (value: string) => void;
  closeModal: () => void;
}

const RegisterCategoryModal = forwardRef<RegisterCategoryModalRef, RegisterCategoryModalProps>(
  (props, ref) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [nameInputValue, setNameInputValue] = useState<string>(props.initialInputValue || '');
    const [messageValue, setMessageValue] = useState<string>(
      '기존 분류명들과 의미가 겹치지 않는지 확인해주세요.',
    );
    const [isConfirmButtonEnabled, setIsConfirmButtonEnabled] = useState<boolean>(true);

    const [similarNames, setSimilarNames] = useState<string[]>([]);
    const [notSimilarNames, setNotSimilarNames] = useState<string[]>(
      categorySampleData.map((record) => record.value),
    );

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

    const getJaccardDistance = (a: string, b: string) => {
      const [aTokens, bTokens] = [a.trim().split(''), b.trim().split('')];
      const union = [...new Set([...aTokens, ...bTokens])];
      const intersection = aTokens.filter((char) => bTokens.includes(char));

      return intersection.length / union.length;
    };

    const getSimilarNames = (pivotValue: string) => {
      return categorySampleData
        .map((record) => getJaccardDistance(record.value, pivotValue))
        .map((jaccard, i) => (jaccard >= 0.2 ? categorySampleData[i].value : null))
        .filter((x) => x) as string[];
    };

    const getNotSimilarNames = (pivotValue: string) => {
      return categorySampleData
        .map((record) => getJaccardDistance(record.value, pivotValue))
        .map((jaccard, i) => (jaccard < 0.2 ? categorySampleData[i].value : null))
        .filter((x) => x) as string[];
    };

    const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSimilarNames(getSimilarNames(e.target.value));
      setNotSimilarNames(getNotSimilarNames(e.target.value));

      if (categorySampleData.filter((record) => record.value === e.target.value).length !== 0) {
        setMessageValue('⚠ 중복된 분류명을 등록할 수 없습니다.');
        setIsConfirmButtonEnabled(false);
      } else {
        setMessageValue('기존 분류명들과 의미가 겹치지 않는지 확인해주세요.');
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
                <h2 className="mb-4 text-xl font-semibold">새로운 분류명 등록</h2>
                <div>
                  <span className="mx-3">분류명</span>
                  <span>
                    <input
                      type="text"
                      value={nameInputValue}
                      onChange={(e) => handleInputValueChange(e)}
                      placeholder="십일조"
                      className="mx-3 mb-4 w-56 rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </span>
                </div>

                <p className="pb-4 text-sm">{messageValue}</p>

                <div className="w-full">
                  {similarNames.map((value, i) => (
                    <span
                      key={i}
                      className="mx-1 whitespace-nowrap rounded bg-sky-600 px-2 py-0.5 text-xs font-semibold text-white"
                    >
                      {value}
                    </span>
                  ))}
                  {notSimilarNames.map((value, i) => (
                    <span
                      key={i}
                      className="mx-1 whitespace-nowrap rounded bg-gray-400 px-2 py-0.5 text-xs font-semibold text-white"
                    >
                      {value}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex justify-end space-x-2">
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
  },
);

RegisterCategoryModal.displayName = 'RegisterCategoryModal';

export type { RegisterCategoryModalRef };
export default RegisterCategoryModal;
