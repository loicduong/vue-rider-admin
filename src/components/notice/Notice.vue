<script setup lang="ts">
interface Props {
  classes?: string
  icon?: string
  title?: string
  body?: string
  button?: string
  buttonLabel?: string
  buttonUrl?: string
  buttonModalId?: string
  color?: string
  padding?: string
}

withDefaults(defineProps<Props>(), {
  buttonLabel: 'Button',
  buttonUrl: '#',
  color: 'primary',
  padding: 'p-6',
})
</script>

<template>
  <!-- begin::Notice -->
  <div
    :class="`notice
      d-flex
      bg-light-${color}
      rounded
      border-${color}
      border
      border-dashed
      ${classes}
     ${padding}`"
  >
    <!-- begin::Icon -->
    <span v-if="icon" :class="`svg-icon svg-icon-2tx svg-icon-${color} me-4 ms-15 ms-lg-15`">
      <InlineSvg :src="icon" />
    </span>
    <!-- end::Icon -->

    <!-- begin::Wrapper -->
    <div class="d-flex flex-stack flex-grow-1">
      <!-- begin::Content -->
      <div v-if="body || title" :class="`fw-bold ${button}`">
        <h4 v-if="title" class="text-gray-900 fw-bolder">
          {{ title }}
        </h4>

        <div v-if="body" class="fs-6 text-gray-700 pe-7" v-html="body" />
      </div>
      <!-- end::Content -->

      <!-- begin::Action -->
      <a
        v-if="button"
        :href="buttonUrl"
        :class="`btn btn-${color} px-6 align-self-center text-nowrap`"
        :data-bs-toggle="buttonModalId ? 'modal' : false"
        :data-bs-target="buttonModalId ? buttonModalId : false"
      >
        {{ buttonLabel }}
      </a>
      <!-- end::Action -->
    </div>
    <!-- end::Wrapper -->
  </div>
  <!-- end::Notice -->
</template>
