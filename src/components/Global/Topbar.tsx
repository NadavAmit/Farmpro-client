import React from "react";
import { Box, IconButton } from "@mui/material";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const Topbar = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} p={2} className="">
      <Box display={"flex"}>
        <IconButton></IconButton>
        <IconButton>
          <NotificationsOutlinedIcon/>
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon/>
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon/>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
