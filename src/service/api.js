import axios from 'axios'

export const api = axios.create({
    baseURL: "albumexpress-production.up.railway.app"
})