import React from "react";
import { Box, Typography, Avatar, Chip, Stack } from "@mui/material";

const EventDetails: React.FC<{ event: any }> = ({ event }) => (
  <Box>
    <Stack spacing={2}>
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <Avatar src={event.creator.avatar} alt={event.creator.name} sx={{ width: 60, height: 60, mr: 2 }} />
        <Box>
          <Typography variant="h6">{event.creator.name}</Typography>
          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
            {event.categories.map((category: string, index: number) => (
              <Chip key={index} label={category} />
            ))}
          </Stack>
        </Box>
      </Box>
    </Stack>
  </Box>
);

export default EventDetails;