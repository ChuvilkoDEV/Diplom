import { Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface Props {
  isMobile: boolean;
  onMenuClick: () => void;
}

export const NavLogo: React.FC<Props> = ({ isMobile, onMenuClick }) => (
  <Box sx={{ display: "flex", alignItems: "center" }}>
    {isMobile && (
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={onMenuClick}>
        <MenuIcon />
      </IconButton>
    )}
    <Typography variant="h6" component="div">
      Логотип
    </Typography>
  </Box>
);
