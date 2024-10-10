import router from '@/router/index'
import { useConfigStore } from '@/store/modules/ConfigModule'
import ClipboardJS from 'clipboard'
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

// code copy button initialization
export function useCopyClipboard() {
  const _init = (element: any) => {
    let elements = element

    if (typeof elements === 'undefined') {
      elements = document.querySelectorAll('.highlight')
    }

    if (elements && elements.length > 0) {
      for (let i = 0; i < elements.length; ++i) {
        const highlight = elements[i]
        const copy = highlight.querySelector('.highlight-copy')

        if (copy) {
          const clipboard = new ClipboardJS(copy, {
            target: (trigger): any => {
              const highlight = trigger.closest('.highlight')

              if (highlight) {
                let el: Element | null
                  = highlight.querySelector('.tab-pane.active')

                if (el == null) {
                  el = highlight.querySelector('.highlight-code')
                }

                return el as Element
              }

              return highlight
            },
          })

          clipboard.on('success', (e) => {
            const caption = e.trigger.innerHTML

            e.trigger.innerHTML = 'copied'
            e.clearSelection()

            setTimeout(() => {
              e.trigger.innerHTML = caption
            }, 2000)
          })
        }
      }
    }
  }

  return {
    init: (element?: any) => {
      _init(element)
    },
  }
}
