import { createMuiTheme } from "@material-ui/core/styles";
import globalTypography from "./globalTypography";
import globalPallette from "./globalPallette";
import globalProps from "./globalProps";
import globalBaseline from "./globalBaseline";

// breakpoints
const xl = 1920;
const lg = 1280;
const md = 960;
const sm = 600;
const xs = 0;

export const theme = createMuiTheme({
  palette: globalPallette,
  breakpoints: {
    values: {
      xl,
      lg,
      md,
      sm,
      xs,
    },
  },
  spacing: 4,
  shape: {
    borderRadius: 8,
  },
  typography: globalTypography,
  transitions: {},
  overrides: {
    MuiCssBaseline: globalBaseline,
    MuiAvatar: {},
    MuiChip: {},
    MuiCard: {},
    MuiButton: {
      root: {
        borderRadius: 4,
        padding: "10px 15px",
        height: "39px",
      },
    },
    MuiBackdrop: {},
    MuiDrawer: {},
    MuiInputBase: {},
    MuiListItem: {},
    MuiMenuItem: {},
    MuiLink: {},
    MuiToolbar: {},
  },
  props: globalProps,
});

// Override shadows
theme.shadows[1] = "0 2px 5px rgba(0,0,0,.1)"; // mono[200]
