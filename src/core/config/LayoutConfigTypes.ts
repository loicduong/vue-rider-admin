interface Main {
  type: 'default'
  primaryColor: string
  logo: {
    default: string
    compact: string
  }
}

interface Loader {
  logo: string
  display: boolean
  type: 'default' | 'spinner-message' | 'spinner-logo'
}

interface ScrollTop {
  display: boolean
}

interface Fixed {
  desktop: boolean
  tabletAndMobile: boolean
}

interface Header {
  display: boolean
  width: 'fixed' | 'fluid'
  menuIcon: 'svg' | 'font'
  fixed: Fixed
}

interface Aside {
  display: boolean
  theme: 'dark' | 'light'
  fixed: boolean
  menuIcon: 'svg' | 'font'
  minimized: boolean
  minimize: boolean
  hoverable: boolean
}

interface Content {
  width: 'fixed' | 'fluid'
}

interface Toolbar {
  display: boolean
  width: 'fixed' | 'fluid'
  fixed: Fixed
}

interface Footer {
  width: 'fixed' | 'fluid'
}

interface LayoutConfig {
  themeName: string
  themeVersion: string
  fullName: string
  main: Main
  loader: Loader
  scrollTop: ScrollTop
  header: Header
  toolbar: Toolbar
  aside: Aside
  content: Content
  footer: Footer
}

export default LayoutConfig

export type {
  Aside,
  Content,
  Fixed,
  Footer,
  Header,
  LayoutConfig,
  Loader,
  Main,
  ScrollTop,
  Toolbar,
}
