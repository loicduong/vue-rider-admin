<script setup lang="ts">
import {
  DrawerComponent,
  MenuComponent,
  ScrollComponent,
} from '@/assets/ts/components/index'
import {
  asideEnabled,
  contentWidthFluid,
  loaderEnabled,
  loaderLogo,
  themeCompactLogo,
  themeDefaultLogo,
} from '@/core/helpers/config'
import { removeModalBackdrop } from '@/core/helpers/dom'
import KTLoader from '@/core/Loader.vue'
import HtmlClass from '@/core/services/LayoutService'
import KTAside from '@/layout/aside/Aside.vue'
import KTScrollTop from '@/layout/extras/ScrollTop.vue'
import KTUpgradeToPro from '@/layout/extras/UpgradeToPro.vue'
import KTFooter from '@/layout/footer/Footer.vue'
import KTHeader from '@/layout/header/Header.vue'
import KTUserMenu from '@/layout/header/partials/ActivityDrawer.vue'
import { useBodyStore } from '@/store/modules/BodyModule'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const bodyStore = useBodyStore()
const route = useRoute()

// show page loading
bodyStore.addBodyClassName('page-loading')

// initialize html element classes
HtmlClass.init()

onMounted(() => {
  DrawerComponent.updateAll()
  ScrollComponent.updateAll()
  MenuComponent.createInstances('[data-kt-menu="true"]')

  // Simulate the delay page loading
  setTimeout(() => {
    // Remove page loader after some time
    bodyStore.removeBodyClassName('page-loading')
  }, 500)
})

watch(
  () => route.path,
  () => {
    MenuComponent.updateDropdowns()

    setTimeout(() => {
      DrawerComponent.bootstrap()
      ScrollComponent.bootstrap()
      MenuComponent.createInstances('[data-kt-menu="true"]')
    }, 10)

    removeModalBackdrop()
  },
)
</script>

<template>
  <KTLoader v-if="loaderEnabled" :logo="loaderLogo" />

  <!-- begin:: Body -->
  <div class="page d-flex flex-row flex-column-fluid">
    <!-- begin:: Aside Left -->
    <KTAside v-if="asideEnabled" :compact-logo="themeCompactLogo" :default-logo="themeDefaultLogo" />
    <!-- end:: Aside Left -->

    <div id="kt_wrapper" class="wrapper d-flex flex-column flex-row-fluid">
      <KTHeader />

      <!-- begin:: Content -->
      <div id="kt_content" class="content d-flex flex-column flex-column-fluid fs-6">
        <!-- begin:: Content Body -->
        <div
          id="kt_content_container"
          :class="{
            'container-fluid': contentWidthFluid,
            'container': !contentWidthFluid,
          }"
        >
          <RouterView />
        </div>
        <!-- end:: Content Body -->
      </div>
      <!-- end:: Content -->
      <KTFooter />
    </div>
  </div>
  <!-- end:: Body -->
  <KTScrollTop />
  <KTUpgradeToPro />
  <KTUserMenu />
</template>
