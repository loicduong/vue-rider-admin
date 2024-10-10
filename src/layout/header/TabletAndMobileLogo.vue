<template>
  <!-- begin::Logo bar -->
  <div class="d-flex d-lg-none align-items-center flex-grow-1">
    <!-- begin::Aside Toggle -->
    <div id="kt_aside_toggle" class="btn btn-icon btn-circle btn-active-light-primary ms-n2 me-1">
      <span class="svg-icon svg-icon-2x">
        <InlineSvg src="/media/icons/duotune/abstract/abs015.svg" />
      </span>
    </div>
    <!-- end::Aside Toggle -->

    <!-- begin::Logo -->
    <RouterLink to="/dashboard" class="d-lg-none">
      <img alt="Logo" src="/media/logos/logo-compact.svg" class="max-h-40px">
    </RouterLink>
    <!-- end::Logo -->
  </div>
  <!-- end::Logo bar -->
</template>
