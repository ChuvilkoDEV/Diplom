import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import BrushIcon from "@mui/icons-material/Brush";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import HikingIcon from "@mui/icons-material/Hiking";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import CodeIcon from "@mui/icons-material/Code";

const GradientIcon = ({ IconComponent }: { IconComponent: React.ElementType }) => (
  <Box
    sx={{
      color: "linear-gradient(45deg, #ff6ec4, #7873f5)",
      WebkitMaskImage: "-webkit-linear-gradient(black, black)",
      WebkitMaskComposite: "source-in",
      maskComposite: "intersect",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 40,
      width: 40,
      height: 40,
    }}
  >
    <IconComponent sx={{ fontSize: 40 }} />
  </Box>
);

const activities = [
  { title: "Футбол и другие командные игры", icon: SportsSoccerIcon },
  { title: "Творческие мастер-классы", icon: BrushIcon },
  { title: "Неформальные встречи и посиделки", icon: LocalCafeIcon },
  { title: "Прогулки и походы", icon: HikingIcon },
  { title: "Музыкальные джемы", icon: MusicNoteIcon },
  { title: "Кодинг и IT-митапы", icon: CodeIcon },
];

const PopularActivities: React.FC = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        <Typography
          className="gradient"
          sx={{
            textAlign: "center",
            mb: 4,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "600",
            fontSize: '40px',
          }}
        >
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
                <GradientIcon IconComponent={activity.icon} />
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
