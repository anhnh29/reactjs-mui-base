import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#123257',
    },
    secondary: {
      main: '#6D87AA',
    },
  },
  typography: {
    fontFamily: 'Poppins, Roboto, sans-serif',
    button: {
      textTransform: 'none', // Disable uppercase transformation in buttons
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          padding: '10px 20px',
        },
      },
      defaultProps: {
        variant: 'contained',
        color: 'primary',
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '6px',
          color: 'primary',
        },
      },
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          color: 'primary',
          borderColor: '#FF5F47',
        },
        input: {
          color: 'primary',
        },
      },
    },
  },
});

export default theme;
