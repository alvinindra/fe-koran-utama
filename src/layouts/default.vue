<template>
  <v-layout ref="app">
    <LayoutAppBar />

    <v-main>
      <div class="container-mobile min-h-screen">
        <RouterView />
      </div>
    </v-main>

    <LayoutBottomNavigation />
  </v-layout>
</template>