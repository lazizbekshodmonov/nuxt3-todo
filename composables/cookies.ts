import { Tokens } from "~/models/user"
export function useAuthentication() {

    const cookies = useCookie<Tokens>('tokens')
    function getCookie(name: 'access_token' | 'refresh_token') {
        switch (name) {
            case 'access_token':
                return cookies.value?.access_token
            case 'refresh_token':
                return cookies.value?.refresh_token
        }
    }
    function setCookie(tokens: Tokens) {
        cookies.value = tokens
    }
    function isAuthentication() {
        return cookies.value ? true : false
    }
    return {
        getCookie,
        setCookie,
        isAuthentication
    }
}