import React, { useState } from 'react';
import {
  AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function ResponsiveNavbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { title: 'Active', path: '/' },
    { title: 'Archived', path: '/archived' },
  ];

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: '#FFFFFF', color: '#3D3D3D' }}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography
            variant="h4"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: '#3D3D3D',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            InstaMemo
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Button
                key={link.title}
                component={Link}
                to={link.path}
                color="inherit"
                sx={{
                  textTransform: 'none',
                  display: { xs: 'none', md: 'inline-flex' },
                  alignItems: 'center',
                  color: '#3D3D3D',
                }}
              >
                {link.title}
              </Button>
            ))}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: 'inline-flex', md: 'none' }, color: '#3D3D3D' }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List sx={{ width: 250 }}>
          {navLinks.map((link) => (
            <ListItem
              button
              key={link.title}
              component={Link}
              to={link.path}
              onClick={toggleDrawer(false)}
              sx={{ display: 'flex', alignItems: 'center', color: '#3D3D3D' }}
            >
              <ListItemText primary={link.title} />
            </ListItem>
          ))}
          <ListItem
            button
            onClick={() => {
              toggleDrawer(false)();
            }}
            sx={{ display: 'flex', alignItems: 'center', color: '#3D3D3D' }}
          />
        </List>
      </Drawer>
    </>
  );
}

export default ResponsiveNavbar;
