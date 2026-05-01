<script setup>
import { useDropdownContext } from './useDropdown'

const props = defineProps({
  disabled: { type: Boolean, default: false },
  // Закрывать ли dropdown после клика. По умолчанию true.
  closeOnSelect: { type: Boolean, default: true },
  inset: { type: Boolean, default: false },
})

const emit = defineEmits(['select'])
const { close } = useDropdownContext()

const onClick = (e) => {
  if (props.disabled) return
  emit('select', e)
  if (props.closeOnSelect) close()
}

const onKeydown = (e) => {
  if (props.disabled) return
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    emit('select', e)
    if (props.closeOnSelect) close()
  }
}
</script>

<template>
  <div
    role="menuitem"
    :tabindex="disabled ? -1 : 0"
    :data-disabled="disabled || undefined"
    :aria-disabled="disabled || undefined"
    :class="[
      'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors',
      'focus:bg-neutral-100 focus:text-neutral-900 dark:focus:bg-neutral-800 dark:focus:text-neutral-50',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
    ]"
    @click="onClick"
    @keydown="onKeydown"
  >
    <slot />
  </div>
</template>
