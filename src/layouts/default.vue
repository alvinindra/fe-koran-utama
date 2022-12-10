<template>
  <v-layout ref="app">
    <LayoutAppBar />

    <v-main>
      <div class="container-mobile min-h-[80vh]">
        <RouterView />
      </div>
    </v-main>

    <LayoutBottomNavigation />
  </v-layout>
</template>