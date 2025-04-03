import React from 'react';
import { Button, Container, Typography } from '@mui/material'

// Компонент заголовка и кнопки
const HeroSection: React.FC = () => (
  <Container maxWidth="lg" sx={{ mt: 4 }}>
    <Typography
      className="gradient"
      sx={{
        textAlign: "center",
        fontSize: "60px",
        lineHeight: "60px",
        mb: 2,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: "600",
      }}
    >
      Найдите друзей и единомышленников
    </Typography>
    <Typography
      variant="h6"
      textAlign="center"
      color="textSecondary"
      gutterBottom
      sx={{ maxWidth: "600px", mx: "auto" }}
    >
      Исследуйте мероприятия в своем городе, знакомьтесь с новыми людьми и расширяйте круг общения.
    </Typography>
    <Button
      variant="contained"
      className="gradient"
      sx={{
        display: "block",
        mx: "auto",
        my: 3,
        color: "white",
        fontWeight: "500",
        borderRadius: 10,
        padding: "10px 24px",
        "&:hover": { backgroundColor: "#4FB0FD" },
      }}
    >
      Присоединиться
    </Button>
  </Container>
);

export default HeroSection;