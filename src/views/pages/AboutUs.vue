<script setup lang="ts">
import KTAbout from '@/components/about-us/About.vue'
import KTPublications from '@/components/about-us/Publications.vue'
import KTSocialLinks from '@/components/about-us/SocialLinks.vue'
import KTStatistics from '@/components/about-us/Statistics.vue'
import { setCurrentPageBreadcrumbs } from '@/core/helpers/breadcrumb'
import { onMounted } from 'vue'

onMounted(() => {
  setCurrentPageBreadcrumbs('About Us', ['Pages', 'About Us'])
})
</script>

<template>
  <!-- begin::About card -->
  <div class="card">
    <!-- begin::Body -->
    <div class="card-body p-lg-17">
      <KTAbout classes="mb-18" />
      <KTStatistics classes="mb-18" />
      <KTPublications classes="mb-16" />
      <KTSocialLinks />
    </div>
    <!-- end::Body -->
  </div>
  <!-- end::About card -->
</template>
