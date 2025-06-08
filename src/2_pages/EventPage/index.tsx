// src/pages/EventPage/index.tsx (или EventPage.tsx)
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, CircularProgress } from "@mui/material";
import EventTitle from '@pages/EventPage/ui/EventTitle';
import EventDescription from '@pages/EventPage/ui/EventDescription';
import EventImage from '@pages/EventPage/ui/EventImage';
import EventDetails from '@pages/EventPage/ui/EventDetails';
import EventParticipants from '@pages/EventPage/ui/EventParticipants';
import { Header } from '@widgets/Header';
import { Footer } from '@widgets/Footer';
import { Event } from './model/types';
import { fetchEventById } from './model/eventService';

const EventPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);

    fetchEventById(id)
      .then(data => setEvent(data))
      .catch(() => setError("Ошибка при загрузке события"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <Typography variant="h5" color="error" sx={{ mt: 4, textAlign: "center" }}>
          {error}
        </Typography>
        <Footer />
      </>
    );
  }

  if (!event) {
    return (
      <>
        <Header />
        <Typography variant="h5" sx={{ mt: 4, textAlign: "center" }}>
          Мероприятие не найдено
        </Typography>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Box sx={{ maxWidth: 1000, margin: "auto", padding: 4 }}>
        <EventTitle title={event.title} />
        <EventDetails creator={event.creator} categories={event.categories} eventId={id} />
        <EventDescription description={event.description} />
        {/*{event.image && <EventImage image={event.image} title={event.title} />}*/}
        <EventParticipants participants={event.participants} />
      </Box>
      <Footer />
    </>
  );
};

export default EventPage;
