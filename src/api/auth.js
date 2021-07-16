import axios from './axios'

const register = credentials => {
    return axios.post("/user",{
        user: credentials
    })
}

export default {
    register,
}