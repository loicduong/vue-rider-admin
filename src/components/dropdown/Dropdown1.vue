<script setup lang="ts">
import { ref } from 'vue'

interface Filter {
  status: string
  author: boolean
  customer: boolean
  notifications: boolean
}

const data = ref<Filter>({
  status: '1',
  author: true,
  customer: true,
  notifications: true,
})
</script>

<template>
  <!-- begin::Menu 1 -->
  <div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true">
    <!-- begin::Header -->
    <div class="px-7 py-5">
      <div class="fs-5 text-dark fw-bolder">
        Filter Options
      </div>
    </div>
    <!-- end::Header -->

    <!-- begin::Menu separator -->
    <div class="separator border-gray-200" />
    <!-- end::Menu separator -->

    <!-- begin::Form -->
    <div class="px-7 py-5">
      <!-- begin::Input group -->
      <div class="mb-10">
        <!-- begin::Label -->
        <label class="form-label fw-bold">Status:</label>
        <!-- end::Label -->

        <!-- begin::Input -->
        <div>
          <ElSelect v-model="data.status" class="form-select-solid" placeholder="Select option">
            <ElOption label="Approved" value="1">
              Approved
            </ElOption>
            <ElOption label="Pending" value="2">
              Pending
            </ElOption>
            <ElOption label="In Process" value="3">
              In Process
            </ElOption>
            <ElOption label="Rejected" value="4">
              Rejected
            </ElOption>
          </ElSelect>
        </div>
        <!-- end::Input -->
      </div>
      <!-- end::Input group -->

      <!-- begin::Input group -->
      <div class="mb-10">
        <!-- begin::Label -->
        <label class="form-label fw-bold">Member Type:</label>
        <!-- end::Label -->

        <!-- begin::Options -->
        <div class="d-flex">
          <!-- begin::Options -->
          <label
            class="
              form-check form-check-sm form-check-custom form-check-solid
              me-5
            "
          >
            <ElCheckbox v-model="data.author" type="checkbox" value="1" />
            <span class="form-check-label"> Author </span>
          </label>
          <!-- end::Options -->

          <!-- begin::Options -->
          <label class="form-check form-check-sm form-check-custom form-check-solid">
            <ElCheckbox v-model="data.customer" type="checkbox" value="2" />
            <span class="form-check-label"> Customer </span>
          </label>
          <!-- end::Options -->
        </div>
        <!-- end::Options -->
      </div>
      <!-- end::Input group -->

      <!-- begin::Input group -->
      <div class="mb-10">
        <!-- begin::Label -->
        <label class="form-label fw-bold">Notifications:</label>
        <!-- end::Label -->

        <!-- begin::Switch -->
        <div
          class="
            form-check
            form-switch
            form-switch-sm
            form-check-custom
            form-check-solid
          "
        >
          <input v-model="data.notifications" class="form-check-input" type="checkbox" name="notifications">
          <label class="form-check-label"> Enabled </label>
        </div>
        <!-- end::Switch -->
      </div>
      <!-- end::Input group -->

      <!-- begin::Actions -->
      <div class="d-flex justify-content-end">
        <button type="reset" class="btn btn-sm btn-white btn-active-light-primary me-2" data-kt-menu-dismiss="true">
          Reset
        </button>

        <button type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true">
          Apply
        </button>
      </div>
      <!-- end::Actions -->
    </div>
    <!-- end::Form -->
  </div>
  <!-- end::Menu 1 -->
</template>
