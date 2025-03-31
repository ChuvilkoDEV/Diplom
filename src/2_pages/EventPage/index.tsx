import React from "react";
import { useParams } from "react-router-dom";
import { events } from "./const/content";
import { Box, Typography, Avatar, Chip, Stack, Card, CardContent } from "@mui/material";

// Функция для форматирования Markdown-подобного текста (обрабатывает **жирный текст**)
const formatText = (text: string) => {
  const boldRegex = /\*\*(.*?)\*\*/g;
  const parts = text.split(boldRegex);

  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index}>{part}</strong>
    ) : (
      <React.Fragment key={index}>{part}</React.Fragment>
    )
  );
};

export const EventPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return <Typography variant="h5">Мероприятие не найдено</Typography>;
  }

  return (
    <Box sx={{ maxWidth: 1000, margin: "auto", padding: 4 }}>

      {/* Заголовок с градиентом */}
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{
          textAlign: "center",
          mb: 3,
          backgroundImage: "linear-gradient(120deg, #FF1CF7, #00F0FF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {event.title}
      </Typography>

      {/* Основная информация */}
      <Card sx={{ mt: 4, p: 3, borderRadius: "16px", background: "linear-gradient(135deg, #f5f5f5, #e0e0e0)" }}>
        <CardContent>
          <Stack spacing={2}>
            {/* Организатор */}
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Avatar src={event.creator.avatar} alt={event.creator.name} sx={{ width: 60, height: 60, mr: 2 }} />
              <Typography variant="h6">Организатор: {event.creator.name}</Typography>
            </Box>

            <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
              <Chip label={`📅 ${event.date}`} />
              <Chip label={`📍 ${event.location}`} />
              {event.categories.map((category, index) => (
                <Chip key={index} label={category} />
              ))}
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      {/* Описание */}
      <Box sx={{ maxWidth: "100%", mb: 3 }}>
        {event.description.split("\n").map((para, index) => (
          <Typography
            key={index}
            variant="body1"
            component="p"
            sx={{
              color: "#444",
              fontSize: "18px",
              lineHeight: 1.8,
              textAlign: "justify",
              mb: 2,
              textIndent: "0",
            }}
          >
            {formatText(para)}
          </Typography>
        ))}
      </Box>

      {/* Изображение */}
      {event.image && (
        <Box
          component="img"
          src={event.image}
          alt={event.title}
          sx={{
            width: "100%",
            borderRadius: "16px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            mb: 3,
          }}
        />
      )}

      {/* Участники */}
      <Card sx={{ mt: 3, p: 3, borderRadius: "16px", backgroundColor: "#f8f8f8" }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
            Участники ({event.participants.length})
          </Typography>
          <Stack direction="row" spacing={1} sx={{ overflowX: "auto", pb: 1 }}>
            {event.participants.map((participant) => (
              <Avatar key={participant.id} src={participant.avatar} alt={participant.name} sx={{ width: 50, height: 50 }} />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};
