import React from "react";
import { Box, Container } from "@mui/material";
import SectionTitle from "./SectionTitle";
import ActivitiesGrid from "./ActivitiesGrid";
import BackgroundWaves from "./BackgroundWaves";

const PopularActivities: React.FC = () => {
  return (
    <Box sx={{ py: 6, position: "relative", overflow: "hidden" }}>
      <BackgroundWaves />

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
          <SectionTitle />
          <ActivitiesGrid />
        </Container>
      </Box>
    </Box>
  );
};

export default PopularActivities;
