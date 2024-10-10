<script setup lang="ts">
import { useCopyClipboard } from '@/core/helpers/documentation'
import Prism from 'prismjs'
import { computed, onMounted, ref } from 'vue'

interface Props {
  lang?: string
  fieldHeight?: number
}

const props = defineProps<Props>()

const height = ref(props.fieldHeight)

const { init } = useCopyClipboard()

const getHeightInPixesls = computed(() => {
  return `${height.value}px`
})

onMounted(() => {
  Prism.highlightAll()
  init()
})
</script>

<template>
  <div class="py-5">
    <div class="highlight">
      <button class="highlight-copy btn" data-bs-toggle="tooltip" title="" data-bs-original-title="Copy code">
        copy
      </button>
      <div class="highlight-code">
        <pre :class="`language-${lang}`" :style="{ height: getHeightInPixesls }"><code :class="`language-${lang}`">
          <slot />
        </code></pre>
      </div>
    </div>
  </div>
</template>
