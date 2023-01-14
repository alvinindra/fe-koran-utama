<script setup>
const navigationBottom = [
  {
    value: 'home',
    text: 'Beranda',
    icon: 'mdi-home',
    link: '/'
  },
  {
    value: 'trending',
    text: 'Trending',
    icon: 'mdi-trending-up',
    link: '/trending'
  },
  {
    value: 'news',
    text: 'Berita',
    icon: 'mdi-newspaper-variant',
    link: '/news'
  },
  {
    value: 'profile',
    text: 'Profil',
    icon: 'mdi-account',
    link: '/profile'
  }
]

const route = useRoute()

const isActive = (link) => {
  return route.path === link ? 'text-primary' : 'text-primary-50'
}

</script>

<template>
  <v-bottom-navigation>
    <template v-for="nav in navigationBottom" :key="nav.value">
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-btn v-bind="props" :ripple="false" :value="nav.value" :key="nav.value" @click="$router.push(nav.link)"
            variant="flat">
            <v-icon :color="isHovering ? 'primary' : '#96989b'" :class="isActive(nav.link)">{{ nav.icon }}</v-icon>
            {{ nav.text }}
          </v-btn>
        </template>
      </v-hover>
    </template>
  </v-bottom-navigation>
</template>