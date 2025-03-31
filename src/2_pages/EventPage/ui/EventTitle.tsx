import React from "react";
import { Typography } from "@mui/material";

const EventTitle: React.FC<{ title: string }> = ({ title }) => (
  <Typography
    variant="h3"
    fontWeight="bold"
    sx={{
      textAlign: "center",
      mb: 3,
      backgroundImage: "linear-gradient(120deg, #FF1CF7, #00F0FF)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    {title}
  </Typography>
);

export default EventTitle;
