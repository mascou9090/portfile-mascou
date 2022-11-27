import AccountCircle from "@mui/icons-material/AccountCircle";
import CallIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";
import MoreIcon from "@mui/icons-material/MoreVert";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import { LinkS } from "./style";

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="Home icon" color="inherit">
          <Link to="/">
            <HomeIcon />
          </Link>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="Call icon" color="inherit">
          <Link to="/contact">
            <CallIcon />
          </Link>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="Profile icon" color="inherit">
          <Link to="/about">
            <AccountCircle />
          </Link>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: "#441922" }} position="static">
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ marginLeft: 8, display: { xs: "none", sm: "block" } }}
          >
            Portfólio
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ marginRight: 10, display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" aria-label="Home icon" color="inherit">
              <LinkS to="/">
                <HomeIcon />
              </LinkS>
            </IconButton>
            <IconButton size="large" aria-label="Call icon" color="inherit">
              <LinkS to="/contact">
                <CallIcon />
              </LinkS>
            </IconButton>
            <IconButton size="large" aria-label="Profile icon" color="inherit">
              <LinkS to="/about">
                <AccountCircle />
              </LinkS>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};
