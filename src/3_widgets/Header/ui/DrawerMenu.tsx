import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

interface DrawerMenuProps {
  openMenu: boolean;
  setOpenMenu: (open: boolean) => void;
  setOpenLogin: (open: boolean) => void;
  setOpenRegistration: (open: boolean) => void;
}

export const DrawerMenu: React.FC<DrawerMenuProps> = ({ openMenu, setOpenMenu, setOpenLogin, setOpenRegistration }) => {
  return (
    <Drawer anchor="left" open={openMenu} onClose={() => setOpenMenu(false)} sx={{ "& .MuiDrawer-paper": { width: 300 } }}>
      <List>
        <ListItem component="button" onClick={() => setOpenLogin(true)}>
          <ListItemText primary="Вход" />
        </ListItem>
        <ListItem component="button" onClick={() => setOpenRegistration(true)}>
          <ListItemText primary="Регистрация" />
        </ListItem>
      </List>
    </Drawer>
  );
};
