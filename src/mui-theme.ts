import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = {
  light: createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#556cd6",
      },
      secondary: {
        main: "#19857b",
      },
      error: {
        main: red.A400,
      },
    },
  }),
  dark: createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#556cd6",
      },
      secondary: {
        main: "#19857b",
      },
      error: {
        main: red.A400,
      },
    },
  }),
};
