<script setup lang="ts">
import { SwapperComponent } from '@/assets/ts/components'
import { nextTick, onMounted } from 'vue'

interface Props {
  breadcrumbs?: Array<any>
  title?: string
}

defineProps<Props>()

onMounted(() => {
  nextTick(() => {
    SwapperComponent.createInsance('[data-kt-swapper="true"]')
  })
})
</script>

<template>
  <!-- begin::Page title -->
  <div
    class="
      page-title
      d-flex
      flex-column
      align-items-start
      justify-content-center
      flex-wrap
      me-2
      mb-5 mb-lg-0
    "
    data-kt-swapper="true"
    data-kt-swapper-mode="prepend"
    data-kt-swapper-parent="{default: '#kt_content_container', lg: '#kt_header_container'}"
  >
    <!-- begin::Heading -->
    <h1 class="text-dark fw-bolder mt-1 mb-1 fs-2">
      {{ title }}
    </h1>
    <!-- end::Heading -->

    <!-- begin::Breadcrumb -->
    <ul v-if="breadcrumbs" class="breadcrumb fw-bold fs-base mb-1">
      <li class="breadcrumb-item text-muted">
        <RouterLink to="/dashboard" class="text-muted text-hover-primary">
          Home
        </RouterLink>
      </li>
      <template v-for="(item, i) in breadcrumbs" :key="i">
        <li
          :class="`breadcrumb-item ${i === breadcrumbs.length - 1 ? 'text-dark' : 'text-muted'
          }`"
        >
          {{ item }}
        </li>
      </template>
    </ul>
    <!-- end::Breadcrumb -->
  </div>
  <!-- end::Page title -->
</template>
