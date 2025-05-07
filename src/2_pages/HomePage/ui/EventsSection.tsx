import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { fetchEvents } from "@entities/EventCard/model/api/fetchEvents";
import { Event } from "@entities/EventCard/model/types";
import EventsList from '@features/EventsList'

const EventsSection: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEvents()
      .then(setEvents)
      .catch(() => setError("Ошибка при загрузке событий"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box sx={{ width: "100vw", py: 4, display: "flex", justifyContent: "center" }}>
      <Box sx={{ maxWidth: "lg", width: "100%", px: 2 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "600", mb: 3, textAlign: "center", fontSize: '30px' }}
        >
          Откройте новые знакомства и впечатления
        </Typography>

        <EventsList events={events} loading={loading} error={error} />
      </Box>
    </Box>
  );
};

export default EventsSection;
