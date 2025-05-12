import { RegisterFormData } from '../types';
import { validateEmail } from '@shared/lib/validation/validateEmail';
import { validatePassword } from '@shared/lib/validation/validatePassword';

export const validateRegisterForm = (form: RegisterFormData): string | null => {
  if (!form.username.trim()) return 'Введите имя';
  if (!validateEmail(form.email)) return 'Некорректный email';
  if (form.password !== form.confirmPassword) return 'Пароли не совпадают';
  if (!validatePassword(form.password)) return 'Пароль должен быть не менее 6 символов';
  return null;
};
