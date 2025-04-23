import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  useMediaQuery,
  useTheme,
  Box,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@app/store/store";
import { logout } from "@app/store/Auth/AuthSlice";

interface NavBarProps {
  setOpenMenu: (open: boolean) => void;
  setOpenLogin: (open: boolean) => void;
  setOpenRegistration: (open: boolean) => void;
}

export const NavBar: React.FC<NavBarProps> = ({
                                                setOpenMenu,
                                                setOpenLogin,
                                                setOpenRegistration,
                                              }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "black", boxShadow: "none" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
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
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 3 }}>
            <Button color="inherit" href="/">Главная</Button>
            <Button color="inherit" href="/events">События</Button>
            <Button color="inherit" href="/users">Пользователи</Button>
            <Button color="inherit" href="/places">Места</Button>
          </Box>
        )}

        {/* Кнопки входа / иконка пользователя */}
        {isAuthenticated ? (
          <Box>
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
              <Avatar alt="User Icon" src="/placeholder-user.png" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={() => {
                setAnchorEl(null);
                // Заглушка под профиль
                console.log("Профиль");
              }}>
                Профиль
              </MenuItem>
              <MenuItem onClick={() => {
                setAnchorEl(null);
                dispatch(logout());
              }}>
                Выйти
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          !isMobile && (
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
          )
        )}
      </Toolbar>
    </AppBar>
  );
};
