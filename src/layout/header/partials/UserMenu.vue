<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

i18n.locale.value = localStorage.getItem('lang')
  ? (localStorage.getItem('lang') as string)
  : 'en'

function setLang(lang: any) {
  localStorage.setItem('lang', lang)
  i18n.locale.value = lang
}

function currentLanguage(lang: any) {
  return i18n.locale.value === lang
}
</script>

<template>
  <!-- begin::Menu -->
  <div
    id="kt-user-menu"
    class="
      menu
      menu-sub
      menu-sub-dropdown
      menu-column
      menu-rounded
      menu-gray-600
      menu-state-bg-light-primary
      fw-bold
      py-4
      fs-6
      w-275px
    "
    data-kt-menu="true"
  >
    <!-- begin::Menu item -->
    <div class="menu-item px-3">
      <div class="menu-content d-flex align-items-center px-3">
        <!-- begin::Avatar -->
        <div class="symbol symbol-50px symbol-circle me-5">
          <img alt="Logo" src="/media/avatars/150-1.jpg">
        </div>
        <!-- end::Avatar -->

        <!-- begin::Username -->
        <div class="d-flex flex-column">
          <div class="fw-bolder d-flex align-items-center fs-5">
            Aria Grande
            <span class="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">Pro</span>
          </div>
          <a href="#" class="fw-bold text-muted text-hover-primary fs-7">aria@kt.com</a>
        </div>
        <!-- end::Username -->
      </div>
    </div>
    <!-- end::Menu item -->

    <!-- begin::Menu separator -->
    <div class="separator my-2" />
    <!-- end::Menu separator -->

    <!-- begin::Menu item -->
    <div class="menu-item px-5">
      <RouterLink to="/account/overview" class="menu-link px-5">
        Profile
      </RouterLink>
    </div>
    <!-- end::Menu item -->

    <!-- begin::Menu item -->
    <div class="menu-item px-5">
      <RouterLink to="/account/overview" class="menu-link px-5">
        <span class="menu-text">Dashboard</span>

        <span class="menu-badge">
          <span class="badge badge-light-danger badge-circle fw-bolder fs-7">3</span>
        </span>
      </RouterLink>
    </div>
    <!-- end::Menu item -->

    <!-- begin::Menu item -->
    <div
      class="menu-item px-5"
      data-kt-menu-trigger="hover"
      data-kt-menu-placement="left-start"
      data-kt-menu-flip="bottom"
    >
      <a href="#" class="menu-link px-5">
        <span class="menu-title">Subscription</span>

        <span class="menu-arrow" />
      </a>

      <!-- begin::Menu sub -->
      <div class="menu-sub menu-sub-dropdown w-175px py-4">
        <!-- begin::Menu item -->
        <div class="menu-item px-3">
          <a href="#" class="menu-link px-5"> Plans </a>
        </div>
        <!-- end::Menu item -->

        <!-- begin::Menu item -->
        <div class="menu-item px-3">
          <a href="#" class="menu-link px-5"> Billing </a>
        </div>
        <!-- end::Menu item -->

        <!-- begin::Menu item -->
        <div class="menu-item px-3">
          <a href="#" class="menu-link px-5"> Payments </a>
        </div>
        <!-- end::Menu item -->

        <!-- begin::Menu item -->
        <div class="menu-item px-3">
          <a href="#" class="menu-link d-flex flex-stack px-5">
            Statements

            <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="View your statements" />
          </a>
        </div>
        <!-- end::Menu item -->

        <!-- begin::Menu separator -->
        <div class="separator my-2" />
        <!-- end::Menu separator -->

        <!-- begin::Menu item -->
        <div class="menu-item px-3">
          <div class="menu-content px-3">
            <label class="form-check form-switch form-check-custom form-check-solid">
              <input class="form-check-input w-30px h-20px" type="checkbox" value="1" checked name="notifications">

              <span class="form-check-label text-muted fs-7">
                Notifications
              </span>
            </label>
          </div>
        </div>
        <!-- end::Menu item -->
      </div>
      <!-- end::Menu sub -->
    </div>
    <!-- end::Menu item -->

    <!-- begin::Menu item -->
    <div class="menu-item px-5">
      <a href="#" class="menu-link px-5"> Reports </a>
    </div>
    <!-- end::Menu item -->

    <!-- begin::Menu separator -->
    <div class="separator my-2" />
    <!-- end::Menu separator -->

    <!-- begin::Menu item -->
    <div
      class="menu-item px-5"
      data-kt-menu-trigger="hover"
      data-kt-menu-placement="left-start"
      data-kt-menu-flip="bottom"
    >
      <a href="#" class="menu-link px-5">
        <span class="menu-title position-relative">
          Language

          <span
            class="
              fs-8
              rounded
              bg-light
              px-3
              py-2
              position-absolute
              translate-middle-y
              top-50
              end-0
            "
          >
            English
            <img class="w-15px h-15px rounded-1 ms-2" src="/media/flags/united-states.svg" alt="metronic">
          </span>
        </span>
      </a>

      <!-- begin::Menu sub -->
      <div class="menu-sub menu-sub-dropdown w-175px py-4">
        <!-- begin::Menu item -->
        <div class="menu-item px-3">
          <a :class="{ active: currentLanguage('en') }" class="menu-link d-flex px-5" @click="setLang('en')">
            <span class="symbol symbol-20px me-4">
              <img class="rounded-1" src="/media/flags/united-states.svg" alt="metronic">
            </span>
            English
          </a>
        </div>
        <!-- end::Menu item -->

        <!-- begin::Menu item -->
        <div class="menu-item px-3">
          <a :class="{ active: currentLanguage('es') }" class="menu-link d-flex px-5" @click="setLang('es')">
            <span class="symbol symbol-20px me-4">
              <img class="rounded-1" src="/media/flags/spain.svg" alt="metronic">
            </span>
            Spanish
          </a>
        </div>
        <!-- end::Menu item -->

        <!-- begin::Menu item -->
        <div class="menu-item px-3">
          <a :class="{ active: currentLanguage('de') }" class="menu-link d-flex px-5" @click="setLang('de')">
            <span class="symbol symbol-20px me-4">
              <img class="rounded-1" src="/media/flags/germany.svg" alt="metronic">
            </span>
            German
          </a>
        </div>
        <!-- end::Menu item -->

        <!-- begin::Menu item -->
        <div class="menu-item px-3">
          <a :class="{ active: currentLanguage('ja') }" class="menu-link d-flex px-5" @click="setLang('ja')">
            <span class="symbol symbol-20px me-4">
              <img class="rounded-1" src="/media/flags/japan.svg" alt="metronic">
            </span>
            Japanese
          </a>
        </div>
        <!-- end::Menu item -->

        <!-- begin::Menu item -->
        <div class="menu-item px-3">
          <a :class="{ active: currentLanguage('fr') }" class="menu-link d-flex px-5" @click="setLang('fr')">
            <span class="symbol symbol-20px me-4">
              <img class="rounded-1" src="/media/flags/france.svg" alt="metronic">
            </span>
            French
          </a>
        </div>
        <!-- end::Menu item -->
      </div>
      <!-- end::Menu sub -->
    </div>
    <!-- end::Menu item -->

    <!-- begin::Menu item -->
    <div class="menu-item px-5 my-1">
      <RouterLink to="/account/settings" class="menu-link px-5">
        Account Settings
      </RouterLink>
    </div>
    <!-- end::Menu item -->

    <!-- begin::Menu item -->
    <div class="menu-item px-5">
      <a class="menu-link px-5"> Sign Out </a>
    </div>
    <!-- end::Menu item -->
  </div>
  <!-- end::Menu -->
</template>
