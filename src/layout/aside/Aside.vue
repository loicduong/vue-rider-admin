<script setup lang="ts">
import { DrawerComponent } from '@/assets/ts/components'
import KTMenu from '@/layout/aside/Menu.vue'
import { onMounted } from 'vue'

onMounted(() => {
  DrawerComponent.reinitialization()
})
</script>

<template>
  <!-- begin::Aside -->
  <div
    id="kt_aside"
    class="aside bg-white"
    data-kt-drawer="true"
    data-kt-drawer-name="aside"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '300px': '250px'}"
    data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_aside_toggle"
  >
    <!-- begin::Brand -->
    <div id="kt_aside_logo" class="aside-logo flex-column-auto pt-9 pb-7 px-9">
      <!-- begin::Logo -->
      <a href="#">
        <img alt="Logo" src="/media/logos/logo-default.svg" class="max-h-50px logo-default">
        <img alt="Logo" src="/media/logos/logo-compact.svg" class="max-h-50px logo-minimize">
      </a>
      <!-- end::Logo -->
    </div>
    <!-- end::Brand -->

    <!-- begin::Aside menu -->
    <div class="aside-menu flex-column-fluid px-3 px-lg-6">
      <KTMenu />
    </div>
    <!-- end::Aside menu -->

    <!-- begin::Footer -->
    <div id="kt_aside_footer" class="aside-footer flex-column-auto px-6 pb-5">
      <a href="https://keenthemes.com/products/rider-vue-pro" class="btn btn-light-primary w-100">
        Upgrade To Pro
      </a>
    </div>
    <!-- end::Footer -->
  </div>
  <!-- end::Aside -->
</template>
