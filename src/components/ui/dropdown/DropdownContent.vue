<script setup>
import { onBeforeUnmount, watch, ref, nextTick } from 'vue'
import { useDropdownContext } from './useDropdown'

const {
  isOpen, triggerRef, contentRef, triggerId, contentId,
  close, focusNext, focusPrev, focusFirst, focusLast,
} = useDropdownContext()

const props = defineProps({
  align: { type: String, default: 'start' },        // 'start' | 'center' | 'end'
  side: { type: String, default: 'bottom' },        // 'top' | 'bottom'
  sideOffset: { type: Number, default: 4 },
})

const position = ref({ top: 0, left: 0, minWidth: 0 })

const updatePosition = () => {
  if (!triggerRef.value || !contentRef.value) return
  const t = triggerRef.value.getBoundingClientRect()
  const c = contentRef.value.getBoundingClientRect()

  let top = props.side === 'bottom'
    ? t.bottom + props.sideOffset
    : t.top - c.height - props.sideOffset

  let left = t.left
  if (props.align === 'center') left = t.left + t.width / 2 - c.width / 2
  else if (props.align === 'end') left = t.right - c.width

  // флип, если не помещается по горизонтали
  const pad = 8
  if (left < pad) left = pad
  if (left + c.width > window.innerWidth - pad) left = window.innerWidth - c.width - pad

  position.value = { top, left, minWidth: t.width }
}

const onDocClick = (e) => {
  const target = e.target
  if (contentRef.value?.contains(target)) return
  if (triggerRef.value?.contains(target)) return
  close()
}

const onKeydown = (e) => {
  switch (e.key) {
    case 'Escape': e.preventDefault(); close(); break
    case 'ArrowDown': e.preventDefault(); focusNext(); break
    case 'ArrowUp': e.preventDefault(); focusPrev(); break
    case 'Home': e.preventDefault(); focusFirst(); break
    case 'End': e.preventDefault(); focusLast(); break
    case 'Tab': close(); break
  }
}

watch(isOpen, async (open) => {
  if (open) {
    await nextTick()
    updatePosition()
    document.addEventListener('mousedown', onDocClick)
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition, true)
  } else {
    document.removeEventListener('mousedown', onDocClick)
    window.removeEventListener('resize', updatePosition)
    window.removeEventListener('scroll', updatePosition, true)
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', onDocClick)
  window.removeEventListener('resize', updatePosition)
  window.removeEventListener('scroll', updatePosition, true)
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-show="isOpen"
        :id="contentId"
        ref="contentRef"
        role="menu"
        :aria-labelledby="triggerId"
        :style="{
          position: 'fixed',
          top: `${position.top}px`,
          left: `${position.left}px`,
          minWidth: `${Math.max(position.minWidth, 128)}px`,
          transformOrigin: side === 'bottom' ? 'top' : 'bottom',
        }"
        class="z-[1000] overflow-hidden rounded-md border border-neutral-200 bg-white p-1 text-neutral-950 shadow-md dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50"
        @keydown="onKeydown"
      >
        <slot />
      </div>
    </Transition>
  </Teleport>
</template>
