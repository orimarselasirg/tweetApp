import axios from 'axios'

const dummyapi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {'app-id': import.meta.env.VITE_APP_ID }
})

export {dummyapi}