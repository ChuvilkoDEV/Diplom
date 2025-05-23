import React, { useState } from 'react';
import {useAppDispatch} from '@app/store/hooks';
import {
  Button,
  Container,
  Typography,
  TextField,
  Box,
  IconButton,
  useMediaQuery
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import { closeLogin } from '@widgets/Header/model/uiSlice'
import { loginThunk } from '@features/LoginForm/model/thunks'
import { validateLoginForm } from '@features/LoginForm/model/lib/validateLoginForm'
import { LoginFormData, LoginFormDataInit } from '@features/LoginForm/model/types'

export const LoginForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [form, setForm] = useState<LoginFormData>(LoginFormDataInit);
  const dispatch = useAppDispatch();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (field: keyof LoginFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleLogin = () => {
    const error = validateLoginForm(form)
    if (error) {
      alert(error);
      return;
    }

    dispatch(loginThunk(form))
      .unwrap()
      .then(() => {
        dispatch(closeLogin());
      })
      .catch((err: string) => {
        alert(err); // Выведет "Неверный логин или пароль" или то, что пришло из rejectWithValue
      });
  };

  return (
    <Container maxWidth="xs" style={{padding: 15}}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="h5">Вход</Typography>
        {isMobile && (
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>

      <Typography variant="body2" color="textSecondary" mb={3}>
        Введите ваш email и пароль для входа в аккаунт
      </Typography>

      <Box display="flex" flexDirection="column" gap='15px'>
        <TextField
          label="Email"
          type="email"
          value={form.email}
          onChange={handleChange('email')}
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
          className={'gradient default-btn'}
          onClick={handleLogin}
          disabled={!form.email || !form.password}
          sx={{
            opacity: !form.email || !form.password ? 0.5 : 1,
            pointerEvents: !form.email || !form.password ? 'none' : 'auto',
            transition: 'opacity 0.3s ease',
          }}
        >
          Войти
        </Button>
      </Box>
    </Container>
  );
};
