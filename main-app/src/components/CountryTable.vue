<template>
  <!-- <div>
    <ul v-for="post in posts" v-bind:key="post.id">
      <li>{{ post.country }}</li>
      <p>{{ post.date }}</p>
    </ul>
  </div> -->
  <!-- <div class="country-list">
    <tr v-for="post in fakepost" v-bind:key="post.id">
      <td>{{ post.country }}</td>
      <td>{{ post.date }}</td>
    </tr>
  </div> -->
  <!-- <table id="firstTable">
      <thead>
          <th>Country name</th>
          <th>Date</th>
          <th>Cases</th>
      </thead>
  </table> -->
  <button type="button" class="btn bton-link">Dark</button>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      fakepost: [{
          country: "America",
          date: "12/12/12",
          cases: "120000"
        }, 
        {
          country: "Uganda",
          date: "12/12/12",
          cases: "120000"
      },
      {
          country: "France",
          date: "12/12/12",
          cases: "120000"
      },
      {
          country: "Sri Lanka",
          date: "12/12/12",
          cases: "120000"
      },
      {
          country: "Canada",
          date: "12/12/12",
          cases: "120000"
      },
      {
          country: "Mexico",
          date: "12/12/12",
          cases: "120000"
      }]
    };
  },

  methods: {
    async getData() {
      try {
        let response = await fetch("https://5eab-2600-1700-5960-1560-89d4-9eb9-1c0c-49.ngrok.io/data");
        this.posts = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getData();
  },
};
</script>