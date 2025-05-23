import React from "react";
import { useParams } from "react-router-dom";
import { events } from "./const/content";
import { Box, Typography } from "@mui/material";
import EventTitle from '@pages/EventPage/ui/EventTitle'
import EventDescription from '@pages/EventPage/ui/EventDescription'
import EventImage from '@pages/EventPage/ui/EventImage'
import EventDetails from '@pages/EventPage/ui/EventDetails'
import EventParticipants from '@pages/EventPage/ui/EventParticipants'
import { Header } from '@widgets/Header'
import { Footer } from '@widgets/Footer'

const EventPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return <Typography variant="h5">Мероприятие не найдено</Typography>;
  }

  return (
    <>
      <Header />
    <Box sx={{ maxWidth: 1000, margin: "auto", padding: 4 }}>
      <EventTitle title={event.title} />
      <EventDetails event={event} />
      <EventDescription description={event.description} />
      {event.image && <EventImage image={event.image} title={event.title} />}
      <EventParticipants participants={event.participants} />
    </Box>
      <Footer />
    </>
  );
};

export default EventPage;
