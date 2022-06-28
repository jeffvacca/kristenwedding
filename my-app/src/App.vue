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
      <v-spacer />
      <logo-horiz v-if="!isHomePage" />
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

    <v-main style="background-color:#f0f0f0">
      <router-view />
    </v-main>
    <v-footer
      v-if="!isHomePage"
      :style="{ backgroundImage: gradientString }"
      class="main-footer py-5"
    >
      <h6
        class="font-5 tale"
      >
        a Tale as old as Time
      </h6>
    </v-footer>
  </v-app>
</template>

<script>
import NavList from '@/components/NavList.vue'
import LogoHoriz from './components/LogoHoriz.vue'

export default {
  name: 'App',
  components: { NavList, LogoHoriz },

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
    },
    gradientString () {
      return `linear-gradient(to right, ${this.$vuetify.theme.themes.light.secondary}, ${this.$vuetify.theme.themes.light.primary})`
    }
  },
  created () {
    // console.log(this.$route)
  }

}
</script>
<style lang="scss" scoped>
@import "scss/style.scss";
.main-footer{
    display:flex;
    align-items: center;
    justify-content: flex-end;
}
.tale{
    font-size: 1.5rem;
    letter-spacing:.4rem;
    text-align:right;

    color:rgba(255,255,255,0.4)
}

</style>
