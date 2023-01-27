import axios from "axios"

export const API = {
    host: 'http://localhost:8080/',
    LOGIN_ENDPOINT: 'login',
    REGISTER_ENDPOINT: 'register',
}

export const loginUser = (email, password) => {
    return new Promise(async (resolve, reject) => {
        axios.post(`${API.host}${API.LOGIN_ENDPOINT}`, {
            user: {
                email: email,
                password: password
            }
        }).then(()=>{
            resolve(res)
        }, (err) => {
            reject(err)
        })
    })
}