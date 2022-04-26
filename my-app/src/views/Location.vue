<template>
  <div>
    <v-container>
      <h1 class="display-3 text-center my-16 secondary--text">
        Location
      </h1>
    </v-container>

    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="7"
        >
          <div class="bg4" />
        </v-col>
        <v-col
          cols="12"
          sm="5"
          class="secondary--text"
        >
          <h3>Anne Kolb Nature Center</h3>
          <p class="subtitle-2 secondary--text text--lighten-2">
            751 Sheridan St
            <br>
            Hollywood FL, 33019
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14339.271896135375!2d-80.12990430716296!3d26.03951118577066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9aae672980f31%3A0xbb0bd3419afcff92!2sAnne%20Kolb%20Nature%20Center!5e0!3m2!1sen!2sus!4v1650928987261!5m2!1sen!2sus"
            width="100%"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </v-col>
      </v-row>
    </v-container>
    <div class="bg1" />
  </div>
</template>
<script>

export default {
  name: 'Location'

}
</script>

<style lang="scss" scoped>
h1{
    font-size:7rem;
    letter-spacing:1.5rem;
}
.bg1{
    width:100%;
    height:220px;
    background-image: url('../assets/bg3.jpg');
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center top;
}
.bg4{
        width:100%;
    height:250px;
    background-image: url('../assets/bg4.jpg');
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
}
</style>
