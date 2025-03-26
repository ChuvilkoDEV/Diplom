import React, { useState } from "react";
import { LoginForm } from "@features/LoginForm";
import { RegistrationForm } from "@features/RegistrationForm";
import { NavBar } from "./ui/NavBar";
import { DrawerMenu } from "./ui/DrawerMenu";
import { MobileButtons } from "./ui/MobileButtons";
import { ModalWrapper } from "@shared/ui/ModalWrapper";

export const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegistration, setOpenRegistration] = useState(false);

  return (
    <>
      <NavBar setOpenMenu={setOpenMenu} setOpenLogin={setOpenLogin} setOpenRegistration={setOpenRegistration} />

      <DrawerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} setOpenLogin={setOpenLogin} setOpenRegistration={setOpenRegistration} />

      <ModalWrapper open={openLogin} onClose={() => setOpenLogin(false)}>
        <LoginForm onClose={() => setOpenLogin(false)} />
      </ModalWrapper>

      <ModalWrapper open={openRegistration} onClose={() => setOpenRegistration(false)}>
        <RegistrationForm onClose={() => setOpenRegistration(false)} />
      </ModalWrapper>

      <MobileButtons setOpenLogin={setOpenLogin} setOpenRegistration={setOpenRegistration} />
    </>
  );
};
