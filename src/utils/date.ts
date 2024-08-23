const getLocaleString = (date: Date): string => {
  return `${date.getMonth() + 1}/${date.getDate()} (${['일', '월', '화', '수', '목', '금', '토'][date.getDay()]})`;
};

export { getLocaleString };
