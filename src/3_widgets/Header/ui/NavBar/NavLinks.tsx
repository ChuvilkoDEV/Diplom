import { Box, Button } from "@mui/material";

interface Props {
  isMobile: boolean;
  isAuthenticated: boolean;
}

export const NavLinks: React.FC<Props> = ({ isMobile, isAuthenticated }) => {
  if (isMobile) return null;

  return (
    <Box sx={{ display: "flex", gap: 3 }}>
      {isAuthenticated && <>
        <Button color="inherit" href="/events">События</Button>
        <Button color="inherit" href="/messages">Сообщения</Button>
        <Button color="inherit" href="/places">Места</Button>
      </>}
    </Box>
  );
};
