import React from "react";
import { Box, Typography, Avatar, Chip, Stack, Button } from "@mui/material";
import { User, Category } from '../model/types'

const EventDetails: React.FC<{ creator: User; categories: Category[] }> = ({ creator, categories = [] }) => {
  if (!creator) {
    return <Typography variant="body1">Данные организатора отсутствуют.</Typography>;
  }

  return (
    <Box>
      <Stack spacing={2}>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2, justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar sx={{ width: 60, height: 60, mr: 2 }}>{creator.username?.[0]}</Avatar>
            <Box>
              <Typography variant="h6">{creator.username || "Без имени"}</Typography>
              <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
                {categories.map((category: Category, index: number) => (
                  <Chip key={index} label={category.name} />
                ))}
              </Stack>
            </Box>
          </Box>
          <Button variant="contained" className={'gradient default-btn'}>
            Присоединиться к мероприятию
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default EventDetails;
