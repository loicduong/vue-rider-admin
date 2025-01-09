import { config } from '@/core/helpers/config'
import { useBodyStore } from '@/store/modules/BodyModule'
import { get } from 'lodash'

class LayoutService {
  /**
   * @description initialize default layout
   */
  public static init(): void {
    LayoutService.initLayout()
    LayoutService.initHeader()
    LayoutService.initToolbar()
    LayoutService.initAside()
    LayoutService.initFooter()
  }

  /**
   * @description init layout
   */
  public static initLayout(): void {
    const bodyStore = useBodyStore()

    bodyStore.addBodyAttribute({
      qulifiedName: 'id',
      value: 'kt_body',
    })

    if (get(config.value, 'loader.display')) {
      bodyStore.addBodyClassName('page-loading-enabled')
      bodyStore.addBodyClassName('page-loading')
    }
  }

  /**
   * @description init header
   */
  public static initHeader(): void {
    if (get(config.value, 'header.fixed.desktop')) {
      const bodyStore = useBodyStore()

      bodyStore.addBodyClassName('header-fixed')
    }

    if (get(config.value, 'header.fixed.tabletAndMobile')) {
      const bodyStore = useBodyStore()

      bodyStore.addBodyClassName('header-tablet-and-mobile-fixed')
    }
  }

  /**
   * @description init toolbar
   */
  public static initToolbar(): void {
    if (!get(config.value, 'toolbar.display')) {
      return
    }

    const bodyStore = useBodyStore()

    bodyStore.addBodyClassName('toolbar-enabled')

    if (get(config.value, 'toolbar.fixed')) {
      bodyStore.addBodyClassName('toolbar-fixed')
    }

    bodyStore.addBodyClassName('toolbar-tablet-and-mobile-fixed')
  }

  /**
   * @description init aside
   */
  public static initAside(): void {
    if (!get(config.value, 'aside.display')) {
      return
    }

    // Enable Aside
    const bodyStore = useBodyStore()

    bodyStore.addBodyClassName('aside-enabled')

    // Minimized
    if (
      get(config.value, 'aside.minimized')
      && get(config.value, 'aside.toggle')
    ) {
      bodyStore.addBodyAttribute({
        qulifiedName: 'data-kt-aside-minimize',
        value: 'on',
      })
    }

    if (get(config.value, 'aside.fixed')) {
      // Fixed Aside
      bodyStore.addBodyClassName('aside-fixed')
    }

    // Default minimized
    if (get(config.value, 'aside.minimized')) {
      bodyStore.addBodyAttribute({
        qulifiedName: 'data-kt-aside-minimize',
        value: 'on',
      })
    }
  }

  /**
   * @description init footer
   */
  public static initFooter(): void {
    // Fixed header
    if (get(config.value, 'footer.width') === 'fixed') {
      const bodyStore = useBodyStore()

      bodyStore.addBodyClassName('footer-fixed')
    }
  }
}

export default LayoutService
