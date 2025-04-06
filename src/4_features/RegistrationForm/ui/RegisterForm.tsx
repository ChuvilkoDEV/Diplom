import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../model/thunks';
import { RegisterFormData } from '../model/types';
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

export const RegisterForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [form, setForm] = useState<RegisterFormData>({ email: '', password: '', name: '' });
  const dispatch = useDispatch<any>();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (field: keyof RegisterFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = () => {
    dispatch(registerThunk(form));
  };

  return (
    <Container maxWidth="xs" style={{ padding: 0 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="h5">Регистрация</Typography>
        {isMobile && (
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>

      <Typography variant="body2" color="textSecondary" mb={3}>
        Создайте аккаунт, указав имя, email и пароль
      </Typography>

      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Имя"
          value={form.name}
          onChange={handleChange('name')}
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
          type="password"
          value={form.password}
          onChange={handleChange('password')}
          fullWidth
        />
        <Button
          className="gradient default-btn"
          onClick={handleSubmit}
          disabled={!form.email || !form.password || !form.name}
          sx={{
            opacity: !form.email || !form.password || !form.name ? 0.5 : 1,
            pointerEvents: !form.email || !form.password || !form.name ? 'none' : 'auto',
            transition: 'opacity 0.3s ease',
          }}
        >
          Зарегистрироваться
        </Button>
      </Box>
    </Container>
  );
};
