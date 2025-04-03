import React from "react";
import { Typography } from "@mui/material";

const EventTitle: React.FC<{ title: string }> = ({ title }) => (
  <Typography
    variant="h3"
    fontWeight="bold"
    className={'gradient'}
    sx={{
      textAlign: "center",
      mb: 3,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    {title}
  </Typography>
);

export default EventTitle;
