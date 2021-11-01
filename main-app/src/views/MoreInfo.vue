<template>
  <v-card dark>
    <v-card-title>
      Country Specific Data
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-simple-table dark>
    <v-data-table
        :headers="headers"
        :items="chosenCountries"
        :items-per-page="5"
        :search="search"
        class="elevation-1"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
    ></v-data-table>
    </v-simple-table>
  </v-card>

</template>
<script>
export default{
    props:['items'],
        data () {
      return {
        posts: [],
        search: '',
        sortBy: 'date',
        sortDesc: false,
        headers: [
          {
            text: 'Countries',
            align: 'start',
            sortable: false,
            value: 'country',
          },
          { text: 'Date', value: 'date' },
          { text: 'Cases', value: 'cases' },
        ],
        chosenCountries:[],
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
      }
    },
    methods:{
      async getData2() {
      try {
        let response = await fetch("http://5928-2600-1700-5960-1560-91a0-92fc-f5e-7b69.ngrok.io/data");
        this.posts = await response.json();
        await this.getSpecificCountry();
      } catch (error) {
        console.log(error);
      }
      },      
        getSpecificCountry(){
            let result = this.posts.filter(obj => {
            return obj.country === this.items
            })
            console.log("running")
            this.chosenCountries = result;
        },
        // search(arr, s){
        //     var matches = [], i, key;

        //     for( i = arr.length; i--; )
        //     for( key in arr[i] )
        //     if( arr[i].hasOwnProperty(key) && arr[i][key].indexOf(s) > -1 )
        //         matches.push( arr[i] );  // <-- This can be changed to anything
        
        //     return
        // }
    },
    created()
    {
      this.getData2();
    }
}
</script>
