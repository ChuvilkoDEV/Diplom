import React from "react";
import { Container, Typography, Button, Grid, Card, CardContent, CardMedia, Chip } from "@mui/material";

const events = [
  {
    id: 1,
    title: "Киновечер: Классика Тарантино",
    image: "https://i.ytimg.com/vi/F_CKLtsNxz8/maxresdefault.jpg",
    date: "29 марта, 19:00",
    location: "Кинотеатр 'Артхаус', Москва",
    category: "Кино",
  },
  {
    id: 2,
    title: "Языковой обмен: Английский",
    image: "https://avatars.mds.yandex.net/i?id=86380c34b19b034cb29fb2fd9d83ae3c23f6caf0-4575654-images-thumbs&n=13",
    date: "30 марта, 18:00",
    location: "Кафе 'Chat Club', Санкт-Петербург",
    category: "Языки",
  },
  {
    id: 3,
    title: "Концерт живой музыки",
    image: "https://avatars.mds.yandex.net/i?id=c58fd1e5cc7ae899b49581f1a2b9fb7ab77cb489-5161363-images-thumbs&n=13",
    date: "31 марта, 20:00",
    location: "Бар 'Jazz Club', Казань",
    category: "Музыка",
  },
];

export const HomePage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" textAlign="center" gutterBottom>
        Найди компанию для ярких событий!
      </Typography>
      <Typography variant="h6" textAlign="center" color="textSecondary" gutterBottom>
        Исследуйте мероприятия в своем городе, знакомьтесь с новыми людьми и расширяйте круг общения.
      </Typography>

      <Button variant="contained" color="primary" sx={{ display: "block", mx: "auto", my: 3 }}>
        Присоединиться
      </Button>

      <Grid container spacing={3}>
        {events.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Card>
              <CardMedia component="img" height="140" image={event.image} alt={event.title} />
              <CardContent>
                <Typography variant="h6">{event.title}</Typography>
                <Chip label={event.category} sx={{ mb: 1 }} />
                <Typography variant="body2" color="textSecondary">
                  📅 {event.date}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  📍 {event.location}
                </Typography>
                <Button variant="outlined" color="primary" sx={{ mt: 1 }}>
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
