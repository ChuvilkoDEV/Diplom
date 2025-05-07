import React from 'react';
import { Event } from '@entities/EventCard/model/types';
import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import { EventCard } from '@entities/EventCard';

interface EventsListProps {
  events: Event[];
  loading: boolean;
  error: string | null;
}

const EventsList: React.FC<EventsListProps> = ({ events, loading, error }) => {
  return (
    <>
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
    </>
  );
};

export default EventsList;
