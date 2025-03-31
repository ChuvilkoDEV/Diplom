import React from "react";
import { Typography, Avatar, Stack, Card, CardContent } from "@mui/material";

const EventParticipants: React.FC<{ participants: any[] }> = ({ participants }) => (
  <Card sx={{ mt: 3, p: 3, borderRadius: "16px", backgroundColor: "#f8f8f8" }}>
    <CardContent>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
        Участники ({participants.length})
      </Typography>
      <Stack direction="row" spacing={1} sx={{ overflowX: "auto", pb: 1 }}>
        {participants.map((participant) => (
          <Avatar key={participant.id} src={participant.avatar} alt={participant.name} sx={{ width: 50, height: 50 }} />
        ))}
      </Stack>
    </CardContent>
  </Card>
);

export default EventParticipants;
