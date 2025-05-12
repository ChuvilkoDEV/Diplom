export interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterFormDataInit: RegisterFormData = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};
