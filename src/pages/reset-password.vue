<route lang="yaml">
  meta:
    layout: public
</route>

<script setup>
const form = ref(false)
const password = ref('')
const confirm_password = ref('')
const loading = ref(false)

const onSubmit = () => {
  if (!form.value) return
  loading.value = true
  setTimeout(() => (loading.value = false), 2000)
}

const required = (v) => {
  return !!v || 'Email tidak boleh kosong'
}
</script>

<template>
  <v-sheet class="px-4 my-32">
    <div class="flex font-medium text-2xl uppercase text-primary">
      <router-link class="flex mx-auto" to="/">
        <img src="/images/logo-koran-utama.png" alt="">
      </router-link>
    </div>
    <v-card class="m-auto py-8 elevation-0">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <div class="text-2xl font-bold text-black text-center">
          Kata Sandi Baru
        </div>
        <div class="text-black text-center mb-4">
          Identitas Anda sudah terverifikasi
          atur kata sandi baru
        </div>
        <v-text-field v-model="password" :readonly="loading" class="mb-2" :rules="[required]" clearable
          label="Kata Sandi">
        </v-text-field>
        <v-text-field v-model="confirm_password" :readonly="loading" class="mb-2" :rules="[required]" clearable
          label="Konfirmasi Kata Sandi">
        </v-text-field>

        <v-btn :loading="loading" block color="primary" size="large" type="submit" variant="elevated">
          Kirim
        </v-btn>
      </v-form>
    </v-card>
    <div class="grid grid-flow-col text-center gap-x-2 text-blue-400 text-md">
      <router-link to="/login">
        Login
      </router-link>
    </div>
  </v-sheet>
</template>