export type LoginRequest = {
    email: string,
    password: string
}

export type LoginResponse = {
    redirect: string
}