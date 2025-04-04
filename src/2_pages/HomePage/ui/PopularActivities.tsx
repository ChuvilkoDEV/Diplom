import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import BrushIcon from "@mui/icons-material/Brush";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import HikingIcon from "@mui/icons-material/Hiking";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import CodeIcon from "@mui/icons-material/Code";

const activities = [
  { title: "Футбол и другие командные игры", icon: <SportsSoccerIcon fontSize="large" /> },
  { title: "Творческие мастер-классы", icon: <BrushIcon fontSize="large" /> },
  { title: "Неформальные встречи и посиделки", icon: <LocalCafeIcon fontSize="large" /> },
  { title: "Прогулки и походы", icon: <HikingIcon fontSize="large" /> },
  { title: "Музыкальные джемы", icon: <MusicNoteIcon fontSize="large" /> },
  { title: "Кодинг и IT-митапы", icon: <CodeIcon fontSize="large" /> },
];

const PopularActivities: React.FC = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" textAlign="center" fontWeight={600} mb={4}>
          Чем занимаются участники?
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {activities.map((activity, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  borderRadius: 4,
                  height: "100%",
                }}
              >
                {activity.icon}
                <Typography variant="body1">{activity.title}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PopularActivities;
