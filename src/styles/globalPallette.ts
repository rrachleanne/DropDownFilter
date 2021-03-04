
export const grey = {
    900: '#1c2836',
    800: '#263042',
    700: '#444444',
    600: '#525252',
    500: '#b1b7be',
    400: '#d6d6d6',
    300: '#E6EDF1',
    200: '#f3f3f3',
    100: '#eeeeee',
    50: '#FFFFFF'
  }
  
  export const customColors = {
    primary: {
        main: '#1E365E',
        light: '#0060AC',
        dark: '#162845',
        transparent: 'rgba(0, 96, 170, 0.12)',
        contrastText: '#ffffff'
    },
    secondary: {
        main: '#F89235',
        light: '#ffefe2',
        dark: '#f68520',
        transparent: 'rgba(219, 118, 29, 0.12)',
        contrastText: '#ffffff'
    },
    tertiary: {
        main: '#9c9c9c',
        light: '#f6f8f9',
        lighter: '#F2F3F5',
        dark: '#303030',
        darker: '#2a2a2a',
        contrastText: '#58595b',
    },
    helper: {
        success: '#43AE33',
        info: '#6e7781',
        warning: '#F59245',
        danger: '#BE332A',
        white: '#ffffff',
    },
    background: {
      main: '#ffffff',
      light: '#F2F3F5',
    },
    utility: {
      border: '#d4d4d4',
      white: '#ffffff'
    },
    text: {
      main: '#444444',
      secondary: '#6B6B6B',
      link: '#0060AA',
      active: '#1E365E',
      light: '#AAB0B8',
      disabled: '#6e7781',
    }
  }
  
  const globalPallette =  {
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
  }
  export default globalPallette