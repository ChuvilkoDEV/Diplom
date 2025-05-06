import React, { useState } from 'react';
import { registerThunk } from '../model/thunks';
import { RegisterFormData, RegisterFormDataInit } from '../model/types'
import {
  Container,
  TextField,
  Typography,
  Button,
  Box,
  IconButton,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { closeRegistration } from '@widgets/Header/model/uiSlice'
import { validateRegisterForm } from '@features/RegistrationForm/model/lib/validateRegisterForm'
import { useAppDispatch } from '@app/store/hooks'

export const RegisterForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [form, setForm] = useState<RegisterFormData>(RegisterFormDataInit);
  const dispatch = useAppDispatch();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (field: keyof RegisterFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = () => {
    const error = validateRegisterForm(form);
    if (error) {
      alert(error);
      return;
    }

    dispatch(registerThunk(form))
      .unwrap()
      .then(() => {
        dispatch(closeRegistration());
      })
      .catch((err: string) => {
        alert(err); // Выведет "Неверный логин или пароль" или то, что пришло из rejectWithValue
      });
  };

  return (
    <Container maxWidth="xs" style={{ padding: 15 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="h5">Регистрация</Typography>
        {isMobile && (
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>

      <Typography variant="body2" color="textSecondary" mb={2}>
        Создайте аккаунт, указав имя, email и пароль
      </Typography>

      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Email"
          value={form.username}
          onChange={handleChange('username')}
          fullWidth
        />
        <TextField
          label="Пароль"
          type="password"
          value={form.password}
          onChange={handleChange('password')}
          fullWidth
        />
        <Button
          className="gradient default-btn"
          onClick={handleSubmit}
          disabled={!form.username || !form.password}
          sx={{
            opacity: !form.username || !form.password ? 0.5 : 1,
            pointerEvents: !form.username || !form.password ? 'none' : 'auto',
            transition: 'opacity 0.3s ease',
          }}
        >
          Зарегистрироваться
        </Button>
      </Box>
    </Container>
  );
};
