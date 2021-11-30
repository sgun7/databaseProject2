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
        </tr>
      </template>
    </v-data-table>
    </v-simple-table>
  </v-card>
  <v-divider></v-divider>
    <v-simple-table dark>
    <v-data-table
        :headers="newHeaders"
        :items="newTable"
        :items-per-page="5"
        class="elevation-1"  
    >
    <template v-slot:item="row">
        <tr>
            <td>{{row.item.cases}}</td>
            <td>{{row.item.date}}</td>
        </tr>
      </template>
    </v-data-table>
    </v-simple-table>


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
        newTable: [],
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
        newHeaders: [
          {
            text: 'Cities',
            value: 'city',
          },
          { text: 'Vaccination Travel Status', value: 'vaccination' },
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
        console.log("items", this.items)
        if(this.items === "Afghanistan")
        {
          console.log("Running 2");
          let newResponse = await fetch("http://localhost:8081/datacityAfgh");
          this.newTable = await newResponse.json();
          console.log("new table", this.newTable)
        }
        else if(this.items === "Germany")
        {
          let newResponse = await fetch("http://localhost:8081/datacityGermany");
          this.newTable = await newResponse.json();
          console.log("new table", this.newTable)
        }
        else if(this.items === "India")
        {
          let newResponse = await fetch("http://localhost:8081/datacityIndia");
          this.newTable = await newResponse.json();
          console.log("new table", this.newTable)
        }
        else if(this.items === "USA")
        {
          let newResponse = await fetch("http://localhost:8081/datacityUSA");
          this.newTable = await newResponse.json();
          console.log("new table", this.newTable)
        }
        
        // const { data } = await axios.get(this.$api_url)
        //const [data] = this.countries;
        //console.log("main data", data);

        // data.forEach(d => {
        //   const date = moment(d.date, "M/DD/YY").format("MM/DD");

        //   const {
        //       cases,
        //   } = d

        //   this.arrPositive.push({date, total: cases});
        // })

        for(var i = 0; i < this.chosenCountries.length; i++) {
          var obj = this.chosenCountries[i];

            const date = moment(obj.date, "M/DD/YYYY").format("MM/DD/YYYY");
            const {
              cases,
            } = obj
            this.arrPositive.push({date, total: cases});

        }
        console.log(this.arrPositivearrPositive)
      
      } catch (error) {
        console.log(error);
      }
      },      
        getSpecificCountry(){
            let result = this.posts.filter(obj => {
            return obj.country === this.items
            })
            this.chosenCountries = result;
        },
        onButtonClickDelete(item)
        {
          console.log("Clicked item " + item.cases) 
        },
        // async getSecondTable()
        // {
        //     if(this.items === "India")
        //     {
        //       let response = await fetch("http://fe5b-2603-6010-960b-4600-166-1f3-323c-e540.ngrok.io/datacityIndia");
        //       this.newTable = await response.json();
        //       console.log("api", this.newTable);
        //     }
        // }
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
  padding-bottom: 200px;
}
</style>>
