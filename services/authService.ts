// import { useAuthentication } from '~/composables/cookies';
import { User, Login, Registration } from '../models/index';
import { auth_api } from './axios';



export async function handleLogin(payload: Login): Promise<User | undefined> {
    const { setCookie } = useAuthentication()
    const router = useRouter()
    try {
        const response = await auth_api.post('/api/auth/login/', payload)
        if (response.status === 200) {
            const tokens = {
                refresh_token: response.data.refresh_token,
                access_token: response.data.access_token
            }
            setCookie(tokens)
            router.push('/profile')
            return response.data.user
        }
    } catch (error) {
        return undefined
    }
}

export async function registration(payload: Registration) {
    const { setCookie } = useAuthentication()
    const router = useRouter()
    try {
        const response = await auth_api.post('/api/auth/registration/', payload)
        if (response.status === 200) {
            const tokens = {
                refresh_token: response.data.refresh_token,
                access_token: response.data.access_token
            }
            setCookie(tokens)

            router.push('/profile')
            return response.data.user
        }
    } catch (error) {
        console.log(error);
        return undefined

    }
}

function useAuthentication(): { setCookie: any; } {
    throw new Error('Function not implemented.');
}

