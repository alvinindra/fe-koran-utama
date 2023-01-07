<route lang="yaml">
  meta:
    layout: public
</route>

<script setup>
import { useAuthStore } from '../stores/auth';
const { formRegister, postRegister } = useAuthStore()

const loading = ref(false)

const onSubmit = () => {
  if (!formRegister) return
  postRegister(formRegister)
  loading.value = true
  setTimeout(() => (loading.value = false), 2000)
}

const required = (v) => {
  return !!v || 'Input tidak boleh kosong'
}
</script>

<template>
  <v-sheet class="p-4 my-4">
    <div class="flex font-medium text-2xl uppercase text-primary">
      <img class="mx-auto" src="/images/logo-koran-utama.png" alt="">
    </div>
    <v-card class="m-auto py-8 elevation-0">
      <v-form @submit.prevent="onSubmit">
        <v-text-field v-model="formRegister.id_number" :readonly="loading" :rules="[required]" class="mb-2" clearable
          label="NPM (Nomor Pokok Mahasiswa)">
        </v-text-field>
        <v-text-field v-model="formRegister.first_name" :readonly="loading" :rules="[required]" class="mb-2" clearable label="Nama Depan">
        </v-text-field>
        <v-text-field v-model="formRegister.last_name" :readonly="loading" :rules="[required]" class="mb-2" clearable
          label="Nama Belakang">
        </v-text-field>
        <v-text-field v-model="formRegister.username" :readonly="loading" :rules="[required]" class="mb-2" clearable
          label="Username">
        </v-text-field>
        <v-text-field type="email" v-model="formRegister.email" :readonly="loading" :rules="[required]" class="mb-2" clearable label="Email">
        </v-text-field>
        <v-text-field type="password" v-model="formRegister.password" :readonly="loading" :rules="[required]" class="mb-2" clearable label="Kata Sandi">
        </v-text-field>
        <v-text-field type="password" v-model="formRegister.password_confirmation" :readonly="loading" :rules="[required]" clearable label="Konfirmasi Kata Sandi"
          placeholder="Enter your password"></v-text-field>

        <br>

        <v-btn :loading="loading" block color="primary" size="large" type="submit" variant="elevated">
          Daftar
        </v-btn>
      </v-form>
    </v-card>
    <div class="flex">
      <div class="flex mx-auto text-center gap-x-2 text-blue-400 text-md">
        <div class="text-black">Sudah Punya akun?</div>
        <router-link to='/login'>
          Login
        </router-link>
        <div>
          |
        </div>
        <router-link to="/">
          Beranda
        </router-link>
      </div>
    </div>
  </v-sheet>
</template>