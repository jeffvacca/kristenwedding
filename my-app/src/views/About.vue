<template>
  <v-container>
    <div>
      <logo-horiz />

      <logo-vert />
      <h1 class="font-5 text-center">
        A Tale <br>As Old <br>As Time
      </h1>
    </div>
    <div class="about">
      <h1 class="primary--text">
        PRIMARY  - This is an about page
      </h1>
      <h2 class="secondary--text">
        SECONDARY - This is an about page
      </h2>
      <h3 class="accent--text">
        ACCENT This is an about page
      </h3>
      <h4 class="error--text">
        ERROR - This is an about page
      </h4>
      <p class="info--text">
        INFO - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa impedit repellat laboriosam velit odio blanditiis et repellendus, dolorem saepe cumque autem necessitatibus cupiditate recusandae corrupti quae delectus itaque sequi facilis.
      </p>
      <ul>
        <li class="success--text">
          SUCCESS -
        </li>
        <li class="warning--text">
          WARNING -
        </li>
        <li class="grey--text">
          GREY
        </li>
        <li class="grey--text text--lighten-1">
          GREY Lighten 1
        </li>
      </ul>
      <a href="/">This is a link</a>
    </div>
  </v-container>
</template>
<script>
import LogoVert from '../components/LogoVert.vue'
import LogoHoriz from '../components/LogoHoriz.vue'
export default {
  name: 'About',
  components: { LogoVert, LogoHoriz }
}
</script>

<style lang="scss" scoped>
h1{
    font-size:7rem;
    letter-spacing:1.5rem;
}
</style>
