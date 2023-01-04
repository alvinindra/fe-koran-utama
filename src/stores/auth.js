import { defineStore } from 'pinia'
import { apiClient } from '@/utils/api-client'
import { useToast } from 'vue-toastification'
const toast = useToast()

export const useAuthStore = defineStore('auth', () => {
  const user = ref({})
  const loggedIn = ref(false)
  const formRegister = reactive({
    id_number: '',
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  async function postLogin(data) {
    try {
      const res = await apiClient.post('/api/v1/auth/login', {
        ...data,
      })

      localStorage.setItem('access-token', res.data.data.access_token)
      localStorage.setItem('user-loggedIn', JSON.stringify(res.data.data.user))

      window.location.href = '/'
    } catch (error) {
      toast.error(error.response.data.message)
      console.error(error)
    }
  }

  async function postRegister(formRegister) {
    try {
      const resRegister = await apiClient.post('/api/v1/auth/signup', {
        ...formRegister,
      })

      const resLogin = await apiClient.post('/api/v1/auth/login', {
        username: formRegister.username,
        password: formRegister.password,
      })

      localStorage.setItem('access-token', resRegister.data.data.access_token)
      localStorage.setItem(
        'user-loggedIn',
        JSON.stringify(resLogin.data.data.user)
      )

      toast.success('Registrasi berhasil!')

      window.location.href = '/'
    } catch (error) {
      toast.error(error.response.data.message)
      console.error(error)
    }
  }

  function postLogout() {
    localStorage.removeItem('access-token', '')
    localStorage.removeItem('user-loggedIn', {})
    loggedIn.value = false

    window.location.href = '/login'
  }

  watchEffect(() => {
    const userValue = JSON.parse(localStorage.getItem('user-loggedIn'))
    user.value = userValue
    loggedIn.value = userValue ? true : false
  })

  return { postLogin, postRegister, postLogout, loggedIn, user, formRegister }
})
