import { LoginFormData } from '../types';
import { validateEmail } from '@shared/lib/validation/validateEmail';
import { validatePassword } from '@shared/lib/validation/validatePassword';

export const validateLoginForm = (data: LoginFormData): string | null => {
  if (!validateEmail(data.username)) return 'Некорректный email';
  if (!validatePassword(data.password)) return 'Пароль должен быть не менее 6 символов';
  return null;
};
