export default defineNuxtRouteMiddleware((to, from) =>{
    if(to.path == '/'){
        return navigateTo({name: 'profile'})
    }
})