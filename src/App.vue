<script setup lang="ts">
import { useConfigStore } from '@/store/modules/ConfigModule'
import { onMounted } from 'vue'

const configStore = useConfigStore()

onMounted(() => {
  /**
   * this is to override the layout config using saved data from localStorage
   * remove this to use config only from static config (@/core/config/DefaultLayoutConfig.ts)
   */
  configStore.overrideLayoutConfig()
})
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@import 'bootstrap-icons/font/bootstrap-icons.css';
@import '@vueform/multiselect/themes/default.css';
@import 'sweetalert2/dist/sweetalert2.css';
@import 'element-plus/theme-chalk/index.css';
@import '@fortawesome/fontawesome-free/css/all.min.css';

// Main demo style scss
@import 'assets/sass/plugins';
@import 'assets/sass/style';
</style>
