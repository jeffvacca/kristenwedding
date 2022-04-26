/* eslint-disable vue/no-v-html */
<template>
  <v-container>
    <h1 class="display-3 text-center my-16 secondary--text">
      Events
    </h1>
    <v-timeline>
      <v-timeline-item
        v-for="(event, i) in events"
        :key="i"
        :color="event.color"
        small
      >
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold ${event.color}--text`"
            v-text="event.time"
          />
        </template>
        <div class="py-4">
          <h2 :class="classList(i, event)">
            {{ event.event }}
          </h2>
          <div
            :class="{'text-right': isOdd(i)}"
            class="secondary--text"
            v-html="event.desc"
          />
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>
<script>
export default {
  name: 'Events',
  data: () => ({
    events: [
      {
        color: 'accent',
        event: 'Ceremony',
        time: '5:15',
        desc: 'The ceremony will be held at:<br> Anne Kolb Nature Center,<br> 751 Sheridan St. Hollywood FL, 33019'
      },
      {
        color: 'warning',
        event: 'Reception',
        time: '6:00',
        desc: 'Get ready to party down as we celebrate the newlyweds!<br>Attire is Semi-Formal'
      }
    ]
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
    font-size:7rem;
    letter-spacing:1.5rem;
}
.event-name{
    font-weight:bold;
    letter-spacing:.6rem;
    font-size:1.9rem;
    &.text-right{
        margin-right: -0.6rem;
    }
    @include respond-below(sm){
        font-size:1.3rem;
        letter-spacing:.1rem;
    }
}
</style>
