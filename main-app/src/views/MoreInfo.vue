<template>
<div>
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
    >
    <template v-slot:item="row">
        <tr>
          <td>{{row.item.country}}</td>
          <td>{{row.item.date}}</td>
          <td>{{row.item.cases}}</td>
          <span v-if="loggedIn">
            <td>
                  <v-btn class="mx-2" fab dark small color="pink" @click="onButtonClickDelete(row.item)">
                      <v-icon dark>mdi-delete</v-icon>
                  </v-btn>
            </td>
          </span>
        </tr>
      </template>
    </v-data-table>
    </v-simple-table>
  </v-card>

  <div class="container">
    <div class="row mt-5" v-if="arrPositive.length > 0">
      <div class="col">
        <h2>Positive</h2>
        <first-graph :chartData="arrPositive" :options="chartOptions" :label="Positive" :chartColors="positiveChartColors"></first-graph>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
import moment from 'moment'
import FirstGraph from '../components/FirstGraph.vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default{
    components: {
      FirstGraph,
    },
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
      arrPositive: [],
      chartOptions: {
        responsive: true,
        maintainAspectRation: false,
      },
      positiveChartColors: {
          borderColor: "#077187",
          pointerBorderColor: "#0E1428",
          pointBackgroundColor: "#AFD6AC",
          backgroundColor: "#74A57F"

      },
      loggedIn: false
      }
    },
    methods:{
      async getData2() {
      try {
        let response = await fetch(this.$api_url);
        this.posts = await response.json();
        await this.getSpecificCountry();
        const { data } = await axios.get("https://api.covidtracking.com/v1/us/daily.json")

        data.forEach(d => {
          const date = moment(d.date, "YYYYMMDD").format("MM/DD");

          const {
              positive,
          } = d

          this.arrPositive.push({date, total: positive});
        })
      
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
        onButtonClickDelete(item)
        {
          console.log("Clicked item " + item.cases) 
        }
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
      firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.loggedIn = true;
            }
            else{
                this.loggedIn = false;
            }
        }) 
    }
}
</script>

<style scoped>
.container {
  width: 500px;
}
</style>>
