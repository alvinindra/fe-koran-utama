import { defineStore } from 'pinia'
import { apiClient } from '../utils/api-client'

export const useAuthStore = defineStore('auth', () => {
  async function login(data) {
    try {
      const res = await apiClient.post('/api/v1/auth/login', {
        ...data,
      })

      localStorage.setItem('access-token', res.data.data.access_token)
      localStorage.setItem('user', JSON.stringify(res.data.data.user))

      window.location.href = '/'
    } catch (error) {
      console.error(error)
    }
  }

  return { login }
})
