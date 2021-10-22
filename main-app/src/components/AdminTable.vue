<template>
<div id="app">
  <v-app id="inspire">
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <span>{{new Date(item.date).toLocaleString()}}</span>
      </template>
    </v-data-table>
  </v-app>
</div> 
</template>

<script>
export default {
methods: {
data () {
    return {
        headers: [
            { text: 'Id', value: 'id' },
            { text: 'Name', value: 'Name' },
            { text: 'Details', value: 'details', sortable: false, width:"100" },
            { text: 'URL', value: 'url', name:'url', width:"180" },
            { text: 'Action', value: 'actions', sortable: false },
        ],
        items: [],
        dialog: false,
        editedItem: {}
    }
  },
  // mounted() {
  //   this.loadItems()
  // },
}
}
</script>
<style scoped>
.btn-space {
    margin-right: 10px;
}
</style>