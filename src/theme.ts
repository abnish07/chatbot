import {
  createMuiTheme,
} from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

declare module "@material-ui/core/styles/createMuiTheme" {
  // tslint:disable-next-line: interface-name
  interface Theme {
    status: {
      danger: string;
      border: string;
    };
  }
  // allow configuration using `createMuiTheme`
  // tslint:disable-next-line: interface-name
  interface ThemeOptions {
    status?: {
      danger?: string;
      border?: string;
    };
  }

  // tslint:disable-next-line: no-empty-interface
  // tslint:disable-next-line: interface-name
  interface PaletteOptions {
    white?: string;
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1861c0",
    },
    secondary: {
      main: "#0CAA41",
    },
  },
  status: {
    danger: orange[500],
    border: "#e5e5e5",
  },
});

export default theme;
