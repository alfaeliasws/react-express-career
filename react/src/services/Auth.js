import instance from '../axios'

export const login = async (data) => {
    const response = await instance.post('/api/auth/login', data)
    return response.data
}

export const signUp = async (data) => {
    const response = await instance.post('/api/auth/sign-up', data)
    return response.data
}
