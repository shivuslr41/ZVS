import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    background: {
      default: 'rgb(253, 245, 207)'
    }
  },
  typography: {
    h6: {
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
      '@media (max-width:400px)': {
        fontSize: '0.7rem',
      }
    },
    // subtitle1: {
    //   '@media (max-width:600px)': {
    //     fontSize: '0.7rem',
    //   },
    //   '@media (max-width:400px)': {
    //     fontSize: '0.5rem',
    //   }
    // }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*::-webkit-scrollbar': {
          width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
          'WebkitBoxShadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.1)',
        }
      }
    }
  }
});

export default theme;