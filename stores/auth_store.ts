import { defineStore } from 'pinia'
import { Registration, User } from '~/models'
import { handleLogin, handleGetUser, handleRegistration } from '~/services/index'
interface Login {
    username: string,
    password: string
}

export const useAuthStore = defineStore('AuthStore', () => {
    const User = ref<User>()
    const isLogin = ref(false)

    async function login(payload: Login) {
        const response = await handleLogin(payload)
        User.value = response
        isLogin.value = true
    }
    async function registration(payload: Registration){
        const response = await handleRegistration(payload)
        User.value = response
    }
    async function getUser() {
        const response = await handleGetUser()
        User.value = response
    }
    return {
        isLogin,
        User,
        login,
        getUser,
        registration
    }
})


