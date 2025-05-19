// src/components/Header.jsx - placeholder for implementation
import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ toggleSidebar }) => (
  <AppBar position="fixed" className="bg-blue-700">
    <Toolbar>
      <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap>
        Trasure Admin
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
