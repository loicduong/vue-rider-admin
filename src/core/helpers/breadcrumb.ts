import { useBreadcrumbsStore } from '@/store/modules/BreadcrumbsModule'

/**
 * Sets current page breadcrumbs
 * @param {string} pageTitle Current page title
 * @param {Array<string>} breadcrumbs Current page breadcrumbs
 */
export function setCurrentPageBreadcrumbs(pageTitle: string, breadcrumbs: Array<string>): void {
  const breadcrumbsStore = useBreadcrumbsStore()

  breadcrumbsStore.setBreadcrumbMutation({
    title: pageTitle,
    pageBreadcrumbPath: breadcrumbs,
  })
}

/**
 * Sets current page breadcrumbs
 * @param {string} title Current page title name
 */
export function setCurrentPageTitle(title: string): void {
  const breadcrumbsStore = useBreadcrumbsStore()

  breadcrumbsStore.setBreadcrumbMutation({
    title,
  })
}
