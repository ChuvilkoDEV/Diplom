import React, { useState } from 'react';
import { closeRegistrationAndReset, registerThunk } from '../model/thunks';
import {
  Container,
  TextField,
  Typography,
  Button,
  Box,
  IconButton,
  InputAdornment,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { validateRegisterForm } from '@features/RegistrationForm/model/lib/validateRegisterForm';
import { useAppDispatch, useAppSelector } from '@app/store/hooks';
import { setField } from '../model/registrationFormSlice';

export const RegisterForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state) => state.registrationForm.form);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setField({ field, value: e.target.value }));
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
        dispatch(closeRegistrationAndReset());
      })
      .catch((err: string) => {
        alert(err);
      });
  };

  const isDisabled = !form.username || !form.password || !form.confirmPassword;

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
          label="Имя"
          value={form.username}
          onChange={handleChange('username')}
          fullWidth
        />
        <TextField
          label="Email"
          value={form.email}
          onChange={handleChange('email')}
          fullWidth
        />
        <TextField
          label="Пароль"
          type={showPassword ? 'text' : 'password'}
          value={form.password}
          onChange={handleChange('password')}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Подтвердите пароль"
          type={showConfirm ? 'text' : 'password'}
          value={form.confirmPassword}
          onChange={handleChange('confirmPassword')}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowConfirm((prev) => !prev)} edge="end">
                  {showConfirm ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          className="gradient default-btn"
          onClick={handleSubmit}
          disabled={isDisabled}
          sx={{
            opacity: isDisabled ? 0.5 : 1,
            pointerEvents: isDisabled ? 'none' : 'auto',
            transition: 'opacity 0.3s ease',
          }}
        >
          Зарегистрироваться
        </Button>
      </Box>
    </Container>
  );
};
