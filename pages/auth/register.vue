<template>
    <div class=" relative flex items-center justify-center h-[100vh]">
        <img class=" w-[100%] absolute top-0 left-0" src="../../assets/images/login.jpg" alt="">
        <FormCard class="z-50">
            <template #forminput>
                <form class="  w-[400px]" @submit.prevent="">
                    <FormInput v-model="auth_data.name" type="text" placeholder="Name" class=" w-[100%] mb-6" />
                    <FormInput v-model="auth_data.email" type="text" placeholder="Email" class=" w-[100%] mb-6" />
                    <FormInput v-model="auth_data.password" type="password" placeholder="Password" class=" w-[100%] mb-6" />
                    <FormCheckbox v-model="remember">
                        To remember
                    </FormCheckbox>
                    <FormButton class="w-[100%] my-6">
                        Registration
                    </FormButton>
                </form>
            </template>
        </FormCard>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'authentication'
})
interface AuthData {
    password: string,
    name: string,
    email: string
}
const auth_data = reactive<AuthData>({
    password: '',
    name: '',
    email: ''
})
const remember = ref(false)

</script>

<style scoped></style>