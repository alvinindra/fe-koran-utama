<template>
  <v-layout ref="app">
    <LayoutAppBar />

    <v-main>
      <div class="container-mobile min-h-[85vh]">
        <RouterView />
      </div>
    </v-main>

    <LayoutBottomNavigation />
  </v-layout>
</template>