<template>
  <div class="relative flex items-center justify-center h-[100vh]">
    <!-- page banner -->
    <img
      class="w-[100%] absolute top-0 left-0"
      src="../../assets/images/login.jpg"
      alt=""
    />
    <!-- page banner -->

    <!-- form card -->
    <AuthCard class="z-50">
      <!-- form input slot -->
      <template #forminput>
        <form class="w-[400px]" @submit.prevent="">
          <!-- form inputs -->
          <Input
            v-model="auth_data.name"
            type="text"
            placeholder="Name"
            class="w-[100%] mb-6"
          />
          <Input
            v-model="auth_data.email"
            type="text"
            placeholder="Email"
            class="w-[100%] mb-6"
          />
          <Input
            v-model="auth_data.password"
            type="password"
            placeholder="Password"
            class="w-[100%] mb-6"
          />
          <!-- form inputs -->

          <!-- form checkbox -->
          <Checkbox v-model="remember">To remember</Checkbox>
          <!-- form checkbox -->

          <!-- form button -->
          <Button class="w-[100%] my-6" @on-click="registration">
            Register
          </Button>
          <!-- form button -->
        </form>
      </template>
      <!-- form input slot -->
    </AuthCard>
    <!-- form card -->
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth_store'
import { toast } from 'vue3-toastify'
definePageMeta({
  layout: 'authentication',
})
interface AuthData {
  password: string
  name: string
  email: string
}
const store = useAuthStore()
const remember = ref(false)
const auth_data = reactive<AuthData>({
  password: '',
  name: '',
  email: '',
})
async function registration() {
  await store.registration({
    password1: auth_data.password,
    password2: auth_data.password,
    username: auth_data.name.toLowerCase().replace(' ', ''),
    email: auth_data.email,
  })
}
</script>

<style scoped></style>
