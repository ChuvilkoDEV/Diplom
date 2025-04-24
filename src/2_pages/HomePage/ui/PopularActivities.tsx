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
      {/* Волны */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100px",
          zIndex: 1,
          lineHeight: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "100px" }}
        >
          <defs>
            <mask id="wave-mask">
              {/* Белый прямоугольник, который будет основой (все видно) */}
              <rect x="0" y="0" width="100%" height="100" fill="white" />

              {/* Первая волна с полной непрозрачностью (черный цвет вырезает) */}
              <path
                fill="black"
                d="M0,64L60,58C120,53,240,43,360,32C480,21,600,11,720,21C840,32,960,64,1080,74C1200,85,1320,75,1380,69L1440,64V100H0Z" />

              {/* Вторая волна с полупрозрачностью (черный цвет вырезает) */}
              <path
                fill="black"
                fillOpacity="0.5"
                d="M0,40L60,46C120,52,240,63,360,67C480,71,600,63,720,56C840,49,960,42,1080,46C1200,50,1320,66,1380,74L1440,82V100H0Z" />
            </mask>
          </defs>

          {/* Прямоугольник с маской, который будет отрезан обеими волнами */}
          <rect x="0" y="0" width="100%" height="100" fill="white" mask="url(#wave-mask)" />
        </svg>
      </Box>

      {/* Основной контент */}
      <Box
        sx={{
          position: "relative",
          mx: "auto",
          px: 2,
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
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
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
