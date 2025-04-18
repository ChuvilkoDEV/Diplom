import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@app/store/store";
import {
  closeLogin,
  closeRegistration,
  openLogin,
  openRegistration,
  openMenu,
  closeMenu,
} from "@widgets/Header/model/uiSlice";
import { LoginForm } from "@features/LoginForm";
import { RegisterForm } from "@features/RegistrationForm";
import { NavBar } from "./ui/NavBar";
import { DrawerMenu } from "./ui/DrawerMenu";
import { MobileButtons } from "./ui/MobileButtons";
import { ModalWrapper } from "@shared/ui/ModalWrapper";

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const openLoginModal = useSelector((state: RootState) => state.ui.isLoginOpen);
  const openRegistrationModal = useSelector((state: RootState) => state.ui.isRegistrationOpen);
  const openMenuDrawer = useSelector((state: RootState) => state.ui.isMenuOpen);

  return (
    <>
      <NavBar
        setOpenMenu={() => dispatch(openMenu())}
        setOpenLogin={() => dispatch(openLogin())}
        setOpenRegistration={() => dispatch(openRegistration())}
      />

      <DrawerMenu
        openMenu={openMenuDrawer}
        setOpenMenu={(open: boolean) => dispatch(open ? openMenu() : closeMenu())}
        setOpenLogin={() => dispatch(openLogin())}
        setOpenRegistration={() => dispatch(openRegistration())}
      />

      <ModalWrapper open={openLoginModal} onClose={() => dispatch(closeLogin())}>
        <LoginForm onClose={() => dispatch(closeLogin())} />
      </ModalWrapper>

      <ModalWrapper open={openRegistrationModal} onClose={() => dispatch(closeRegistration())}>
        <RegisterForm onClose={() => dispatch(closeRegistration())} />
      </ModalWrapper>

      <MobileButtons
        setOpenLogin={() => dispatch(openLogin())}
        setOpenRegistration={() => dispatch(openRegistration())}
      />
    </>
  );
};
