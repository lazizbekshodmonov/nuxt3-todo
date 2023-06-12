import Vue3Toastify, {toast, type ToastContainerOptions, type IToastContainers } from "vue3-toastify"
export default defineNuxtPlugin(({vueApp}) => {
    vueApp.use(Vue3Toastify, {
        autoClose: 3000,
        closeButton: true,
        position: toast.POSITION.TOP_RIGHT,
        limit: 2
    } as ToastContainerOptions)
    return {
        provide: {toast: toast}
    }
})