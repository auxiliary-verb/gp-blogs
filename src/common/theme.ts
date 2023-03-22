import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { createBreakpoints } from '@mui/system';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const breakPoints = createBreakpoints({});
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiCardMedia: {
      styleOverrides: {
        img: {
          zIndex: 900,
          position: 'relative',
          aspectRatio: '2 / 1',
          objectFit: 'contain',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          zIndex: 910,
          [breakPoints.down('sm')]: {
            color: 'white',
            position: 'absolute',
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            width: '100%',
          },
          [breakPoints.up('sm')]: {
            color: 'black',
          },
        }
      },
    },
  },
});

export default theme;
