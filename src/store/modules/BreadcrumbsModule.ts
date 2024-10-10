import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Breadcrumb {
  title: string
  pageBreadcrumbPath?: Array<string>
}

export const useBreadcrumbsStore = defineStore('breadcrumbs', () => {
  const breadcrumbs = ref<Breadcrumb>()

  function pageBreadcrumbPath() {
    return breadcrumbs.value?.pageBreadcrumbPath
  }

  function pageTitle() {
    return breadcrumbs.value?.title
  }

  function setBreadcrumbMutation(payload: Breadcrumb) {
    breadcrumbs.value = payload
  }

  return {
    breadcrumbs,
    pageBreadcrumbPath,
    pageTitle,
    setBreadcrumbMutation,
  }
})
