import { defineStore } from 'pinia'
import { apiClient } from '@/utils/api-client'
import { useToast } from 'vue-toastification'
const toast = useToast()

export const usePostStore = defineStore('post', () => {
  const listPosts = ref([])
  const detailPost = ref({})
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

  async function getDetailPost(slug) {
    try {
      const res = await apiClient.get(`/api/v1/posts/${slug}`)
      detailPost.value = res.data.data.post
    } catch (error) {
      toast.error(error.response.data.message)
      console.error(error)
    }
  }

  async function createPost(payload) {
    try {
      await apiClient.post('/api/v1/student/posts', payload)
      toast.success('Postingan berhasil dibuat!')
      getPostHomepage()
    } catch (error) {
      toast.error(error.response.data.message)
      console.error(error)
    }
  }

  async function postUpVote(slug) {
    try {
      await apiClient.put(`/api/v1/student/posts/${slug}/upvote`)
      getPostHomepage()
    } catch (error) {
      toast.error(error.response.data.message)
      console.error(error)
    }
  }

  async function postDownVote(slug) {
    try {
      await apiClient.put(`/api/v1/student/posts/${slug}/downvote`)
      getPostHomepage()
    } catch (error) {
      toast.error(error.response.data.message)
      console.error(error)
    }
  }

  return {
    getPostHomepage,
    getDetailPost,
    listPosts,
    detailPost,
    createPost,
    postUpVote,
    postDownVote,
  }
})
