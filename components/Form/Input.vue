<template>
    <div>
        <input class=" px-3 py-3 w-[100%] outline-none bg-white rounded-lg" :type="type" :placeholder="placeholder"
            v-model="modelValue" autocomplete="on"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
    </div>
</template>

<script setup lang="ts">
interface Input {
    type: string,
    placeholder?: string,
    modelValue: string

}
withDefaults(
    defineProps<Input>(), {
    type: 'text',
    placeholder: 'Placeholder...',

})
defineEmits(["update:modelValue"])
const modelValue = ref('')

</script>

<style scoped>
input {
    border: 1px solid #CED4DA;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #ADB5BD;
}
</style>