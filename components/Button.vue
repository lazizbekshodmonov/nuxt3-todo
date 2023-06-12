<template>
  <button
    v-bind="$attrs"
    @click="$emit('on-click')"
    :disabled="disabled"
    :class="
      disabled
        ? 'bg-balticsea hover:bg-slate-100 active:transform-none opacity-60'
        : ''
    "
    class="bg-balticsea-light font-bold text-base leading-5 rounded text-white p-3 hover:bg-balticsea transition duration-300 active:scale-95"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
interface Button {
  disabled?: boolean
}
withDefaults(defineProps<Button>(), {
  disabled: false,
})
</script>
