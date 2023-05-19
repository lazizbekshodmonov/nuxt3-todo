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
    <FormCard class="z-50">
      <!-- from input slot -->
      <template #forminput>
        <form class="w-[400px]" @submit.prevent="">
          <FormInput
            v-model="auth_data.login"
            type="text"
            placeholder="Login"
            class="w-[100%] mb-6"
          />
          <FormInput
            v-model="auth_data.password"
            type="password"
            class="w-[100%] mb-6"
          />
          <FormCheckbox v-model="remember"> To remember </FormCheckbox>
          <FormButton class="w-[100%] my-6"> Login </FormButton>
        </form>
      </template>
      <!-- from input slot -->
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
  login: string
}
const auth_data = reactive<AuthData>({
  password: '',
  login: '',
})
const remember = ref(false)
</script>

<style scoped></style>
