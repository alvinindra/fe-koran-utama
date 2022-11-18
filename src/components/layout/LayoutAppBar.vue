<template>
  <v-app-bar absolute :elevation="0" hide-on-scroll class="border-b">
    <v-toolbar-title>
      <img src="/images/logo-koran-utama.png" alt="">
    </v-toolbar-title>
    <template v-slot:append>
      <v-btn icon="mdi-magnify" color="primary"></v-btn>
    </template>
  </v-app-bar>
</template>