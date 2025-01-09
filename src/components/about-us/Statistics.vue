<script setup lang="ts">
import { useTransition } from '@vueuse/core'
import { ref } from 'vue'

interface Props {
  classes?: string
}

defineProps<Props>()

const businesses = ref(0)
const businessesValue = useTransition(() => businesses.value, { duration: 3000 })

const reports = ref(0)
const reportsValue = useTransition(() => reports.value, { duration: 3000 })

const payments = ref(0)
const paymentsValue = useTransition(() => payments.value, { duration: 3000 })

businesses.value = 700
reports.value = 80
payments.value = 35
</script>

<template>
  <!-- begin::Statistics -->
  <div :class="classes" class="card bg-light">
    <!-- begin::Body -->
    <div class="card-body py-15">
      <!-- begin::Wrapper -->
      <div class="d-flex flex-center">
        <!-- begin::Items -->
        <div class="d-flex justify-content-between mb-10 mx-auto w-xl-900px">
          <!-- begin::Item -->
          <div class="octagon d-flex flex-center h-200px w-200px bg-white mx-2">
            <!-- begin::Content -->
            <div class="text-center">
              <!-- begin::Symbol -->
              <span class="svg-icon svg-icon-2tx svg-icon-primary">
                <InlineSvg src="/media/icons/duotune/general/gen025.svg" />
              </span>
              <!-- end::Symbol -->

              <!-- begin::Text -->
              <div class="mt-1">
                <!-- begin::Animation -->
                <div class="d-flex align-items-center">
                  <div class="min-w-70px">
                    <ElStatistic :value="businessesValue" suffix=" +" />
                  </div>
                </div>
                <!-- end::Animation -->

                <!-- begin::Label -->
                <span class="text-gray-600 fw-bold fs-5 lh-0">Businesses</span>
                <!-- end::Label -->
              </div>
              <!-- end::Text -->
            </div>
            <!-- end::Content -->
          </div>
          <!-- end::Item -->

          <!-- begin::Item -->
          <div class="octagon d-flex flex-center h-200px w-200px bg-white mx-2">
            <!-- begin::Content -->
            <div class="text-center">
              <!-- begin::Symbol -->
              <span class="svg-icon svg-icon-2tx svg-icon-success">
                <InlineSvg src="/media/icons/duotune/graphs/gra008.svg" />
              </span>
              <!-- end::Symbol -->

              <!-- begin::Text -->
              <div class="mt-1">
                <!-- begin::Animation -->
                <div
                  class="
                    fs-lg-2hx fs-2x
                    fw-bolder
                    text-gray-800
                    d-flex
                    align-items-center
                  "
                >
                  <div class="min-w-50px">
                    <ElStatistic :value="reportsValue" suffix=" K+" />
                  </div>
                </div>
                <!-- end::Animation -->

                <!-- begin::Label -->
                <span class="text-gray-600 fw-bold fs-5 lh-0">Quick Reports</span>
                <!-- end::Label -->
              </div>
              <!-- end::Text -->
            </div>
            <!-- end::Content -->
          </div>
          <!-- end::Item -->

          <!-- begin::Item -->
          <div class="octagon d-flex flex-center h-200px w-200px bg-white mx-2">
            <!-- begin::Content -->
            <div class="text-center">
              <!-- begin::Symbol -->
              <span class="svg-icon svg-icon-2tx svg-icon-info">
                <InlineSvg src="/media/icons/duotune/ecommerce/ecm002.svg" />
              </span>
              <!-- end::Symbol -->

              <!-- begin::Text -->
              <div class="mt-1">
                <!-- begin::Animation -->
                <div
                  class="
                    fs-lg-2hx fs-2x
                    fw-bolder
                    text-gray-800
                    d-flex
                    align-items-center
                  "
                >
                  <div class="min-w-50px">
                    <div class="min-w-70px">
                      <ElStatistic :value="paymentsValue" suffix=" M+" />
                    </div>
                  </div>
                </div>
                <!-- end::Animation -->

                <!-- begin::Label -->
                <span class="text-gray-600 fw-bold fs-5 lh-0">Payments</span>
                <!-- end::Label -->
              </div>
              <!-- end::Text -->
            </div>
            <!-- end::Content -->
          </div>
          <!-- end::Item -->
        </div>
        <!-- end::Items -->
      </div>
      <!-- end::Wrapper -->

      <!-- begin::Testimonial -->
      <div class="fs-2 fw-bold text-muted text-center mb-3">
        <span class="fs-1 lh-1 text-gray-700">“</span>

        When you care about your topic, you’ll write about it in a <br><span class="text-gray-700 me-1">more
          powerful</span>, emotionally expressive way

        <span class="fs-1 lh-1 text-gray-700">“</span>
      </div>
      <!-- end::Testimonial -->

      <!-- begin::Author -->
      <div class="fs-2 fw-bold text-muted text-center">
        <a href="#" class="link-primary fs-4 fw-bolder">Marcus Levy</a>
        <span class="fs-4 fw-bolder text-gray-600">, KeenThemes CEO</span>
      </div>
      <!-- end::Author -->
    </div>
    <!-- end::Body -->
  </div>
  <!-- end::Statistics -->
</template>

<style lang="scss" scoped>
:deep(.el-statistic__content) {
  font-weight: bolder;
  font-size: calc(1.325rem + 0.9vw);
  color: var(--bs-gray-800);

  @media (min-width: 1200px) {
    font-size: 2.5rem;
  }
}
</style>
