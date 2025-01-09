import i18n from '@/core/plugins/i18n'
import ElementPlus from 'element-plus'

import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'
/*
TIP: To get started with clean router change path to @/router/clean.ts.
 */
import router from './router'

// imports for app initialization
import { initApexCharts } from '@/core/plugins/apexcharts'
import { initInlineSvg } from '@/core/plugins/inline-svg'
import { initVeeValidate } from '@/core/plugins/vee-validate'

import '@/core/plugins/keenthemes'
import 'bootstrap'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

initApexCharts(app)
initInlineSvg(app)
initVeeValidate()

app.use(i18n)

app.mount('#app')
