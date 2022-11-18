<route lang="yaml">
  meta:
    layout: public
</route>

<script setup>
const form = ref(false)
const email = ref('')
const password = ref('')
const loading = ref(false)

const onSubmit = () => {
  if (!form.value) return
  loading.value = true
  setTimeout(() => (loading.value = false), 2000)
}

const required = (v) => {
  return !!v || 'Input tidak boleh kosong'
}
</script>

<template>
  <v-sheet class="flex px-4 my-32">
    <div class="flex font-medium text-2xl uppercase text-primary">
      <img class="mx-auto" src="/images/logo-koran-utama.png" alt="">
    </div>
    <v-card class="m-auto py-8 elevation-0">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field v-model="email" :readonly="loading" :rules="[required]" class="mb-2" clearable label="Email">
        </v-text-field>

        <v-text-field v-model="password" :readonly="loading" :rules="[required]" clearable label="Kata Sandi"
          placeholder="Enter your password"></v-text-field>

        <br>

        <v-btn :disabled="!form" :loading="loading" block color="primary" size="large" type="submit" variant="elevated">
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