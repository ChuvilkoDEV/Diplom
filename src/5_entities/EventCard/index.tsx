import React from "react";
import { Card, CardContent, Typography, Chip, Avatar, Stack, Box } from "@mui/material";

interface Participant {
  id: number;
  name: string;
  avatar: string;
}

interface EventCardProps {
  id: number;
  title: string;
  image: string;
  categories: string[]; // Теперь массив категорий
  date: string;
  location: string;
  participants: Participant[];
  creator: { name: string; avatar: string }; // Информация о создателе события
}

export const EventCard: React.FC<EventCardProps> = ({ id, title, categories, date, location, participants, creator }) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column", p: 2, borderRadius: '20px' }}>
      <CardContent sx={{ flexGrow: 1, padding: 0 }} style={{paddingBottom: 0}}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar src={creator.avatar} alt={creator.name} sx={{ width: 56, height: 56, mr: 2 }} />
          <Box>
            {/* Отображение нескольких категорий */}
            <Stack direction="row" spacing={1} sx={{ mb: 1, flexWrap: "wrap" }}>
              {categories.map((category, index) => (
                <Chip key={index} label={category} />
              ))}
            </Stack>

            <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>{title}</Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: "wrap" }}>
              <Chip label={`📅 ${date}`} />
              <Chip label={`📍 ${location}`} />
            </Stack>
          </Box>
        </Box>

        {/* Список участников */}
        <Box sx={{ backgroundColor: "#f5f5f5", borderRadius: '20px', p: 2, mt: 3 }}>
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
