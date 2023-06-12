<template>
  <div class="relative flex items-center justify-center h-[100vh]">
    <!-- page banner image -->
    <img
      class="w-[100%] absolute top-0 left-0"
      src="../../assets/images/login.jpg"
      alt=""
    />
    <!-- page banner image -->

    <!-- form card -->
    <AuthCard class="z-50">
      <!-- from input slot -->
      <template #forminput>
        <form class="w-[400px]" @submit.prevent="">
          <Input
            v-model="auth_data.username"
            type="text"
            placeholder="Login"
            class="w-[100%] mb-6"
          />
          <Input
            v-model="auth_data.password"
            type="password"
            class="w-[100%] mb-6"
          />
          <Checkbox v-model="remember"> To remember </Checkbox>
          <Button class="w-[100%] my-6" @on-click="login"> Login </Button>
        </form>
      </template>
      <!-- from input slot -->
    </AuthCard>
    <!-- form card -->
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth_store'
// import { toast } from 'vue3-toastify'
definePageMeta({
  layout: 'authentication',
})
interface AuthData {
  password: string
  username: string
}
const store = useAuthStore()
const remember = ref(false)
const auth_data = reactive<AuthData>({
  username: '',
  password: '',
})
async function login() {
  await store.login(auth_data)
}
</script>

<style scoped></style>
