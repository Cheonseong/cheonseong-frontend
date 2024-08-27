import { useState } from 'react';

interface CompactErrorSignProps {
  fontSize:
    | 'text-xs'
    | 'text-sm'
    | 'text-base'
    | 'text-lg'
    | 'text-xl'
    | 'text-2xl'
    | 'text-3xl'
    | 'text-4xl'
    | 'text-5xl'
    | 'text-6xl'
    | 'text-7xl'
    | 'text-8xl'
    | 'text-9xl';
  errorMessage: string;
}

const CompactErrorSign = ({ fontSize, errorMessage }: CompactErrorSignProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className={
        'relative mx-2 break-keep rounded bg-rose-500 px-2 py-0.5 font-extrabold text-white select-none ' +
        fontSize
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      !
      {hovered && (
        <span className="absolute bottom-full left-0 mb-2 whitespace-nowrap rounded-md bg-rose-50 p-2 text-sm font-normal text-rose-600 shadow-lg">
          {errorMessage}
        </span>
      )}
    </span>
  );
};

export default CompactErrorSign;
