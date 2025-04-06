import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '@app/store/store';
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

export const LoginForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <Container maxWidth="xs" style={{padding: 0}}>
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

      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <TextField
          label="Пароль"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <Button
          className={'gradient default-btn'}
          onClick={handleLogin}
          disabled={!email || !password}
        >
          Войти
        </Button>
      </Box>
    </Container>
  );
};
