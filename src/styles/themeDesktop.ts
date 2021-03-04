import { customColors, grey, } from './globalPallette'
import { createMuiTheme } from '@material-ui/core/styles'


// breakpoints
const xl = 1920;
const lg = 1280;
const md = 960;
const sm = 600;
const xs = 0;

// spacing
export const customSpacing = {
  xs:  '0.25rem',
  sm:  '0.5rem',
  md:  '1rem',
  lg:  '1.5rem',
  xl:  '2rem',
  xxl: '4rem'
}

export const customFont = {
  base:  '0.875rem',
  sm:  '0.750rem',
  md:  '0.8125rem',
  lg:  '1.0625rem'
}

export const customLineheight = {
  base:  '1.5715',
  sm:  '1',
  md:  '1.38462',
  lg:  '1'
}

 


export const themeDesktop = createMuiTheme({
  palette: {
    background: {
      default: customColors.background.main
    },
    primary: {
      main: customColors.primary.main,
      light: customColors.primary.light,
      dark: customColors.primary.dark,
      contrastText: customColors.primary.contrastText
    },
    secondary: {
      main: customColors.secondary.main,
      light: customColors.secondary.light,
      dark: customColors.secondary.dark,
      contrastText: customColors.secondary.contrastText
    },
    text: {
      primary: customColors.text.main,
      secondary: customColors.text.secondary,
      disabled: customColors.text.disabled,
      hint: customColors.text.link,
    },
    divider: customColors.utility.border,
    action: {
      active: customColors.text.main,
      hover: customColors.text.main,
      hoverOpacity: 0.15,
      selected: customColors.text.main,
      disabled: customColors.text.disabled
    },
  },
  breakpoints: {
    values: {
      xl,
      lg,
      md,
      sm,
      xs
    }
  },
  spacing: 4,
  shape: {
    borderRadius: 0
  },
  typography: {
    fontFamily: ['Open Sans', 'Helvetica', 'Arial'].join(','),
    htmlFontSize: 16,
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: ['Open Sans', 'Helvetica', 'Arial'].join(','),
      fontWeight: 600,
      fontSize: '17px',
      lineHeight: '1.5rem',
      letterSpacing: '0'
    },
    h2: {
      fontFamily: ['Open Sans', 'Helvetica', 'Arial'].join(','),
      fontWeight: 600,
      fontSize: '17px',
      lineHeight: '1.5rem',
      letterSpacing: '0'
    },
    h3: {
      fontFamily: ['Open Sans', 'Helvetica', 'Arial'].join(','),
      fontWeight: 600,
      fontSize: '17px',
      lineHeight: '1.5rem',
      letterSpacing: '0'
    },
    h4: {
      fontFamily: ['Open Sans', 'Helvetica', 'Arial'].join(','),
      fontWeight: 500,
      fontSize: '17px',
      lineHeight: '1.5rem',
      letterSpacing: '0'
    },
    h5: {
      fontFamily: ['Open Sans', 'Helvetica', 'Arial'].join(','),
      fontWeight: 400,
      fontSize: '13px',
      lineHeight: '2rem',
      letterSpacing: '0',
      color: customColors.primary.main
    },
    h6: {
      fontFamily: ['Open Sans', 'Helvetica', 'Arial'].join(','),
      fontWeight: 600,
      fontSize: '12px',
      lineHeight: 1.2,
      letterSpacing: '0'
    },
    body1: {
      fontFamily: ['Open Sans', 'Helvetica', 'Arial'].join(','),
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '1.5rem',
      letterSpacing: '0'
    },
    body2: {
      fontFamily: ['Open Sans', 'Helvetica', 'Arial'].join(','),
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '1.25rem', // Use rem here for accurate height calculation
      letterSpacing: '0',
    },
    button: {
      fontFamily: ['Open Sans', 'Helvetica', 'Arial'].join(','),
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: 'normal',
      textTransform: 'uppercase',
      color: customColors.primary.light
    }
  },
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.2, 0, 0, 1)',
      easeOut: 'cubic-bezier(0.2, 0, 0, 1)'
    }
  },
  overrides: {
    MuiChip: {
      root: {
        borderRadius: 20,
        height: 36,
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: customColors.tertiary.lighter,
        color: customColors.primary.main,
        "& svg": {
          color: 'currentColor',
        }
      },
      label: {
        fontSize: '14px',
        lineHeight: 1,
        color: 'inherit'
      },
      sizeSmall: {
        height: 28,
        paddingLeft: 8,
        paddingRight: 8
      },
    },
    MuiCard: {
      root: {
        borderRadius: 0,
      }
    },
    MuiButton: {
      root: {
        borderRadius: 0,
        fontSize: '14px',
        padding: '0.344rem 0.75rem',
        height: '39px',
        boxShadow: 'none',
        letterSpacing: '0.01rem',
        '&:hover': {
          boxShadow: 'none',
        },
      },
      sizeSmall: {
        height: '30px',
        fontSize: '12px',
        padding: '7px 12px',
      },
      contained: {
        color: customColors.primary.main,
        backgroundColor: customColors.background.light,
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: '#E6E7EB',
          boxShadow: 'none',
        },
        '&:focus': {
          boxShadow: `0 0 0 2px rgba(162, 174, 195, 0.4)`,
        }
      },
      containedPrimary: {
        color: customColors.primary.contrastText,
        backgroundColor: customColors.primary.main,
        '&:hover': {
          backgroundColor: customColors.primary.dark,
        },
        '&:focus': {
          boxShadow: `0 0 0 2px rgba(162, 174, 195, 0.4)`,
        }
      },
      containedSecondary: {
        color: customColors.secondary.contrastText,
        backgroundColor: customColors.secondary.main,
        '&:hover': {
          backgroundColor: customColors.secondary.dark,
        },
        '&:focus': {
          boxShadow: `0 0 0 2px rgba(233,214, 197, 0.4)`,
        }
      },
      text: {
        padding: '8px 16px',
        '&:hover': {
          backgroundColor: 'transparent'
        }
      }
    },
    MuiBackdrop: {
      root: {
        backgroundColor: `${customColors.primary.main} !important`,
        opacity: '0.2 !important'
      }
    },
    MuiDrawer: {
      root: {},
      paper: {
        position: 'absolute',
        backgroundColor: customColors.primary.main,
        color: customColors.primary.contrastText,
      },
    },
    MuiInputBase: {
      root: {

        // '&:hover': {
        //   border: '1px solid #B2B2B2',
        // },
        '&:focus': {
          boxShadow: '0 0 0 2px #0078d7',
        },
        borderRadius: 0,
      },
      input: {
        border: `1px solid ${grey[900]}`,
        color: customColors.text.main,
        paddingTop: '0.375rem',
        paddingBottom: '0.375rem',
        paddingLeft: '0.375rem',
        paddingRight: '0.375rem',
        fontSize: customFont.sm,
        lineHeight: customLineheight.base,
        '&::placeholder': {
          color: customColors.text.main,
        },
        '&:focus': {
          border: `1px solid #0078d7`,
        },
      },
      inputAdornedStart: {
        marginLeft: 8,
      },
    },
    MuiListItem: {
      root: {
        borderRadius: 0,
      },
      button: {
        '&:hover': {
          backgroundColor: '#F0F2F4',
        },
      },
    },
    MuiMenuItem: {
      root: {
        borderRadius: 0,
        paddingTop: 16,
        paddingBottom: 16,
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true
    },
    MuiCheckbox: {
      disableFocusRipple: true
    },
    MuiInput: {
      disableUnderline: true
    },
    MuiFilledInput: {
      disableUnderline: true
    },
    MuiFormControl: {
      margin: 'normal'
    },
    MuiInputLabel: {
      disableAnimation: true,
      shrink: true
    },
    MuiList: {
      disablePadding: true
    },
    MuiMenu: {
      getContentAnchorEl: null,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'left'
      }
    },
    MuiPaper: {
      elevation: 1
    },
    MuiRadio: {
      color: 'primary'
    },
    MuiTab: {
      disableFocusRipple: true
    }
  }
})

// Override shadows
themeDesktop.shadows[1] = '0 2px 5px rgba(0,0,0,.1)';
