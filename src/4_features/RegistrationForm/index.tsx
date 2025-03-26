import React from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';

export const RegistrationForm: React.FC<{onClose: () => void}> = ({onClose}) => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Регистрация
      </Typography>
      <TextField label="Имя" fullWidth margin="normal" />
      <TextField label="Email" type="email" fullWidth margin="normal" />
      <TextField label="Пароль" type="password" fullWidth margin="normal" />
      <Button variant="contained" color="primary" fullWidth>
        Зарегистрироваться
      </Button>
    </Container>
  );
};
