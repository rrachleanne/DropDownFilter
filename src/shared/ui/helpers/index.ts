
import { theme, themeDesktop } from "../../../styles"

export const urlParams = new URLSearchParams(window.location.search);
export const urlPlatform = urlParams.get('platform')

export const storageTheme = localStorage.getItem('theme');
export const isDesktop = urlPlatform === 'desktop' ? urlPlatform === 'desktop' : storageTheme === 'desktop'



export function getTheme() {
  let platform
  if ( urlPlatform ) {
    switch (urlPlatform) {
      case 'web':
        platform = theme
        break
      case 'desktop':
        platform = themeDesktop
        break
      default:
        platform = theme
    }
    return platform
  } else {
    switch (storageTheme) {
      case 'web':
        platform = theme
        break
      case 'desktop':
        platform = themeDesktop
        break
      default:
        platform = theme
    }

  
    return platform
  }
}
console.log(getTheme())

export function getTidyName(name: string) {
  return name.split(" ").join("-").toLowerCase();
}

export function truncate(str: string, num: number) {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num)
}

