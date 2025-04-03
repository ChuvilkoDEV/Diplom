import React from "react";
import { Grid, Box } from "@mui/material";
import { events } from "@pages/HomePage/const/content";
import { EventCard } from "@entities/EventCard";

const EventsList: React.FC = () => (
  <Box sx={{ width: "100vw", py: 4, display: "flex", justifyContent: "center" }}>
    <Grid container spacing={3} sx={{ maxWidth: "lg", width: "100%", px: 2 }}>
    {events.map((event) => (
        <Grid item sm={12} md={6} key={event.id}>
          <EventCard {...event} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default EventsList;
