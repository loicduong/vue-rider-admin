import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface StoreInfo {
  classes: {
    header?: Array<string>
    headerContainer?: Array<string>
    headerMobile?: Array<string>
    headerMenu?: Array<string>
    aside?: Array<string>
    asideMenu?: Array<string>
    asideToggle?: Array<string>
    toolbar?: Array<string>
    toolbarContainer?: Array<string>
    content?: Array<string>
    contentContainer?: Array<string>
    footerContainer?: Array<string>
    sidebar?: Array<string>
    pageTitle?: Array<string>
  }
}

export const useBodyStore = defineStore('body', () => {
  const classes = ref<StoreInfo['classes']>({})

  function getClasses() {
    return (position?: keyof StoreInfo['classes']) => {
      if (typeof position !== 'undefined') {
        return classes.value[position]
      }
      return classes.value
    }
  }

  function appendBreadcrumb(payload: { position: keyof StoreInfo['classes'], className: string }) {
    const { position, className } = payload
    if (!classes.value[position]) {
      classes.value[position] = []
    }
    classes.value[position]?.push(className)
  }

  function addBodyClassName(className: string) {
    document.body.classList.add(className)
  }

  function addBodyAttribute(payload: { qulifiedName: string, value: string }) {
    const { qulifiedName, value } = payload
    document.body.setAttribute(qulifiedName, value)
  }

  function removeBodyClassName(className: string) {
    document.body.classList.remove(className)
  }

  return {
    getClasses,
    appendBreadcrumb,
    addBodyClassName,
    removeBodyClassName,
    addBodyAttribute,
  }
})
