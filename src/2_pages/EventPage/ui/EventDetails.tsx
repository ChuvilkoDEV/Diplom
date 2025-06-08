// src/pages/EventPage/ui/EventDetails.tsx
import React, { useState } from "react";
import { Box, Typography, Avatar, Chip, Stack, Button, CircularProgress } from "@mui/material";
import { User, Category } from '../model/types';
import { joinEvent } from '../model/eventService';

interface EventDetailsProps {
  creator: User;
  categories: Category[];
  eventId: string | undefined;
}

const EventDetails: React.FC<EventDetailsProps> = ({ creator, categories = [], eventId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleJoin = async () => {
    setLoading(true);
    setError(null);
    try {
      await joinEvent(eventId);
      // Можно добавить уведомление об успешном присоединении
    } catch (e) {
      setError("Ошибка при присоединении к мероприятию");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  if (!creator) {
    return <Typography variant="body1">Данные организатора отсутствуют.</Typography>;
  }

  return (
    <Box>
      <Stack spacing={2}>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2, justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar sx={{ width: 60, height: 60, mr: 2 }}>{creator.username?.[0]}</Avatar>
            <Box>
              <Typography variant="h6">{creator.username || "Без имени"}</Typography>
              <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
                {categories.map((category: Category, index: number) => (
                  <Chip key={index} label={category.name} />
                ))}
              </Stack>
            </Box>
          </Box>
          <Button
            variant="contained"
            className={'gradient default-btn'}
            onClick={handleJoin}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Присоединиться к мероприятию"}
          </Button>
        </Box>
        {error && (
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        )}
      </Stack>
    </Box>
  );
};

export default EventDetails;
