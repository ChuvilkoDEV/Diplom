import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, CircularProgress } from "@mui/material";
import { EventCard } from "@entities/EventCard";
import { fetchEvents } from "@entities/EventCard/model/api/fetchEvents";
import { Event } from "@entities/EventCard/model/types";

const EventsList: React.FC = () => {
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

        {loading ? (
          <Box display="flex" justifyContent="center" mt={4}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error" align="center">{error}</Typography>
        ) : (
          <Grid container spacing={3}>
            {events.map((event) => (
              <Grid item sm={12} md={6} key={event.id}>
                <EventCard {...event} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default EventsList;
