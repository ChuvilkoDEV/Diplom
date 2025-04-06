import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button, useMediaQuery, useTheme, Box } from "@mui/material";
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
    <AppBar position="static" sx={{ backgroundColor: "white", color: "black", boxShadow: "none" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Логотип и бургер-меню */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {isMobile && (
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => setOpenMenu(true)}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div">
            Логотип
          </Typography>
        </Box>

        {/* Навигационные ссылки (по центру) */}
        {/* ToDo: Вынести ссылки в константу*/}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 3 }}>
            <Button color="inherit" href="/">Главная</Button>
            <Button color="inherit" href="/events">События</Button>
            <Button color="inherit" href="/users">Пользователи</Button>
            <Button color="inherit" href="/places">Места</Button>
          </Box>
        )}

        {/* Кнопки входа и регистрации (справа) */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              onClick={() => setOpenLogin(true)}
              className={'default-btn'}
              sx={{
                color: "black",
                fontWeight: "500",
                border: "1px solid black",
                "&:hover": {
                  backgroundColor: "#4FB0FD",
                },
              }}
            >
              Вход
            </Button>
            <Button
              onClick={() => setOpenRegistration(true)}
              className={'gradient default-btn'}
              sx={{
                color: "white",
                fontWeight: "500",
                "&:hover": {
                  backgroundColor: "#4FB0FD",
                },
              }}
            >
              Регистрация
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
