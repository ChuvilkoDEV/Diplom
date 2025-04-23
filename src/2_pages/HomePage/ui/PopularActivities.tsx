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
      background: "linear-gradient(45deg, #ff6ec4, #7873f5)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 40,
    }}
  >
    <IconComponent sx={{ fontSize: 40, fill: '#BE1FEA' }} />
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
    <Box sx={{ py: 6, position: "relative", overflow: "hidden" }}>
      {/* Ограничивающий контейнер */}
      <Box
        sx={{
          position: "relative",
          // maxWidth: 1400,
          mx: "auto",
          px: 2, // чтобы контент не прилипал к краям
          "::before": {
            content: '""',
            position: "absolute",
            width: '300%',
            height: '300%',
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,110,196,1), transparent)",
            top: -100,
            left: 0,
            filter: "blur(40px)",
            zIndex: 0,
          },
          "::after": {
            content: '""',
            position: "absolute",
            width: '300%',
            height: '300%',
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(120,115,245,1), transparent)",
            bottom: -100,
            right: 0,
            filter: "blur(40px)",
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            sx={{
              textAlign: "center",
              mb: 4,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "600",
              fontSize: '40px',
              color: 'white',
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
    </Box>
  );
};

export default PopularActivities;
