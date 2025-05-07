import React, { useEffect, useState } from 'react'
import EventsList from '@features/EventsList'
import { EventFilters } from '@features/EventFilter/ui/EventFilters'
import { fetchEvents } from '@entities/EventCard/model/api/fetchEvents'
import { Event } from '@entities/EventCard/model/types'
import { Box } from '@mui/material'

const EventsPage: React.FC = () => {
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
    <Box
      sx={{ width: "100vw", py: 4, display: "flex", justifyContent: "center" }}
    >
      <Box sx={{ maxWidth: "lg", width: "100%", px: 2 }}>
        <EventFilters />
        <EventsList events={events} loading={loading} error={error} />
      </Box>
    </Box>
 );
};

export default EventsPage