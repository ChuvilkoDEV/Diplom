import { Box, Button } from "@mui/material";

interface Props {
  setOpenLogin: (v: boolean) => void;
  setOpenRegistration: (v: boolean) => void;
}

export const GuestButtons: React.FC<Props> = ({ setOpenLogin, setOpenRegistration }) => (
  <Box sx={{ display: "flex", gap: 2 }}>
    <Button
      onClick={() => setOpenLogin(true)}
      className={'default-btn'}
      sx={{
        color: "black",
        fontWeight: "500",
        border: "1px solid black",
        lineHeight: "14px !important",
        "&:hover": { backgroundColor: "#4FB0FD" },
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
        lineHeight: "14px !important",
        "&:hover": { backgroundColor: "#4FB0FD" },
      }}
    >
      Регистрация
    </Button>
  </Box>
);
