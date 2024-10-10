import { useConfigStore } from '@/store/modules/ConfigModule'
import { computed } from 'vue'

/**
 * Returns layout config
 * @returns {object}
 */
export const config = computed(() => {
  const configStore = useConfigStore()

  return configStore.getLayoutConfig()
})

/**
 * Set the sidebar display
 * @returns {boolean}
 */
export const displaySidebar = computed(() => {
  const configStore = useConfigStore()

  return configStore.getLayoutConfig('sidebar.display')
})

/**
 * Check if footer container is fluid
 * @returns {boolean}
 */
export const footerWidthFluid = computed(() => {
  const configStore = useConfigStore()

  return configStore.getLayoutConfig('footer.width') === 'fluid'
})

/**
 * Check if header container is fluid
 * @returns {boolean}
 */
export const headerWidthFluid = computed(() => {
  const configStore = useConfigStore()

  return configStore.getLayoutConfig('header.width') === 'fluid'
})

/**
 * Returns header left part type
 * @returns {string}
 */
export const headerLeft = computed(() => {
  const configStore = useConfigStore()

  return configStore.getLayoutConfig('header.left')
})

/**
 * Set the aside display
 * @returns {boolean}
 */
export const asideDisplay = computed(() => {
  const configStore = useConfigStore()

  return configStore.getLayoutConfig('aside.display') === true
})

/**
 * Check if toolbar width is fluid
 * @returns {boolean}
 */
export const toolbarWidthFluid = computed(() => {
  const configStore = useConfigStore()

  return configStore.getLayoutConfig('toolbar.width') === 'fluid'
})

/**
 * Set the toolbar display
 * @returns {boolean}
 */
export const toolbarDisplay = computed(() => {
  const configStore = useConfigStore()

  return configStore.getLayoutConfig('toolbar.display')
})

/**
 * Check if the page loader is enabled
 * @returns {boolean}
 */
export const loaderEnabled = computed(() => {
  const configStore = useConfigStore()

  return configStore.getLayoutConfig('loader.display')
})

/**
 * Check if container width is fluid
 * @returns {boolean}
 */
export const contentWidthFluid = computed(() => {
  const configStore = useConfigStore()

  return configStore.getLayoutConfig('content.width') === 'fluid'
})

/**
 * Page loader logo image
 * @returns {string}
 */
export const loaderLogo = computed(() => {
  const configStore = useConfigStore()

  return configStore.getLayoutConfig('loader.logo')
})

/**
 * Check if the aside menu is enabled
 * @returns {boolean}
 */
export const asideEnabled = computed(() => {
  const configStore = useConfigStore()

  return !!configStore.getLayoutConfig('aside.display')
})

/**
 * Set the aside theme
 * @returns {string}
 */
export const asideTheme = computed(() => {
  const configStore = useConfigStore()

  return configStore.getLayoutConfig('aside.theme')
})

/**
 * Set the subheader display
 * @returns {boolean}
 */
export const subheaderDisplay = computed(() => {
  const configStore = useConfigStore()

  return configStore.getLayoutConfig('toolbar.display')
})

/**
 * Set the aside menu icon type
 * @returns {string}
 */
export const asideMenuIcons = computed(() => {
  const configStore = useConfigStore()

  return configStore.getLayoutConfig('aside.menuIcon')
})

/**
 * Light theme logo image
 * @returns {string}
 */
export const themeDefaultLogo = computed(() => {
  const configStore = useConfigStore()

  return import.meta.env.BASE_URL + configStore.getLayoutConfig('main.logo.default')
})

/**
 * Dark theme logo image
 * @returns {string}
 */
export const themeCompactLogo = computed(() => {
  const configStore = useConfigStore()

  return import.meta.env.BASE_URL + configStore.getLayoutConfig('main.logo.compact')
})

/**
 * Set the header menu icon type
 * @returns {string}
 */
export const headerMenuIcons = computed(() => {
  const configStore = useConfigStore()

  return configStore.getLayoutConfig('header.menuIcon')
})
