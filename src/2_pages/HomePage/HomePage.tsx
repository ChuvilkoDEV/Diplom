import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import { events } from "@pages/HomePage/const/content";
import { EventCard } from "@entities/EventCard";

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
            <EventCard {...event} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
