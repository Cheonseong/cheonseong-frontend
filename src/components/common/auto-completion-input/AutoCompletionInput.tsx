import { getRegExp } from 'korean-regexp';
import { useState, useEffect, useRef, KeyboardEvent, ChangeEvent, FocusEvent } from 'react';

interface AutoCompletionRecord {
  value: string;
  type: string | null | undefined;
  lastSelectedAt: Date;
}

interface AutoCompletionInputProps {
  inputType?: 'text' | 'email' | 'number';
  inputValue: string;
  inputOnChange: (value: string) => void | undefined;
  inputPlaceholder: string;
  inputWidth: number | 'full';
  addNewRecordFn?: (value: string) => void;
  data: AutoCompletionRecord[];
}

const AutoCompletionInput = ({
  inputType,
  inputValue,
  inputOnChange,
  inputPlaceholder,
  inputWidth,
  addNewRecordFn,
  data,
}: AutoCompletionInputProps) => {
  const [inputInnerText, setInnerText] = useState<string>(inputValue);
  const [filteredValues, setFilteredUsers] = useState<AutoCompletionRecord[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState<number>(0);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const suggestionListRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const trimmedInput = inputInnerText.trim().toLowerCase();

    if (trimmedInput === '') {
      const sortedUsers = data.sort(
        (a, b) => b.lastSelectedAt.getTime() - a.lastSelectedAt.getTime(),
      );
      setFilteredUsers(sortedUsers.slice(0, 10));
    } else {
      const filtered = data
        .filter((user) => !!user.value.match(getRegExp(trimmedInput)))
        .sort((a, b) => {
          return (
            (a.value.match(getRegExp(trimmedInput))?.index ?? trimmedInput.length) -
            (b.value.match(getRegExp(trimmedInput))?.index ?? trimmedInput.length)
          );
        });
      setFilteredUsers(filtered.slice(0, 10));
    }
  }, [inputInnerText, data]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInnerText(e.target.value);
    setShowSuggestions(true);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'ArrowDown') {
      if (activeSuggestionIndex < filteredValues.length - 1) {
        setActiveSuggestionIndex((prev) => prev + 1);
        scrollToActiveSuggestion(activeSuggestionIndex + 1);
      }
    } else if (e.key === 'ArrowUp') {
      if (activeSuggestionIndex > 0) {
        setActiveSuggestionIndex((prev) => prev - 1);
        scrollToActiveSuggestion(activeSuggestionIndex - 1);
      }
    } else if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault();
      autoCompleteSuggestion(activeSuggestionIndex);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>): void => {
    e.target.select();
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const handleBlur = (): void => {
    // Delay hiding to allow click event to register
    setTimeout(() => {
      setShowSuggestions(false);
    }, 100);
  };

  const scrollToActiveSuggestion = (index: number): void => {
    if (suggestionListRef.current) {
      const activeItem = suggestionListRef.current.children[index] as HTMLElement;
      if (activeItem) {
        activeItem.scrollIntoView({ block: 'nearest' });
      }
    }
  };

  const autoCompleteSuggestion = (index: number): void => {
    if (filteredValues.length > 0) {
      data.filter((record) => record.value === filteredValues[index].value)[0].lastSelectedAt =
        new Date();
      setInnerText(filteredValues[index].value);
      setShowSuggestions(false);
      inputOnChange(filteredValues[index].value);
    }
  };

  const handleSuggestionClick = (index: number): void => {
    autoCompleteSuggestion(index);
  };

  const handleMouseOver = (index: number): void => {
    setActiveSuggestionIndex(index);
  };

  return (
    <div className={'relative mx-auto content-center ' + `w-${inputWidth}`}>
      <input
        id="search-input"
        type={inputType || 'search'}
        placeholder={inputPlaceholder}
        value={inputInnerText}
        onChange={(e) => {
          handleInputChange(e);
          inputOnChange && inputOnChange(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {showSuggestions && (
        <ul
          id="suggestion-list"
          ref={suggestionListRef}
          className="absolute z-10 max-h-52 w-full overflow-y-auto rounded border border-gray-300 bg-white shadow"
        >
          {filteredValues.map((user, index) => (
            <li
              key={index}
              className={`flex cursor-pointer items-center justify-between p-2 ${
                index === activeSuggestionIndex ? 'bg-gray-200' : ''
              } hover:bg-gray-200`}
              onClick={() => handleSuggestionClick(index)}
              onMouseOver={() => handleMouseOver(index)}
            >
              <span className="break-keep">{user.value}</span>
              {user.type ? (
                <span className="ml-2 break-keep rounded bg-gray-400 px-2 py-0.5 text-xs font-semibold text-white">
                  {user.type}
                </span>
              ) : (
                <></>
              )}
            </li>
          ))}
          {addNewRecordFn &&
          inputInnerText.trim().match(/^[가-힣]+$/gm) &&
          filteredValues.length === 0 ? (
            <li
              key={filteredValues.length + 1}
              className={`cursor-pointer items-center justify-between bg-sky-100 p-2 text-left`}
              onClick={() => addNewRecordFn(inputInnerText.trim())}
            >
              <span className="break-keep">{inputInnerText.trim()}</span>
              <br />
              <p>➕새로 등록</p>
            </li>
          ) : (
            <></>
          )}
        </ul>
      )}
    </div>
  );
};

export type { AutoCompletionRecord };
export default AutoCompletionInput;
