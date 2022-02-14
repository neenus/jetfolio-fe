import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Fab,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider
} from "@mui/material";
import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  Settings,
  Logout
} from "@mui/icons-material";
import { createStyles, makeStyles } from "@mui/styles";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../redux/user/user.reducer";
import backgroundLetterAvatar from "../utils/stringToAvatar";
import API from "../api";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      marginBottom: theme.spacing(2)
    },
    title: {
      fontWeight: "bold",
      fontSize: "2.25rem"
    },
    subtitle: {
      fontSize: "1.25rem"
    }
  })
);

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);
  const currentUser = useSelector(state => state.currentUser.currentUser);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleLogout = async e => {
    if (e.target.outerText === "Logout") {
      try {
        const response = await API.get("/auth/logout", {
          headers: {
            Authorization: `Bearer ${currentUser.token}`
          }
        });

        if (response.data.success) {
          await handleMenuClose();
          await localStorage.removeItem("token");
          await dispatch(setCurrentUser(null));
          console.log("user logged out, localStorage cleared");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "6.25rem" }}>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className={classes.title}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Jetfolio
          </Typography>
          {currentUser === null ? (
            <Button color="inherit" className={classes.subtitle}>
              Login
            </Button>
          ) : (
            <React.Fragment>
              <Fab sx={{ p: 0 }} size="medium" onClick={handleMenuOpen}>
                {backgroundLetterAvatar(currentUser.name)}
              </Fab>

              <Menu
                id="user-profile-menu"
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={handleMenuClose}
              >
                <MenuItem>{currentUser.name}</MenuItem>
                <Divider />
                <MenuItem onClick={handleMenuClose}>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  Profile
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <ListItemIcon>
                    <Settings />
                  </ListItemIcon>
                  My Account
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
