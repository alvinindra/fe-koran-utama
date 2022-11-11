import axios from 'axios'

export const apiClient = axios.create({
  baseURL: String(import.meta.env.VITE_BASE_URL_API),
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': 'en'
  }
})

apiClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('access-token')

    if (token) config.headers.Authorization = `Bearer ${token}`

    return config
  },

  error => {
    return Promise.reject(error)
  }
)
