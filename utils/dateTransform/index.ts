export const parseDate = (dateString: string): string => {
  const date = new Date(dateString);
  const isoString = date.toISOString();
  return isoString;
};
