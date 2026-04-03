import dayjs from 'dayjs';

export const getYesterdayDate = (): string => {
  return dayjs().subtract(1, 'day').format('YYYY-MM-DD');
};