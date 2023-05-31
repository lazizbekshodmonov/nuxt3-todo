<template>
  <div class="bg-white px-12 py-6 rounded-3xl drop-shadow-md">
    <!-- project name -->
    <div class="text-center mb-6">TODO.com</div>
    <!-- project name -->

    <!-- google and facebook registation -->
    <div class="flex justify-center mb-6 gap-3">
      <FormButton class="icon_btn bg-white hover:bg-slate-100">
        <img src="../../assets/icons/Google.svg" alt="" />
      </FormButton>
      <FormButton :disabled="true" class="icon_btn bg-slate-100">
        <img src="../../assets/icons/Facebook.svg" alt="" />
      </FormButton>
    </div>
    <!-- google and facebook registation -->

    <!-- page name -->
    <div class="text-center mb-6">
      {{ route.path != '/auth/login' ? 'Registration' : 'Login' }}
    </div>
    <!-- page name -->

    <!-- form input slot -->
    <div>
      <slot name="forminput"></slot>
    </div>
    <!-- from input slot -->
    <!-- login and registration route link -->
    <div class="text-center">
      Já tem conta?
      <NuxtLink
        :to="route.path == '/auth/login' ? '/auth/register' : '/auth/login'"
      >
        {{ route.path == '/auth/login' ? 'Register' : 'Login' }}
      </NuxtLink>
    </div>
    <!-- login and registration route link -->
  </div>
</template>
<script lang="ts" setup>
const route = useRoute()

route.name
</script>
<style scoped>
.icon_btn {
  border: 1px solid #ced4da;
  border-radius: 8px;
}
</style>
