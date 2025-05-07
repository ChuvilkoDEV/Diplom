import React from "react";
import { AppBar, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@app/store/store";

import { NavLogo } from '@widgets/Header/ui/NavBar/NavLogo'
import { NavLinks } from '@widgets/Header/ui/NavBar/NavLinks'
import { AuthMenu } from '@widgets/Header/ui/NavBar/AuthMenu'
import { GuestButtons } from '@widgets/Header/ui/NavBar/GuestButtons'


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

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "black", boxShadow: "none" }}>
      <Toolbar sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        py: 2,
      }}>
        <NavLogo isMobile={isMobile} onMenuClick={() => setOpenMenu(true)} />
        <NavLinks isMobile={isMobile} isAuthenticated={isAuthenticated} />
        {isAuthenticated
          ? <AuthMenu />
          : !isMobile && <GuestButtons setOpenLogin={setOpenLogin} setOpenRegistration={setOpenRegistration} />
        }
      </Toolbar>
    </AppBar>
  );
};
