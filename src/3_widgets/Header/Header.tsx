import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Modal,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { LoginForm } from "@features/LoginForm";
import { RegistrationForm } from "@features/RegistrationForm";
import { useSelector } from "react-redux";
import { RootState } from "@app/store/store";

export const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegistration, setOpenRegistration] = useState(false);

  const modalStyle = useSelector((state: RootState) => state.modal.modalStyle);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => setOpenMenu(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Логотип
          </Typography>
          <Button color="inherit" onClick={() => setOpenLogin(true)}>Вход</Button>
          <Button color="inherit" onClick={() => setOpenRegistration(true)}>Регистрация</Button>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={openMenu} onClose={() => setOpenMenu(false)}>
        <List>
          <ListItem component="button" onClick={() => setOpenLogin(true)}>
            <ListItemText primary="Вход" />
          </ListItem>
          <ListItem component="button" onClick={() => setOpenRegistration(true)}>
            <ListItemText primary="Регистрация" />
          </ListItem>
        </List>
      </Drawer>

      <Modal open={openLogin} onClose={() => setOpenLogin(false)}>
        <Box sx={modalStyle}>
          <LoginForm onClose={() => setOpenLogin(false)} />
        </Box>
      </Modal>

      <Modal open={openRegistration} onClose={() => setOpenRegistration(false)}>
        <Box sx={modalStyle}>
          <RegistrationForm onClose={() => setOpenRegistration(false)} />
        </Box>
      </Modal>
    </>
  );
};
