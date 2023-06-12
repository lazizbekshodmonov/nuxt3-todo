<template>
  <div
    class="relative"
    :class="
      type == 'search' ? ' rounded-[32px] overflow-hidden bg-white mx-0' : ''
    "
  >
    <div
      v-if="type == 'search'"
      class="absolute z-10 px-2 inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
    >
      <svg
        aria-hidden="true"
        class="w-5 h-5 text-gray-500 dark:text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    </div>
    <input
      class="px-3 py-3 w-[100%] outline-none bg-white rounded-lg text-balticsea-light"
      :type="type"
      :class="
        type == 'search' ? 'w-[211px] h-[36px] bg-white ml-10 rounded-none' : ''
      "
      :placeholder="placeholder"
      v-model="modelValue"
      :value="modelValue"
      autocomplete="on"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
  </div>
</template>

<script setup lang="ts">
interface Input {
  type: string
  placeholder?: string
  value?: string
}
const props = withDefaults(defineProps<Input>(), {
  type: 'text',
  placeholder: 'Placeholder...',
  value: '',
})
defineEmits(['update:modelValue'])
const modelValue = ref('')

modelValue.value = props.value
</script>

<style scoped>
input {
  border: 1px solid #ced4da;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  /* color: #adb5bd; */
}
</style>
