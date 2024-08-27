import { categorySampleData } from './AccountData';

const getJaccardDistance = (a: string, b: string) => {
  const [aTokens, bTokens] = [a.trim().split(''), b.trim().split('')];
  const union = [...new Set([...aTokens, ...bTokens])];
  const intersection = aTokens.filter((char) => bTokens.includes(char));

  return intersection.length / union.length;
};

const getSimilarNames = (pivotValue: string) => {
  return categorySampleData
    .map((record) => getJaccardDistance(record.value, pivotValue))
    .map((jaccard, i) =>
      jaccard >= 0.2
        ? { jaccard, categoryName: categorySampleData[i].value }
        : { jaccard: 0, categoryName: '' },
    )
    .sort((a, b) => b.jaccard - a.jaccard)
    .filter((x) => x.categoryName !== '')
    .map((x) => x.categoryName);
};

const getNotSimilarNames = (pivotValue: string) => {
  return categorySampleData
    .map((record) => getJaccardDistance(record.value, pivotValue))
    .map((jaccard, i) => (jaccard < 0.2 ? categorySampleData[i].value : null))
    .filter((x) => x) as string[];
};

export { getSimilarNames, getNotSimilarNames };
