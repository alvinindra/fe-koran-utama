<script setup>
import { usePostStore } from '@/stores/post'

const store = usePostStore()

onMounted(() => {
  store.getPostHomepage()
})
</script>

<template>
  <div v-if="store.listPosts" class="grid gap-y-4 mb-18">
    <v-card
      v-for="post in store.listPosts"
      :key="post.title"
      class="mx-auto w-full !shadow-md"
    >
      <v-card-text class="pt-2 pb-0">
        <div class="text-xs" v-html="post.body"></div>
      </v-card-text>

      <v-card-actions>
        <v-list-item class="w-100">
          <template v-slot:prepend>
            <v-avatar
              color="grey-darken-3"
              :size="30"
              image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            >
            </v-avatar>
          </template>

          <v-list-item-title class="!text-xs">{{ post.user.first_name }} {{ post.user.last_name }}</v-list-item-title>

          <v-list-item-subtitle class="!text-xs">Mahasiswa</v-list-item-subtitle>

          <template v-slot:append>
            <div class="justify-self-end">
              <v-icon
                class="mr-1"
                :size="16"
                icon="mdi-comment-text-outline"
              ></v-icon>
              <span class="text-xs mr-2">{{ post.total_comment }}</span>
              <v-icon
                class="mr-1"
                :size="16"
                icon="mdi-arrow-up-bold-outline"
              ></v-icon>
              <span class="text-xs mr-2">{{ post.total_upvote }}</span>
              <v-icon
                class="mr-1"
                :size="16"
                icon="mdi-arrow-down-bold-outline"
              ></v-icon>
              <span class="text-xs mr-2">{{ post.total_downvote }}</span>
            </div>
          </template>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </div>
</template>