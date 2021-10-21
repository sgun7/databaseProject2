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
    <table class="w-75 p-3 table table-striped table-dark position-absolute top-50 start-50 translate-middle">
        <thead>
            <tr>
                <th scope="col">Country name</th>
                <th scope="col">Date</th>
                <th scope="col">Cases</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in fakepost" v-bind:key="post.id">
                <td>{{ post.country }}</td>
                <td>{{ post.date }}</td>
                <td>{{ post.cases}}</td>
                <td>
                  <button type="button" class="btn btn-outline-danger btn-space" @click="removeUser(post.country)">Delete</button>
                  <button type="button" class="btn btn-outline-warning">Edit</button>
                </td>
            </tr>
        </tbody>
    </table>
  <!-- <table id="firstTable">
      <thead>
          <th>Country name</th>
          <th>Date</th>
          <th>Cases</th>
      </thead>
  </table> -->
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
        let response = await fetch("http://7d2b-2600-1700-5960-1560-e140-d3b5-832a-5c88.ngrok.io/data");
        this.posts = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
    removeUser(id)
    {
      this.rows.remove(id);
    }
  },

  created() {
    this.getData();
  },
};
</script>
<style scoped>
.btn-space {
    margin-right: 10px;
}
</style>