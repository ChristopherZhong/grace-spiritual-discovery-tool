import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { LanguageList } from '../x-language-list/LanguageList';
import React from 'react';
import { useStyles } from './TopBar.styles';

export function TopBar(): JSX.Element {
  const classes = useStyles();

  return (
    <AppBar position='fixed'>
      <Toolbar>
        <IconButton aria-label='menu'><MenuIcon/></IconButton>
        <Typography className={classes.title} variant="h6">Grace Spiritual Discovery Tool</Typography>
        <LanguageList/>
      </Toolbar>
    </AppBar>
  );
}
