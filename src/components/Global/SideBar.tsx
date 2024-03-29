import React, { useState } from "react";
import { Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Sidebar as ProSideBar } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';

interface ItemProps {
  title: string;
  to: string;
  icon: React.ReactNode; // This can be the specific type for your icon
  selected: string; // Adjust type according to your needs
  setSelected: (title: string) => void; // Adjust function signature based on its usage
}

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const Item: React.FC<ItemProps> = ({
    title,
    to,
    icon,
    selected,
    setSelected,
  }) => {
    return (
        <MenuItem
          active={selected === title}
          onClick={() => setSelected(title)}
          icon={icon}
          component={<Link to={to}/>}
        >
          <Typography>{title}</Typography>
        </MenuItem>
    );
  };

  return (
    <Box>
      <ProSideBar collapsed={isCollapsed}>
        <Menu>
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h5">FarmPro</Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem> 
          {!isCollapsed && (
            <Box mb="25px">
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  יובל בנימיני
                </Typography>
                <Typography variant="h5">מנהלת מתנדבים</Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography variant="h6" sx={{ m: "15px 0 5px 20px" }}>
              Data
            </Typography>
            <Item
              title="Fields"
              to="/field"
              icon={<AgricultureOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Crops Tracking"
              to="/crop"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Crops Type Management"
              to="/crop-type"
              icon={<AgricultureOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Expense and Profit Tracking"
              to="/incomes-expenses"
              icon={<PaidOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* <Typography variant="h6" sx={{ m: "15px 0 5px 20px" }}>
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography variant="h6" sx={{ m: "15px 0 5px 20px" }}>
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
          </Box>
        </Menu>
      </ProSideBar>
    </Box>
  );
};

export default SideBar;
