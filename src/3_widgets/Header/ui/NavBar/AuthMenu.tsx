import { useState } from "react";
import { Avatar, Box, IconButton, Menu, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "@app/store/Auth/AuthSlice";
import { useNavigate } from 'react-router-dom'

export const AuthMenu: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <Box>
      <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
        <Avatar alt="User Icon" src="/placeholder-user.png" />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        <MenuItem onClick={() => {
          setAnchorEl(null);
          navigate("/profile");
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
  );
};
