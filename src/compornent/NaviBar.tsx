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
import OutlinedInput from '@mui/material/OutlinedInput';
import FilledInput from '@mui/material/FilledInput';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/router';

interface INaviBarProps {
  title: string;
}

export default function NaviBar(porps: INaviBarProps) {
  const router = useRouter();
  const title = porps.title;
  const [words, setWords] = React.useState("");
  const handleChenge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWords(event.target.value);
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing || event.key !== 'Enter') {
      return;
    }
    handleClick();
  }

  const handleClick = () => {
    router.push('/', {
      query: {
        filter: words,
      },
    });
  }

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <Container>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <MuiLink href="/" variant="h6" underline="none" color="inherit" component={Link}>
                {title}
              </MuiLink>
              <FilledInput
                hiddenLabel
                sx={{ ml: 1, flex: 1 }}
                placeholder="検索"
                color="primary"
                size="small"
                disableUnderline
                value={words}
                onChange={handleChenge}
                onKeyDown={handleKeyDown}
                inputProps={{
                  'aria-label': 'search',
                  style: {
                    color: 'white',
                  }
                }}
                endAdornment={
                  <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleClick}>
                    <SearchIcon style={{ color: 'white' }} />
                  </IconButton>
                }
              />
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
