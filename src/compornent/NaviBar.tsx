import * as React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MuiLink from '@mui/material/Link';
import Link from 'next/link';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';

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
          <Container>
            <MuiLink href="/" variant="h6" underline="none" color="inherit" component={Link}>
              {title}
            </MuiLink>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="検索"
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
