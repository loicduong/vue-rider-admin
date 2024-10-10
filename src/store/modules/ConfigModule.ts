import type LayoutConfigTypes from '@/core/config/LayoutConfigTypes'
import layoutConfig from '@/core/config/DefaultLayoutConfig'
import merge from 'deepmerge'
import objectPath from 'object-path'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore('config', () => {
  const config = ref<LayoutConfigTypes>(layoutConfig)
  const initial = ref<LayoutConfigTypes>(layoutConfig)

  function getLayoutConfig(path = '', defaultValue?: any) {
    return objectPath.get(config.value, path, defaultValue)
  }

  function setLayoutConfig(payload: LayoutConfigTypes) {
    config.value = payload
  }

  function resetLayoutConfig() {
    config.value = Object.assign({}, initial.value)
  }

  function overrideLayoutConfig() {
    config.value = merge(config.value, JSON.parse(window.localStorage.getItem('config') || '{}'))
  }

  function overridePageLayoutConfig(payload: LayoutConfigTypes) {
    config.value = merge(config.value, payload)
  }

  return {
    config,
    initial,
    getLayoutConfig,
    setLayoutConfig,
    resetLayoutConfig,
    overrideLayoutConfig,
    overridePageLayoutConfig,
  }
})
