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
  },

  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',

    h1: {
      fontSize: '64px',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '48px',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '40px',
      fontWeight: 'bold',
    },
    h4: {
      fontSize: '32px',
      fontWeight: 'bold',
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
