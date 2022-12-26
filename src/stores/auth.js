import { defineStore } from 'pinia'
import { apiClient } from '../utils/api-client'

export const useAuthStore = defineStore('auth', () => {
  const user = ref({})
  const loggedIn = ref(false)
  const formRegister = reactive({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

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

  watchEffect(() => {
    const userValue = JSON.parse(localStorage.getItem('user-loggedIn'))
    user.value = userValue
    loggedIn.value = userValue ? true : false
  })

  return { login, loggedIn, user, formRegister }
})
