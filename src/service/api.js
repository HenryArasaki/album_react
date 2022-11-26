import axios from 'axios'

export const api = axios.create({
    baseURL: "https://album-api.onrender.com"
})