import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface NavBarProps {
  setOpenMenu: (open: boolean) => void;
  setOpenLogin: (open: boolean) => void;
  setOpenRegistration: (open: boolean) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ setOpenMenu, setOpenLogin, setOpenRegistration }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="static">
      <Toolbar>
        {isMobile && (
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => setOpenMenu(true)}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Логотип
        </Typography>
        {!isMobile && (
          <>
            <Button color="inherit" onClick={() => setOpenLogin(true)}>Вход</Button>
            <Button color="inherit" onClick={() => setOpenRegistration(true)}>Регистрация</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
