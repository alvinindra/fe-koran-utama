<script setup>
const numbers = [1, 2, 3, 4, 5, 6, 7]
</script>

<template>
  <div class="grid gap-y-4 mb-18">
    <v-card
      v-for="number in numbers"
      :key="number"
      class="mx-auto w-full !shadow-md"
    >
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="deep-purple"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        cover
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <v-card-item>
        <v-card-title>Mahasiswa Baru ini berhasil Juara 1 di WIFI</v-card-title>

        <v-card-subtitle>
          <span class="mr-1">Berita Terbaru</span>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
      </v-card-text>
    </v-card>
  </div>
</template>