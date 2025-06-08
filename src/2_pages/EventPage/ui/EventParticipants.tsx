import React from "react";
import { Typography, Avatar, Stack, Card, CardContent } from "@mui/material";

interface Participant {
  id: string | number;
  avatar?: string;
  name?: string;
}

const EventParticipants: React.FC<{ participants?: Participant[] }> = ({ participants }) => {
  const participantCount = Array.isArray(participants) ? participants.length : 0;

  return (
    <Card sx={{ mt: 3, p: 3, borderRadius: "16px", backgroundColor: "#f8f8f8" }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          Участники ({participantCount})
        </Typography>
        {participantCount > 0 && Array.isArray(participants) ? (
          <Stack direction="row" spacing={1} sx={{ overflowX: "auto", pb: 1 }}>
            {participants.map((participant: Participant) => (
              <Avatar
                key={participant.id}
                src={participant.avatar}
                alt={participant.name || "Участник"}
                sx={{ width: 50, height: 50 }}
              />
            ))}
          </Stack>
        ) : (
          <Typography variant="body1">Нет участников.</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default EventParticipants;
