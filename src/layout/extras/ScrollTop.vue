<script setup lang="ts">
import { ScrollTopComponent } from '@/assets/ts/components/_ScrollTopComponent'
import { onMounted } from 'vue'

onMounted(() => {
  ScrollTopComponent.reinitialization()
})
</script>

<template>
  <!-- begin::Scrolltop -->
  <div id="kt_scrolltop" class="scrolltop" data-kt-scrolltop="true">
    <span class="svg-icon">
      <InlineSvg src="/media/icons/duotune/arrows/arr066.svg" />
    </span>
  </div>
  <!-- end::Scrolltop -->
</template>
