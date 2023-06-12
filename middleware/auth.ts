export default defineNuxtRouteMiddleware((to, from) => {
    const {isAuthentication} =  useAuthentication()
    if(!isAuthentication()){
        return navigateTo('/auth/login')
    }
})