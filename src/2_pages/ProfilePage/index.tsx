import React from 'react';
import {
  Typography,
  Avatar,
  Grid,
  Chip,
  Box,
  Button,
  Divider,
} from '@mui/material';
import { Header } from '@widgets/Header'
import { Footer } from '@widgets/Footer'

export const ProfilePage: React.FC = () => {
  const user = {
    id: '1',
    email: 'example@mail.com',
    description: 'Люблю путешествовать и изучать новые технологии.',
    age: 28,
    username: 'ivan_petrov',
    roles: [{ id: '1', name: 'USER' }],
    chosenCity: { id: '1', name: 'Москва' },
    favoriteInterests: [
      {
        id: '1',
        name: 'Программирование',
        type: 'topic',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/2721/2721269.png',
      },
      {
        id: '2',
        name: 'Путешествия',
        type: 'topic',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/854/854894.png',
      },
    ],
    dislikedInterests: [
      {
        id: '3',
        name: 'Политика',
        type: 'topic',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/189/189662.png',
      },
    ],
  };

  const handleSendMessage = () => {
    alert(`Открываем чат с пользователем ${user.username}`);
  };

  return (
    <>
      <Header />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        py: 2,
      }}
    >
      <Box
        sx={{
          width: '1200px',
          px: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Профиль пользователя
        </Typography>

        <Grid container spacing={3} alignItems="center" justifyContent="space-between">
          <Grid item xs={12} sm={8} container alignItems="center" spacing={2}>
            <Grid item>
              <Avatar
                sx={{ width: 64, height: 64, fontSize: 28, bgcolor: 'primary.main' }}
              >
                {user.username[0].toUpperCase()}
              </Avatar>
            </Grid>
            <Grid item>
              <Typography variant="h6">{user.username}</Typography>
              <Typography color="textSecondary">{user.email}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {user.description}
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={4} textAlign={{ xs: 'left', sm: 'right' }}>
            <Button variant="contained" onClick={handleSendMessage}>
              Написать сообщение
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="subtitle1" gutterBottom>
          Город: {user.chosenCity?.name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Возраст: {user.age}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Роли: {user.roles.map((r) => r.name).join(', ')}
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" gutterBottom>
            Любимые интересы:
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {user.favoriteInterests.map((interest) => (
              <Chip
                key={interest.id}
                label={interest.name}
                avatar={<Avatar src={interest.iconUrl} />}
              />
            ))}
          </Box>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" gutterBottom>
            Нелюбимые интересы:
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {user.dislikedInterests.map((interest) => (
              <Chip
                key={interest.id}
                label={interest.name}
                avatar={<Avatar src={interest.iconUrl} />}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>

      <Footer />
    </>
  );
};
