<template>
  <div class="checkbox-animate flex items-center">
    <label>
      <input
        name="check"
        type="checkbox"
        id="checkboxInput"
        :checked="props['modelValue']"
        @change="
          $emit(
            'update:modelValue',
            ($event.target as HTMLInputElement).checked
          )
        "
      />
      <span class="input-check"></span>
      <slot></slot>
    </label>
  </div>

  <!-- {{ checkboxValue }} -->
</template>
<script lang="ts" setup>
interface Checkbox {
  label: string
  modelValue: boolean
}
const props = defineProps({
  modelValue: {
    default: false,
  },
})
defineEmits(['update:modelValue'])
</script>
<style scoped>
* {
  box-sizing: border-box;
}

.checkbox-animate {
  display: flex;

  align-items: center;
  width: 100%;
  font-family: arial;
  font-size: 20px;
}
.checkbox-animate label {
  position: relative;
  cursor: pointer;
}
.checkbox-animate label input {
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}

.input-check {
  display: inline-block;
  width: 27px;
  height: 27px;
  border-radius: 4px;
  border: 2px solid #ccc;
  position: relative;
  top: 6px;
  margin-right: 7px;
  transition: 0.4s;
}

.input-check::before {
  content: '';
  display: inline-block;
  width: 15px;
  height: 8px;
  border-bottom: 4px solid #fff;
  border-left: 4px solid #fff;
  transform: scale(0) rotate(-45deg);
  position: absolute;
  top: 6px;
  left: 4px;
  transition: 0.4s;
}

.checkbox-animate label input:checked ~ .input-check {
  background-color: #06b1c5;
  border-color: #06b1c5;
  animation-name: input-animate;
  animation-duration: 0.7s;
}

.checkbox-animate label input:checked ~ .input-check::before {
  transform: scale(1) rotate(-45deg);
  animation-name: input-check;
  animation-duration: 0.2s;
  animation-delay: 0.3s;
}

@keyframes input-animate {
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.3, 0.7);
  }
  55% {
    transform: scale(1);
  }
  70% {
    transform: scale(1.2, 0.8);
  }
  80% {
    transform: scale(1);
  }
  90% {
    transform: scale(1.1, 0.9);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes input-check {
  0% {
    transform: scale(0) rotate(-45deg);
  }
  100% {
    transform: scale(1) rotate(-45deg);
  }
}
</style>
