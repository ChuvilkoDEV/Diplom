import React from "react";
import { Box, Typography, Avatar, Chip, Stack, Card, CardContent } from "@mui/material";

const EventDetails: React.FC<{ event: any }> = ({ event }) => (
  <Card sx={{ mt: 4, p: 3, borderRadius: "16px", background: "linear-gradient(135deg, #f5f5f5, #e0e0e0)" }}>
    <CardContent>
      <Stack spacing={2}>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Avatar src={event.creator.avatar} alt={event.creator.name} sx={{ width: 60, height: 60, mr: 2 }} />
          <Typography variant="h6">Организатор: {event.creator.name}</Typography>
        </Box>
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
          <Chip label={`📅 ${event.date}`} />
          <Chip label={`📍 ${event.location}`} />
          {event.categories.map((category: string, index: number) => (
            <Chip key={index} label={category} />
          ))}
        </Stack>
      </Stack>
    </CardContent>
  </Card>
);

export default EventDetails;
