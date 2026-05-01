<script setup>
defineProps({
  inset: { type: Boolean, default: false },
})
</script>

<template>
  <div :class="['px-2 py-1.5 text-sm font-semibold text-neutral-900 dark:text-neutral-50', inset && 'pl-8']">
    <slot />
  </div>
</template>
