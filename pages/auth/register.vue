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
    <FormCard class="z-50">
      <!-- form input slot -->
      <template #forminput>
        <form class="w-[400px]" @submit.prevent="">
          <!-- form inputs -->
          <FormInput
            v-model="auth_data.name"
            type="text"
            placeholder="Name"
            class="w-[100%] mb-6"
          />
          <FormInput
            v-model="auth_data.email"
            type="text"
            placeholder="Email"
            class="w-[100%] mb-6"
          />
          <FormInput
            v-model="auth_data.password"
            type="password"
            placeholder="Password"
            class="w-[100%] mb-6"
          />
          <!-- form inputs -->

          <!-- form checkbox -->
          <FormCheckbox v-model="remember"> To remember </FormCheckbox>
          <!-- form checkbox -->

          <!-- form button -->
          <FormButton class="w-[100%] my-6"> Register </FormButton>
          <!-- form button -->
        </form>
      </template>
      <!-- form input slot -->
    </FormCard>
    <!-- form card -->
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'authentication',
})
interface AuthData {
  password: string
  name: string
  email: string
}
const auth_data = reactive<AuthData>({
  password: '',
  name: '',
  email: '',
})
const remember = ref(false)
</script>

<style scoped></style>
