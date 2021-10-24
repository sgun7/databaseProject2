<template>
<v-simple-table dark>
  <v-data-table
    :headers="headers"
    :items="countries"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
  </v-simple-table>
</template>

<script>
  export default {
    data () {
      return {
        count: 0,
        total:0,
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
    methods: {
      getNewValue(){
          // var newValue = 0;
          // for(var i = 0; i < this.desserts.length-1; i++)
          // {
          //   if(this.desserts[i].country == this.desserts[i+1].country)
          //   {
          //       newValue = parseInt(this.desserts[i].cases);    //Addition might be wrong needs a fix
          //       this.total += newValue;
          //   }
          // }
          // console.log(this.total);
          // var newCountries = this.countries;
          // var data = { cells:[newCountries] };
          // var r = data.newCountries.reduce(function(pv,cv){
          //   if(pv[cv.country])
          //   {
          //      pv[cv.country] += cv.cases;
          //   }
          //   else {
          //       pv[cv.country] = cv.cases;
          //   }
          //   return pv;
          // }, {});
          // console.log(r);
          // const array = this.countries;
          // const ages = array.reduce((a, {country,cases}) => (a[country] = (a[country] || 0) + +cases, a), {});
          // console.log(ages);
          // var data = { cells:[] };
          // //var oldGraph = this.coutries;

          //   var r = data.(this.coutries).reduce(function(pv, cv) {
          //       if ( pv[cv.countries] ) {
          //           pv[cv.countries] += cv.cases;
          //       } else {
          //           pv[cv.countries] = cv.cases;
          //       }
          //       return pv;
          //   }, {});

          //   console.log(r);
          // var cleaned = [];
          // arr.forEach(function(itm) {
          //     var unique = true;
          //     cleaned.forEach(function(itm2) {
          //         if (_.isEqual(itm, itm2)) unique = false;
          //     });
          //     if (unique)  cleaned.push(itm);
          // });
          // console.log(cleaned);

          // let json1 = this.countries;
          // let result = json1.reduce((returnArray,item)=>{
          //   let match = json1.find(el => el.country == item.country);
          //   if(match)
          //   {
          //     returnArray.push({...item, name: match.country});
          //   }
          //   return returnArray;
          // }, []);
          // console.log("Result:", result);
          // const arr = this.countries;

          // const result = Object.values(arr.reduce((acc, cur) => {
          //     // Create the summary for the day if it doesn't exist
          //     acc[cur.country] = acc[cur.country] || { country: cur.country};
          //     // Create the summary for the country if it doesn't exist and add the cases in cur
          //     //acc[cur.count] = (acc[cur.country] || 0) + +cur.cases;
          //     return acc;
          // }, {}))

          // console.log('Result:',result)
          let obj = {};

          let data = this.countries;

          data.forEach(d => {
            obj[d.country] = obj[d.country] || 0;
            obj[d.country]++;
          });

          let aggregatedData = Object.keys(obj).map(k => ({
              country: k,
              count: obj[k]
          }));
          console.log(aggregatedData);
          // const items = this.countries;

          // let seenMap = new Map();
          // const newItems = items.reduce((acc, obj, index) => {
          //   let seen = seenMap.get(obj.country);
          //   seen !== undefined ? acc[seen].cases++ : (seenMap.set(obj.country, index), acc.push(obj));
          //   return acc;
          // }, []);

          // console.log(newItems);
          
      }

    },
    created()
    {
      this.getNewValue();
    }
  }
</script>
