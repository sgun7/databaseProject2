<template>
<div>
  <div class="carousel">
  <v-carousel
  class="pa-md-2"
  :show-arrows="false"
  :cycle="true"
  :interval="4000"
  :height="450"
  :padding="200">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
  </div>
  <div class="cards">
    <v-layout row wrap>
      <first-card-home></first-card-home>
      <second-card-home></second-card-home>
    </v-layout>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://picsum.photos/id/119/3264/2176',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://picsum.photos/id/180/3264/2176',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>
<style scoped>
.carousel {
  padding-bottom: 20px;
}
.cards {
  white-space: nowrap;
}

</style>