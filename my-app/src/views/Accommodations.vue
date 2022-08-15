/* eslint-disable vue/no-v-html */
<template>
  <v-container class="mb-16">
    <h1 class="text-center my-16 secondary--text">
      Accommodations
    </h1>

    <div>
      <v-row>
        <v-col>
          <v-card
            class="mx-auto"
            max-width="400"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="../assets/margaritaville.jpg"
            >
              <v-card-title>Margaritaville</v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <div>1111 N Ocean Dr</div>
              <div>Hollywood, FL 33019</div>
              <div>954-874-4444</div>
            </v-card-text>

            <v-card-actions>
              <v-btn
                color="info"
                href="tel:9548744444"
                icon
              >
                <v-icon>mdi-phone</v-icon>
              </v-btn>

              <v-btn
                color="info lighten-1"
                href="https://www.margaritavillehollywoodbeachresort.com/"
                target="_blank"
                icon
              >
                <v-icon>mdi-web</v-icon>
              </v-btn>
              <v-btn
                color="info lighten-2"
                href="https://www.google.com/maps/place/Margaritaville+Hollywood+Beach+Resort/@26.0187817,-80.1189334,17z/data=!3m1!4b1!4m8!3m7!1s0x88d9ab3cf9b8e515:0x672e82397e439d91!5m2!4m1!1i2!8m2!3d26.0187769!4d-80.1167394"
                target="_blank"
                icon
              >
                <v-icon>mdi-map</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
export default {
  name: 'Accommodations',
  data: () => ({
    stuff: 'things'
  }),
  methods: {
    isOdd (i) {
      return i % 2 !== 0
    },
    classList (i, event) {
      if (i % 2 !== 0) { // odd
        return `font-1 event-name mb-4 ${event.color}--text text-right`
      } else {
        return `font-1 event-name mb-4 ${event.color}--text`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/style.scss";
h1{

    font-size: 2rem !important;
    font-weight: 300;
    line-height: 2rem;
    font-family: "Roboto", sans-serif !important;
    letter-spacing:.4rem;

}

@include respond-above(sm) {
    h1{
        font-size:3.75rem !important;
        letter-spacing:.4rem;
        line-height: 3.75rem;
    }
}

</style>
