import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
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
  categories: string[];
  date: string;
  location: string;
  participants: Participant[];
  creator: { name: string; avatar: string };
}

export const EventCard: React.FC<EventCardProps> = ({ id, title, categories, date, location, participants, creator }) => {
  const navigate = useNavigate();
  const usersRef = useRef<HTMLDivElement>(null);
  const [maxAvatars, setMaxAvatars] = useState(0);

  useEffect(() => {
    const updateMaxAvatars = () => {
      if (usersRef.current) {
        const containerWidth = usersRef.current.getBoundingClientRect().width;
        const avatarsPerRow = Math.floor(containerWidth / 45); // 40px аватар + 5px отступ
        const totalAvatars = avatarsPerRow * 4; // 4 ряда максимум
        setMaxAvatars(totalAvatars);
      }
    };

    updateMaxAvatars();
    window.addEventListener("resize", updateMaxAvatars);
    return () => window.removeEventListener("resize", updateMaxAvatars);
  }, []);

  const handleClick = () => {
    navigate(`/event/${id}`);
  };

  return (
    <Card
      sx={{ height: "100%", display: "flex", flexDirection: "column", p: 2, borderRadius: '20px', cursor: "pointer" }}
      onClick={handleClick}
    >
      <CardContent sx={{ flexGrow: 1, padding: 0 }} style={{ paddingBottom: 0 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar src={creator.avatar} alt={creator.name} sx={{ width: 56, height: 56, mr: 2 }} />
          <Box>
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
        <Box sx={{ backgroundColor: "#f5f5f5", borderRadius: "20px", p: 2, mt: 3, overflow: "hidden" }}>
          <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
            Откликнулось {participants.length} участников
          </Typography>
          <Box
            ref={usersRef}
            sx={{
              display: "flex",
              flexWrap: "wrap", // Автоперенос строк
              gap: "5px", // Отступы между аватарками
              maxHeight: "180px", // Ограничение на 4 ряда (40px * 4 + 3 * 5px)
              overflow: "hidden"
            }}
          >
            {participants.slice(0, maxAvatars).map((participant) => (
              <Avatar
                key={participant.id}
                alt={participant.name}
                src={participant.avatar}
                sx={{ width: 40, height: 40 }}
              />
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
