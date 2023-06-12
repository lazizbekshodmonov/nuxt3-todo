export interface User {
    pk: number,
    username: string,
    email: string,
    first_name: string,
    last_name: string
}
export interface Tokens {
    access_token: string,
    refresh_token: string
}

