<template>
    <!-- <div><h1>{{items}}</h1></div> -->
  <v-simple-table dark>
  <v-data-table
    :headers="headers"
    :items="chosenCountries"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
  </v-simple-table>
</template>
<script>
export default{
    props:['items'],
        data () {
      return {
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
        getSpecificCountry(){
            let result = this.countries.filter(obj => {
            return obj.country === this.items
            })
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
      this.getSpecificCountry();
    }
}
</script>
