import { defineStore } from 'pinia'
import { apiClient } from '@/utils/api-client'
import { useToast } from 'vue-toastification'
const toast = useToast()

export const usePostStore = defineStore('post', () => {
  const listPosts = ref([])
  const perPage = ref(5)

  async function getPostHomepage() {
    try {
      const payload = {
        params: {
          paginate: true,
          per_page: perPage.value,
        },
      }

      const res = await apiClient.get('/api/v1/posts/homepage', {
        payload,
      })

      listPosts.value = res.data.data.posts
    } catch (error) {
      toast.error(error.response.data.message)
      console.error(error)
    }
  }

  return { getPostHomepage, listPosts }
})
