import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1440,
      xl: 1920,
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: '#262626',
    },
    secondary: {
      main: '#ee0d0d',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FAFAFA',
    }
  },
  props: {
    MuiTab: {
      disableRipple: true
    }
  },
  overrides: {
    MuiDivider: {
      root: {
        backgroundColor: 'rgba(239,239,239,1)'
      }
    },
    MuiLinearProgress: {
      barColorPrimary: {
        backgroundColor: '#43a047'
      }
    }
  }
});
