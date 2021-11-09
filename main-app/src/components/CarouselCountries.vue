<template>
<div class="carousel">
  <v-carousel
  :show-arrows="false"
  height="400">
    <v-carousel-item
      v-for="(item,i) in noDuplicates"
      :key="i"
      :src="item.country"
      >
      <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="caro">
            {{ item.country }}
            <v-btn color="error" dark large @click="onClickHandler(item.country)">More Info</v-btn>
          </div>
       </v-row>
    </v-carousel-item>
  </v-carousel>
  <!-- <main-table v-bind:msg="message"></main-table> -->
</div>
</template>

<script>
// import MainTable from './MainTable.vue';
  export default {
    data () {
      return {
        posts: [],
        countries: [
        {
          country: "America",
          date: "12/02/12",
          cases: "10"
        }, 
        {
          country: "America",
          date: "12/03/12",
          cases: "10"
      },
      {
          country: "America",
          date: "12/04/12",
          cases: "10"
      },
      {
          country: "America",
          date: "12/03/12",
          cases: "10"
      },
      {
          country: "America",
          date: "12/12/12",
          cases: "10"
      },
      {
          country: "Sri Lanka",
          date: "12/09/12",
          cases: "1"
      },
      {
          country: "Sri Lanka",
          date: "12/02/12",
          cases: "1"
      }, 
      {
          country: "Sri Lanka",
          date: "12/03/12",
          cases: "1"
      },
      {
          country: "Sri Lanka",
          date: "12/04/12",
          cases: "1"
      },
      {
          country: "Sri Lanka",
          date: "12/03/12",
          cases: "1"
      },
      {
          country: "Sri Lanka",
          date: "12/12/12",
          cases: "1"
      },
      {
          country: "Sri Lanka",
          date: "12/09/12",
          cases: "1"
      }
      
      ],
      noDuplicates: [],
      message: '',
      }

    },
    methods: {
      getNewValue(){

          let obj = {};

          let data = this.posts;
          console.log(data);

          data.forEach(d => {
            obj[d.country] = obj[d.country] || 0;
            obj[d.country]++;
          });

          let aggregatedData = Object.keys(obj).map(k => ({
              country: k,
              count: obj[k]
          }));
          this.noDuplicates = aggregatedData;     
      },
      onClickHandler (country) {
         this.message = country;
         this.$emit('chosen-country', country)    
         this.$router.push({
          name: 'moreinfo',
          params: {
            items: this.message
          }
        });   
      },
      async getData2() {
      try {
        let response = await fetch(this.$api_url);  //Solution is awaiting getValueFunction()
        this.posts = await response.json();
        await this.getNewValue();
      } catch (error) {
        console.log(error);
      }
    },

    },
    created()
    {
      this.getData2();
    },
  }
</script>
<style scoped>
    .caro{      
        font-size: 200px;
        background-color:indianred
    }
</style>
