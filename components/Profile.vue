<template>
  <div class="flex items-center justify-end">
    <div class="hidden md:flex flex-col justify-center mr-2">
      <h2 class="font-bold">
        {{ store.User?.first_name }} {{ store.User?.last_name }}
      </h2>
      <p class="text-sm">{{ store.User?.email }}</p>
    </div>
    <div
      class="flex items-center justify-center bg-slate-700 rounded-full w-10 h-10 overflow-hidden"
    >
      <img
        class="img max-w-none w-[145%]"
        src="@/assets/images/default-avatar-profile-icon-vector-39013212.webp"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth_store'
const store = useAuthStore()
</script>

<style scoped></style>
