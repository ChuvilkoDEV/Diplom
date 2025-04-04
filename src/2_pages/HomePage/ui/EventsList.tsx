import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { events } from "@pages/HomePage/const/content";
import { EventCard } from "@entities/EventCard";

const EventsList: React.FC = () => (
  <Box sx={{ width: "100vw", py: 4, display: "flex", justifyContent: "center" }}>
    <Box sx={{ maxWidth: "lg", width: "100%", px: 2 }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: "600", mb: 3, textAlign: "center", fontSize: '30px' }}
      >
        Откройте новые знакомства и впечатления
      </Typography>
      <Grid container spacing={3}>
        {events.map((event) => (
          <Grid item sm={12} md={6} key={event.id}>
            <EventCard {...event} />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
);

export default EventsList;
