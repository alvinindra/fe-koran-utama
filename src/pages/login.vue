<route lang="yaml">
  meta:
    layout: public
</route>

<script setup>
import { useAuthStore } from '@/stores/auth'
const form = ref(false)
const username = ref('')
const password = ref('')
const loading = ref(false)
const { postLogin } = useAuthStore()

const onSubmit = () => {
  if (!form.value) return
  loading.value = true

  const data = {
    username: username.value,
    password: password.value
  }

  postLogin(data)
  setTimeout(() => (loading.value = false), 2000)
}

const required = (v) => {
  return !!v || 'Input tidak boleh kosong'
}
</script>

<template>
  <v-sheet class="px-4 my-32">
    <div class="flex font-medium text-2xl uppercase text-primary">
      <img class="mx-auto" src="/images/logo-koran-utama.png" alt="">
    </div>
    <v-card class="m-auto py-8 elevation-0">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field v-model="username" :readonly="loading" :rules="[required]" class="mb-2" clearable label="Username">
        </v-text-field>

        <v-text-field v-model="password" type="password" :readonly="loading" :rules="[required]" clearable label="Kata Sandi"
          placeholder="Enter your password"></v-text-field>
        <div class="mb-4">
          <router-link class="text-black hover:text-blue-700 hover:underline" to='/forget-password'>
            Lupa Password?
          </router-link>
        </div>
        <br>

        <v-btn :loading="loading" block color="primary" size="large" type="submit" variant="elevated">
          Login
        </v-btn>
      </v-form>
    </v-card>
    <div class="grid grid-flow-col text-center gap-x-2 text-blue-400 text-md">
      <router-link to='/register'>
        Register
      </router-link>
      <div>
        |
      </div>
      <router-link to="/">
        Beranda
      </router-link>
    </div>
  </v-sheet>
</template>