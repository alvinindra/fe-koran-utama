<script setup>
import { useProfileStore } from '@/stores/profile'
import { useAuthStore } from '@/stores/auth'
const { postLogout } = useAuthStore()
const store = useProfileStore()
</script>

<template>
  <div class="mx-auto">
    <div class="text-center mt-4">
      <v-img
        src="https://placeimg.com/60/60/people"
        alt=""
        class="rounded-full mx-auto"
        width="60"
        height="60"
      />
      <div class="text-black mt-4 font-bold">
        {{ store.profileUser.first_name }} {{ store.profileUser.last_name }}
      </div>
      <div class="text-gray-500 text-capitalize">
        Mahasiswa
      </div>
    </div>
    <v-card
      color="primary"
      class="mt-4 shadow"
    >
      <div class="grid grid-cols-3 text-center font-medium gap-4 p-4">
        <div class="flex flex-col">
          <div class="font-medium">
            100
          </div>
          <div>
            Postingan
          </div>
        </div>
        <div class="flex flex-col">
          <div class="font-medium">
            4
          </div>
          <div>
            Artikel
          </div>
        </div>
        <div class="flex flex-col">
          <div class="font-medium">
            121
          </div>
          <div>
            Vote
          </div>
        </div>
      </div>
    </v-card>
    <v-btn
      class="mt-4"
      color="blue-grey"
      block
    >
      Ubah Data Profil
    </v-btn>
    <v-btn
      class="mt-4"
      color="secondary"
      block
      @click="postLogout"
    >
      Logout
    </v-btn>
  </div>
</template>