<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        class="mx-auto"
        max-width="360"
        dark
      >
        <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"></v-img> -->
        <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJtazqlQc50akXBoLYkRnU_1kRWNevJk8UCQ&usqp=CAU"></v-img>

        <v-card-text>
          <h2 class="text-h6 primary--text">
            Check out the Data!
          </h2>
        </v-card-text>

        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
          >
            <v-btn @click="InfoPage">Sign Up Page</v-btn>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>
<script>
  export default {
    methods: {
        InfoPage()
        {
            this.$router.push('register') 
        }
    }
  }
</script>
