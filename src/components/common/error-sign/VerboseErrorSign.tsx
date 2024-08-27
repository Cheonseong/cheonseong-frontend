interface VerboseErrorSignProps {
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

const VerboseErrorSign = ({ fontSize, errorMessage }: VerboseErrorSignProps) => {
  return (
    <>
      <span
        className={
          'relative break-keep rounded bg-rose-500 px-2 py-0.5 font-extrabold text-white select-none ' +
          fontSize
        }
      >
        !
      </span>
      <span className={'rounded-md p-1 font-semibold text-rose-600 ' + fontSize}>
        {errorMessage}
      </span>
    </>
  );
};

export default VerboseErrorSign;
