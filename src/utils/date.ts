export const getDateYMD = (date: Date) => {
  const dateYMD = [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, '0'),
    String(date.getDate()).padStart(2, '0'),
  ].join('-');
  return dateYMD;
};
