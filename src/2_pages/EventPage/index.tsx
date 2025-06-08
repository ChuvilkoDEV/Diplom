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
import { Event } from './model/types'; // Импорт типа Event
import api from "@shared/api"; // Импортируйте ваш API

const EventPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvent = async (eventId: string) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await api.get(`/events/${eventId}`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
        },
      });
      setEvent(response.data);
    } catch (error) {
      setError("Ошибка при загрузке события");
      console.error("Ошибка при получении события:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    fetchEvent(id);
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
        <EventDetails creator={event.creator} categories={event.categories} />
        <EventDescription description={event.description} />
        {/*{event.image && <EventImage image={event.image} title={event.title} />}*/}
        <EventParticipants participants={event.participants} />
      </Box>
      <Footer />
    </>
  );
};

export default EventPage;
