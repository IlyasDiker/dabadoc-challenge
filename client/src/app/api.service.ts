import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  API = {
    host: 'http://localhost:3000/',
    LOGIN_ENDPOINT: 'login',
    REGISTER_ENDPOINT: 'users',
  }

  loginUser = (email: String, password: String) => {
    return new Promise(async (resolve, reject) => {
        axios.post(`${this.API.host}${this.API.LOGIN_ENDPOINT}`, {
            user: {
                email: email,
                password: password
            }
        }).then((res)=>{
            resolve(res)
        }, (err) => {
            reject(err)
        })
    })
  }

  registerUser = (name:string, email:string, password:string, password_confirmation:string) => {
    return new Promise(async (resolve, reject) => {
        axios.post(`${this.API.host}${this.API.REGISTER_ENDPOINT}`, {
            user: {
                name: name,
                email: email,
                password: password,
                password_confirmation: password_confirmation,
            }
        }).then((res)=>{
            resolve(res)
        }, (err) => {
            reject(err)
        })
    })
  }

}
