<script setup>
import { useDropdownContext } from './useDropdown'

const { isOpen, triggerRef, triggerId, contentId, toggle, open, focusFirst, focusLast } = useDropdownContext()

defineProps({
  // Если true — слот рендерится без обёртки (asChild pattern из shadcn). Слот должен содержать ровно один элемент.
  asChild: { type: Boolean, default: false },
})

const onKeydown = (e) => {
  if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    open()
    focusFirst()
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    open()
    focusLast()
  }
}
</script>

<template>
  <button
    v-if="!asChild"
    :id="triggerId"
    ref="triggerRef"
    type="button"
    aria-haspopup="menu"
    :aria-expanded="isOpen"
    :aria-controls="contentId"
    class="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 dark:hover:bg-neutral-900 dark:focus-visible:ring-neutral-300"
    @click="toggle"
    @keydown="onKeydown"
  >
    <slot />
  </button>

  <!-- asChild: пробрасываем биндинги пользователю через scoped slot props -->
  <slot
    v-else
    :ref="(el) => (triggerRef = el?.$el ?? el)"
    :props="{
      id: triggerId,
      'aria-haspopup': 'menu',
      'aria-expanded': isOpen,
      'aria-controls': contentId,
      onClick: toggle,
      onKeydown,
    }"
  />
</template>
