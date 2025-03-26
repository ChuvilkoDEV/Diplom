import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '@app/store/store';
import { Button, Container, Typography } from '@mui/material';

export const LoginForm: React.FC<{onClose: () => void}> = ({onClose}) => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Вход
      </Typography>
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Войти
      </Button>
    </Container>
  );
};
