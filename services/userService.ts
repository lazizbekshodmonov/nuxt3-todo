import { User } from "~/models/user";
import { user_api } from "./axios";


export async function handleGetUser(): Promise<User | undefined> {
    try {
        const response = await user_api.get('/api/auth/user/')
        return response?.data
    } catch (err) {
        console.log(err);
        return undefined
    }
}