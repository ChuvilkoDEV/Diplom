import { RegisterFormData } from '../types';
import { validateEmail } from '@shared/lib/validation/validateEmail';
import { validatePassword } from '@shared/lib/validation/validatePassword';
import { validateName } from '@shared/lib/validation/validateName';

export const validateRegisterForm = (data: RegisterFormData): string | null => {
  if (!validateEmail(data.email)) return 'Некорректный email';
  if (!validatePassword(data.password)) return 'Пароль должен быть не менее 6 символов';
  if (!validateName(data.name)) return 'Имя не должно быть пустым';
  return null;
};
