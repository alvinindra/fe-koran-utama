import { defineStore } from 'pinia'
import { apiClient } from '@/utils/api-client'
import { useToast } from 'vue-toastification'
const toast = useToast()

export const useProfileStore = defineStore('profile', () => {
  const profileUser = ref({})

  async function getProfile() {
    try {
      const res = await apiClient.get('/api/v1/general/users/self')

      profileUser.value = res.data.data.user
    } catch (error) {
      toast.error(error.response.data.message)
      console.error(error)
    }
  }

  onMounted(() => {
    getProfile()
  })

  return { getProfile, profileUser }
})
