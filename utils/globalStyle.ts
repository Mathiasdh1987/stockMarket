import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const colors = {
  primary: '#141419',
  primaryLight: '#222429',
  primaryDark: '#0F0F13',
  grey: '#B2B4B7',
  blue: '#5A95FF',
  white: '#FFFFFF',
  black: '#000000',
}

export const fonts = {
  text: 'Inter',
}

export const media = {
  xxl: '@media (max-width: 1920px)',
  xl: '@media (max-width: 1440px)',
  lg: '@media (max-width: 1184px)',
  md: '@media (max-width: 920px)',
  sm: '@media (max-width: 768px)',
  xs: '@media (max-width: 560px)',
  xxs: '@media (max-width: 420px)',
}

const GlobalStyle = createGlobalStyle`
  ${reset}

   html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }
  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
}
  
  body {
    font-family: ${fonts.text};
    color: ${colors.grey};
    background: ${colors.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  input {
    -webkit-appearance: none;
  }
`

export default GlobalStyle
