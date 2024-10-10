<script setup lang="ts">
import { StickyComponent } from '@/assets/ts/components'
import { headerWidthFluid } from '@/core/helpers/config'
import KTPageTitle from '@/layout/header/PageTitle.vue'
import KTTabletAndMobileLogo from '@/layout/header/TabletAndMobileLogo.vue'
import KTTopbar from '@/layout/header/Topbar.vue'
import { useBreadcrumbsStore } from '@/store/modules/BreadcrumbsModule'
import { computed, onMounted } from 'vue'

const breadcrumbsStore = useBreadcrumbsStore()

const pageTitle = computed(() => {
  return breadcrumbsStore.pageTitle()
})

const breadcrumbs = computed(() => {
  return breadcrumbsStore.pageBreadcrumbPath()
})

onMounted(() => {
  StickyComponent.bootstrap()
})
</script>

<template>
  <!-- begin::Header -->
  <div
    id="kt_header"
    class="header"
    data-kt-sticky="true"
    data-kt-sticky-name="header"
    data-kt-sticky-offset="{default: '200px', lg: '300px'}"
    style="animation-duration: 0.3s"
  >
    <!-- begin::Container -->
    <div
      id="kt_header_container"
      :class="{
        'container-fluid': headerWidthFluid,
        'container': !headerWidthFluid,
      }"
      class="d-flex align-items-stretch justify-content-between"
    >
      <KTPageTitle :title="pageTitle" :breadcrumbs="breadcrumbs" />

      <KTTabletAndMobileLogo />

      <KTTopbar />
    </div>
    <!-- end::Container -->
  </div>
  <!-- end::Header -->
</template>
