import router from '@/router/index'
import { useConfigStore } from '@/store/modules/ConfigModule'
import { computed } from 'vue'
/**
 * Return name of the theme
 * @returns {string}
 */
export const themeName = computed(() => {
  const configStore = useConfigStore()

  return configStore.getLayoutConfig('themeName')
})

/**
 * Return name of the theme
 * @returns {string}
 */
export const fullName = computed(() => {
  const configStore = useConfigStore()

  return configStore.getLayoutConfig('fullName')
})

/**
 * Return version of the theme
 * @returns {string}
 */
export const version = computed(() => {
  const configStore = useConfigStore()

  return configStore.getLayoutConfig('themeVersion')
})

export const isDocPage = computed(() => {
  return !(!router.currentRoute.value.path.includes('documentation'))
})
