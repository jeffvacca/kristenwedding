<template>
  <v-app>
    <v-app-bar
      :app="!isHomePage"
      flat
      absolute
      :color="topBarColor"
    >
      <v-app-bar-nav-icon
        :color="burgerColor"
        @click="drawer = !drawer"
      />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      color="rgb(255, 255, 255, 0.85)"
    >
      <nav-list />

      <v-divider />
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavList from '@/components/NavList.vue'

export default {
  name: 'App',
  components: { NavList },

  data: () => ({
    drawer: false
  }),
  computed: {
    isHomePage () {
      return this.$route.name === 'Home'
    },
    topBarColor () {
      if (this.$route.name === 'Home') {
        return 'transparent'
      } else {
        return ''
      }
    },
    burgerColor () {
      if (this.$route.name === 'Home') {
        return 'white'
      } else {
        return ''
      }
    }
  },
  created () {
    console.log(this.$route)
  }

}
</script>
<style lang="scss">
@import "scss/style.scss";

</style>
