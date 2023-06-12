import { User } from "~/models";
import { user_api } from "./axios";
import { toast } from 'vue3-toastify';
export async function handleGetUser(): Promise<User> {
    try {
        const user = ref()
        await user_api.get('/api/auth/user/')
        .then((res) => {
            user.value = res.data
            toast.success('You have successfully logged in', {
                autoClose: 3000,
                closeButton: true
            })
        })
        .catch((err) => {
            throw err
        })
        return user.value
    } catch (error) {
        throw error
    }
}