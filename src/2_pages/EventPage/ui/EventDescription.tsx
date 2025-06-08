import React from "react";
import { Box, Typography } from "@mui/material";

const formatText = (text: string) => {
  const boldRegex = /\*\*(.*?)\*\*/g;
  const parts = text.split(boldRegex);

  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index}>{part}</strong>
    ) : (
      <React.Fragment key={index}>{part}</React.Fragment>
    )
  );
};

const EventDescription: React.FC<{ description?: string }> = ({ description }) => {
  if (!description) {
    return <Typography variant="body1">Описание отсутствует.</Typography>;
  }

  return (
    <Box sx={{ maxWidth: "100%", mb: 3 }}>
      {description.split("\n").map((para, index) => (
        <Typography
          key={index}
          variant="body1"
          component="p"
          sx={{
            color: "#444",
            fontSize: "18px",
            lineHeight: 1.8,
            textAlign: "justify",
            mb: 2,
            textIndent: "0",
          }}
        >
          {formatText(para)}
        </Typography>
      ))}
    </Box>
  );
};

export default EventDescription;
