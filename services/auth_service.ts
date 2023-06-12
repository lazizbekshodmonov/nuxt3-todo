import { User, Login, Registration } from '../models/index';
import { auth_api } from './axios';
import { toast } from 'vue3-toastify';


export async function handleLogin(payload: Login): Promise<User> {
    const { setCookie } = useAuthentication()
    const router = useRouter()
    const user = ref()
    await auth_api.post('/api/auth/login/', payload)
    .then((response) => {
        const tokens = {
            refresh_token: response?.data.refresh_token,
            access_token: response?.data.access_token
        }
        setCookie(tokens)
        user.value = response.data.user
        router.push('/profile')
    })
    .catch((_error) => {
        useNuxtApp().$toast('dkjfbjgs')
    })
    return user.value
    
}
// Successfully registered
export async function handleRegistration(payload: Registration): Promise<User> {
    const { setCookie } = useAuthentication()
    const router = useRouter()
        const user = ref()
        await auth_api.post('/api/auth/registration/', payload)
        .then((response) => {
            const tokens = {
                refresh_token: response?.data.refresh_token,
                access_token: response?.data.access_token
            }
            setCookie(tokens)
            user.value = response.data.user
            router.push('/profile')
            toast.success('You have successfully logged in', {
                autoClose: 3000,
                closeButton: true
            })
        })
        .catch((_error) => {
            toast.error('The login or password is incorrect!'
                , {
                autoClose: 3000,
                closeButton: true
            })
        })
        return user.value
    
}




