import axios from "axios"
import { useAuthentication } from "~/composables/cookies"

const BASE_URL = 'http://20.199.16.219'

export const auth_api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})
export const user_api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

user_api.interceptors.response.use(
    (response: any) => {
        return response
    },
    async (error: { response: { status: number }; config: { headers: { [x: string]: string } } }) => {
        const { setCookie, getCookie } = useAuthentication()
        const router = useRouter()
        if (error.response?.status === 401) {
            const refresh_token = {
                refresh: getCookie('refresh_token')
            }
            try {
                const response = await axios.post(BASE_URL + '/api/auth/token/refresh/', refresh_token)
                setCookie({
                    access_token: response.data.access,
                    refresh_token: getCookie('refresh_token')
                })
                error.config.headers['Authorization'] = `Bearer ${response.data.access}`
                return axios(error.config)
            } catch (err) {
                console.log(err);
                router.push('/login')
            }
        } else {
            return Promise.reject(error)
        }
    })

user_api.interceptors.request.use((config) => {
    const { getCookie } = useAuthentication()
    if (getCookie('access_token') !== '') {
        config.headers['Authorization'] = `Bearer ${getCookie('access_token')}`
    }
    return config
})


