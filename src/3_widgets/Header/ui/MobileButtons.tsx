import React from "react";
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";

interface MobileButtonsProps {
  setOpenLogin: (open: boolean) => void;
  setOpenRegistration: (open: boolean) => void;
}

export const MobileButtons: React.FC<MobileButtonsProps> = ({ setOpenLogin, setOpenRegistration }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (!isMobile) return null;

  return (
    <Box sx={{ position: "fixed", bottom: 16, left: 16, right: 16, display: "flex", flexDirection: "column", gap: 1 }}>
      <Button variant="contained" color="primary" fullWidth onClick={() => setOpenLogin(true)}>
        Вход
      </Button>
      <Button variant="outlined" color="primary" fullWidth onClick={() => setOpenRegistration(true)}>
        Регистрация
      </Button>
    </Box>
  );
};
