import React from "react";
import { Card, CardContent, CardMedia, Typography, Chip, Button } from "@mui/material";

interface EventCardProps {
  id: number;
  title: string;
  image: string;
  category: string;
  date: string;
  location: string;
}

export const EventCard: React.FC<EventCardProps> = ({ id, title, image, category, date, location }) => {
  return (
    <Card>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography style={{fontSize: '16px', fontWeight: '600'}}>{title}</Typography>
        <Chip label={category} sx={{ mb: 1 }} />
        <Typography variant="body2" color="textSecondary">
          📅 {date}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          📍 {location}
        </Typography>
        <Button variant="outlined" color="primary" sx={{ mt: 1 }}>
          Подробнее
        </Button>
      </CardContent>
    </Card>
  );
};
