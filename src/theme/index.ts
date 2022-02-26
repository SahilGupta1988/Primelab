import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import { GlobalStyles } from "./global";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

export { theme, GlobalStyles };
