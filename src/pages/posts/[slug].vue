<route>
{
  name: "DetailPost",
}
</route>

<script setup>
import { usePostStore } from '@/stores/post'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const router = useRouter()
const store = usePostStore()
const comment = ref('')
const { loggedIn } = useAuthStore()

const detailPost = computed(() => store.detailPost)
const listComments = computed(() => store.listComments)

const handleSendComment = () => {
  if (!loggedIn) {
    router.push('/login')
  }

  store.createComment(route.params.slug, {
    body: comment.value
  })
}

onMounted(() => {
  store.getDetailPost(route.params.slug)
  store.getComments(route.params.slug)
})

useHead({
  title: computed(() => detailPost.title)
})
</script>

<template>
  <v-card v-if="detailPost">
    <template v-slot:title>
      {{ detailPost.title }}
    </template>

    <template v-slot:subtitle>
      Penulis: {{ detailPost.user?.first_name }} {{ detailPost.user?.last_name }}
    </template>

    <template v-slot:text>
      <div v-html="detailPost.body"></div>
    </template>

    <div class="p-4 justify-self-end">
      <v-icon class="mr-1" :size="20" icon="mdi-comment-text-outline"></v-icon>
      <span class="text-xs mr-2">{{ detailPost.total_comment }}</span>
      <v-icon class="mr-1 cursor-pointer" :size="20" icon="mdi-arrow-up-bold-outline"
        @click.stop="store.postUpVote(post.slug)"></v-icon>
      <span class="text-xs mr-2">{{ detailPost.total_upvote }}</span>
      <v-icon class="mr-1 cursor-pointer" :size="20" icon="mdi-arrow-down-bold-outline"
        @click.stop="store.postDownVote(post.slug)"></v-icon>
      <span class="text-xs mr-2">{{ detailPost.total_downvote }}</span>
    </div>
  </v-card>
  <div class="mt-12">
    <h2 class="text-xl font-semibold text-black">
      Komentar
    </h2>
    <v-textarea class="mt-3" rows="2" label="Tulis komentar disini" v-model="comment" variant="solo"></v-textarea>
    <div class="d-flex">
      <v-btn class="ml-auto" color="blue-darken-1" variant="flat" @click="handleSendComment">
        Kirim
      </v-btn>
    </div>
  </div>
  <template v-if="listComments">
    <v-divider class="my-4"></v-divider>

    <v-card v-for="comment in listComments" :key="comment.id" class="mx-auto w-full !shadow-md mb-3">
      <v-card-text class="p-3">
        <div class="text-xs text-gray-400">{{ comment.user.first_name }} {{
          comment.user.last_name
        }} - Pelajar</div>
        <div class="text-xs line-clamp-3" v-html="comment.body"></div>
      </v-card-text>
    </v-card>
  </template>
</template>
