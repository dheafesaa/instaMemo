import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import { PiSignOutBold } from 'react-icons/pi';

function Navbar({ onLogout }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { title: 'Active', path: '/active' },
    { title: 'Archived', path: '/archived' },
  ];

  const isLinkActive = (path) => location.pathname.startsWith(path);

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: 'background.default' }}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              color: 'text.primary',
            }}
          >
            <Link
              to="/active"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              InstaMemo
            </Link>
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Typography
                key={link.title}
                variant="h6"
                component={Link}
                to={link.path}
                sx={{
                  color: 'text.primary',
                  textDecoration: isLinkActive(link.path) ? 'underline' : 'none',
                  textUnderlineOffset: isLinkActive(link.path) ? '4px' : 'none',
                  display: { xs: 'none', md: 'inline-flex' },
                  alignItems: 'center',
                  mx: 3,
                }}
              >
                {link.title}
              </Typography>
            ))}
            <IconButton
              edge="end"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{
                display: { xs: 'inline-flex', md: 'none' },
                color: 'text.primary',
              }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="sign out"
              onClick={onLogout}
              sx={{ ml: 2, color: 'text.primary' }}
            >
              <PiSignOutBold />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {navLinks.map((link) => (
            <ListItem
              button
              key={link.title}
              component={Link}
              to={link.path}
              onClick={toggleDrawer(false)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: 'text.primary',
                textDecoration: isLinkActive(link.path) ? 'underline' : 'none',
              }}
            >
              <ListItemText primary={link.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

Navbar.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Navbar;
