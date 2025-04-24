import React from "react";
import { Box, Container } from "@mui/material";
import SectionTitle from "./SectionTitle";
import ActivitiesGrid from "./ActivitiesGrid";
import BackgroundWaves from "./BackgroundWaves";

const PopularActivities: React.FC = () => {
  return (
    <Box
      sx={{
        py: 6,
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(135deg, rgba(223,25,216,0.5), rgba(153,34,255,0.5))`,
      }}
    >
      <BackgroundWaves />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <SectionTitle />
        <ActivitiesGrid />
      </Container>
    </Box>
  );
};

export default PopularActivities;
