<script setup lang="ts">
import { MenuComponent } from '@/assets/ts/components'
import { nextTick, onMounted } from 'vue'

interface Props {
  menuSelector: string
}

const props = defineProps<Props>()

onMounted(() => {
  nextTick(() => {
    MenuComponent.createInsance(props.menuSelector)
  })
})
</script>

<template>
  <slot name="toggle" />
  <slot name="content" />
</template>
