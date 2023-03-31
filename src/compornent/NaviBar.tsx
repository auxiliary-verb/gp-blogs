import * as React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MuiLink from '@mui/material/Link';
import Link from 'next/link';

interface INaviBarProps {
  title: string;
}

export default function NaviBar(porps: INaviBarProps) {
  const title = porps.title;
  React.Component

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon/>
          </IconButton>
          <MuiLink href="/" variant="h6" underline="none" color="inherit" component={Link}>
            {title}
          </MuiLink>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
