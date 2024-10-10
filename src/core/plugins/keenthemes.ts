import {
  DrawerComponent,
  MenuComponent,
  ScrollComponent,
  ScrollTopComponent,
  StickyComponent,
  ToggleComponent,
} from '@/assets/ts/components'

/**
 * Initialize KeenThemes custom components
 */
setTimeout(() => {
  ToggleComponent.bootstrap()
  ScrollComponent.bootstrap()
  ScrollTopComponent.bootstrap()
  DrawerComponent.bootstrap()
  StickyComponent.bootstrap()
  MenuComponent.bootstrap()
}, 100)
