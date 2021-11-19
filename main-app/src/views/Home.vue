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
    <v-container fill-height fluid>
      <v-row align="center" justify="center">
        <first-card-home></first-card-home>
      </v-row>
      <v-row><br/></v-row>
      <v-row align="center" justify="center">
        <second-card-home></second-card-home>
      </v-row>
    </v-container>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://dph.georgia.gov/sites/dph.georgia.gov/files/styles/3_2_2106px_x_1404px/public/2021-04/GettyImages-1210455332.jpg?h=32b23554&itok=hXoJsD8u',
          },
          {
            src: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/JVIS5YJXHVI6NEMZLLB3WKMZ54.jpg',
          },
          {
            src: 'https://scitechdaily.com/images/COVID-19-Coronavirus-Map-March-19.jpg',
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