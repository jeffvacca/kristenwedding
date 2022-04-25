<template>
  <v-container>
    <div>
      <logo-horiz />

      <logo-vert />

      <!-- <h1 class="font-5 text-center white--text">
        A Tale As Old As Time
      </h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis tempore quae in consequuntur recusandae alias neque rem, sequi quam nulla maxime voluptate explicabo laudantium, eveniet nemo a cumque. Nisi, non!</p>
     -->
    </div>
  </v-container>
</template>
<script>
import LogoVert from '../components/LogoVert.vue'
import LogoHoriz from '../components/LogoHoriz.vue'

export default {
  name: 'Location',
  components: { LogoVert, LogoHoriz }
}
</script>

<style lang="scss" scoped>
h1{
    font-size:7rem;
    letter-spacing:1.5rem;
}
</style>
