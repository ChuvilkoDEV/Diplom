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

export const LoginForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleLogin = () => {
    dispatch(loginThunk({ username, password }));
    dispatch(closeLogin());
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          disabled={!username || !password}
        >
          Войти
        </Button>
      </Box>
    </Container>
  );
};
