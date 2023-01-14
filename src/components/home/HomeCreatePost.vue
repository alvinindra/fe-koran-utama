<script setup>
import { usePostStore } from '@/stores/post'

const { createPost } = usePostStore()
const showCreatePost = ref(false)

const formCreatePost = reactive({
  title: '',
  body: '',
})

const handleSavePost = () => {
  showCreatePost.value = false
  createPost(formCreatePost)
}
</script>

<template>
  <v-dialog v-model="showCreatePost" persistent>
    <v-card>
      <v-card-title>
        <span class="font-bold text-h6">Buat Postingan</span>
      </v-card-title>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="formCreatePost.title" label="Judul Postingan" required></v-text-field>
          </v-col>
          <v-col class="mb-12" cols="12">
            <richTextEditor v-model="formCreatePost.body" theme="snow" placeHolder="Tulis Konten Postingan Disini..." />
          </v-col>
        </v-row>
      </v-container>
      <v-card class="py-4 mt-5 ml-auto !shadow-none">
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="showCreatePost = false">
          Tutup
        </v-btn>
        <v-btn class="mr-4" color="blue-darken-1" variant="flat" @click="handleSavePost">
          Simpan
        </v-btn>
      </v-card>
    </v-card>
  </v-dialog>
  <v-fab-transition>
    <v-btn icon="mdi-text-box-plus-outline" color="primary" fab class="!fixed bottom-[80px] right-[24px]"
      @click="showCreatePost = true"></v-btn>
  </v-fab-transition>
</template>