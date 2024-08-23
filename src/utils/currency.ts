const units = ['', '만', '억', '조', '경', '해', '자', '양', '구', '간', '정'];
const smallNumbers = ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
const tenNumbers = ['', '십', '백', '천'];

function toKoreanPronunciation(number: number): string {
  if (number === 0) return '영';

  let result = '';
  let unitIndex = 0;

  while (number > 0) {
    const part = number % 10000;
    if (part > 0) {
      const partString = convertPart(part);
      result = partString + units[unitIndex] + result;
    }
    number = Math.floor(number / 10000);
    unitIndex++;
  }

  return result.trim();
}

function convertPart(part: number): string {
  let partResult = '';
  let divisor = 1000;
  for (let i = 3; i >= 0; i--) {
    const currentNum = Math.floor(part / divisor);
    if (currentNum > 0) {
      const currentNumString = smallNumbers[currentNum];
      partResult += currentNumString === '일' && i > 0 ? tenNumbers[i] : currentNumString + tenNumbers[i];
    }
    part %= divisor;
    divisor = Math.floor(divisor / 10);
  }
  return partResult;
}

export { toKoreanPronunciation };
