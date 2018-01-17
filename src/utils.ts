export const capitalize = (str: string): string => (
  str.charAt(0).toUpperCase() + str.slice(1)
);

export const cameleize = (strings: string[] = []) => {
  return strings.reduce((res, str) => {
    return res + capitalize(str);
  }, '');
};
