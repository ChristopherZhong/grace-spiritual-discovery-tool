import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { LanguageList } from '../x-language-list/LanguageList';
import React from 'react';

export function TopBar(): JSX.Element {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography sx={{ flexGrow: 1, textAlign: 'start' }} variant="h6">
          Grace Spiritual Discovery Tool
        </Typography>
        <LanguageList />
      </Toolbar>
    </AppBar>
  );
}
