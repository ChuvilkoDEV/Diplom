import React from "react";
import { Box } from "@mui/material";

const EventImage: React.FC<{ image: string; title: string }> = ({ image, title }) => (
  <Box
    component="img"
    src={image}
    alt={title}
    sx={{
      width: "100%",
      borderRadius: "16px",
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
      mb: 3,
    }}
  />
);

export default EventImage;
