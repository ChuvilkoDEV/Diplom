import React from "react";
import { Card, CardContent, CardMedia, Typography, Chip, Avatar, Stack, Button, Box } from "@mui/material";

interface Participant {
  id: number;
  name: string;
  avatar: string;
}

interface EventCardProps {
  id: number;
  title: string;
  image: string;
  category: string;
  date: string;
  location: string;
  participants: Participant[];
  creator: { name: string; avatar: string }; // Информация о создателе события
}

export const EventCard: React.FC<EventCardProps> = ({ id, title, image, category, date, location, participants, creator }) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column", p: 2, borderRadius: '20px' }}>
      <CardContent sx={{ flexGrow: 1, padding: 0 }} style={{paddingBottom: 0}}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, paddingBottom: 0 }}>
          <Avatar src={creator.avatar} alt={creator.name} sx={{ width: 56, height: 56, mr: 2 }} />
          <Box>
            <Typography style={{ fontSize: "16px", fontWeight: "600" }}>{title}</Typography>
            <Chip label={category} sx={{ mb: 1 }} />
            <Typography variant="body2" color="textSecondary">
              📅 {date}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              📍 {location}
            </Typography>
          </Box>
        </Box>

        {/* Список участников */}
        <Box sx={{ backgroundColor: "#f5f5f5", borderRadius: 2, p: 2, mt: 3 }}>
          <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
            Откликнулось {participants.length} участников
          </Typography>
          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
            {participants.map((participant) => (
              <Avatar key={participant.id} alt={participant.name} src={participant.avatar} sx={{ width: 40, height: 40 }} />
            ))}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};
