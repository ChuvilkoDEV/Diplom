export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};
