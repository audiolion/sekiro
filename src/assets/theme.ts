import { createMuiTheme } from '@material-ui/core';
import { fonts } from './fonts';

export const createSekiroTheme = () =>
  createMuiTheme({
    typography: {
      useNextVariants: true,
      fontFamily: `"${fonts.Default}", "Helvetica", "Arial", "sans-serif"`,
      allVariants: {
        color: 'inherit',
        textShadow: '2px 2px 4px #000000'
      }
    }
  });
