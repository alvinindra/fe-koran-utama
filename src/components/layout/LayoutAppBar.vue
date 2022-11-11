<template>
  <v-app-bar absolute :elevation="0" hide-on-scroll class="border-b">
    <v-toolbar-title>
      <div class="font-medium">
        Koran Utama
      </div>
    </v-toolbar-title>
    <template v-slot:append>
      <v-btn icon="mdi-magnify"></v-btn>
    </template>
  </v-app-bar>
</template>