<template>
  <v-list>
    <v-list-item-group v-model="model">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.link"
      >
        <v-list-item-icon>
          <v-icon
            color="#058fa678"
            v-text="item.icon"
          />
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text" />
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>
<script>
export default {
  name: 'NavList',
  data: () => ({
    items: [
      {
        icon: 'mdi-home',
        text: 'Home',
        link: '/'
      },
      {
        icon: 'mdi-map',
        text: 'Location',
        link: 'Location'
      },
      {
        icon: 'mdi-calendar-clock',
        text: 'Events',
        link: 'Events'
      }
    ],
    model: 0
  })
}
</script>
