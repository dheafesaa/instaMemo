import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const baseTheme = createTheme({
  palette: {
    text: {
      primary: '#3D3D3D',
    },
    primary: {
      main: '#3D3D3D',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
    },
  },

  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',

    h1: {
      fontSize: '64px',
      fontWeight: 'medium',
    },
    h2: {
      fontSize: '48px',
      fontWeight: 'medium',
    },
    h3: {
      fontSize: '40px',
      fontWeight: 'medium',
    },
    h4: {
      fontSize: '32px',
      fontWeight: 'medium',
    },
    h5: {
      fontSize: '28px',
    },
    h6: {
      fontSize: '20px',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

const theme = responsiveFontSizes(baseTheme);

export default theme;
