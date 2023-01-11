<route>
  {
    name: "DetailPost",
  }
</route>

<script setup>
import { usePostStore } from '@/stores/post'

const route = useRoute()
const store = usePostStore()

const detailPost = computed(() => store.detailPost)

onMounted(() => {
  store.getDetailPost(route.params.slug)
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
  </v-card>
</template>
  