// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2C3639', // Your primary color
    },
    secondary: {
      main: '#3F4E4F', // Your secondary color
    },
    accent: {
      main: '#A27B5C', // Your accent color
    },
    background: {
      default: '#ffff', // Your background color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    // Add more font settings if needed
  },
});

export default theme;
