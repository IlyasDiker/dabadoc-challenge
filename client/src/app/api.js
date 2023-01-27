import axios from "axios"

export const API = {
    host: 'http://localhost:3000/',
    LOGIN_ENDPOINT: 'login',
    REGISTER_ENDPOINT: 'users',
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

export const registerUser = (name, email, password) => {
    return new Promise(async (resolve, reject) => {
        axios.post(`${API.host}${API.REGISTER_ENDPOINT}`, {
            user: {
                name: name,
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