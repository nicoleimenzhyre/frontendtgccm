<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center>
        <v-data-table 
          :headers="headers"
          :items="allUsers"
          :items-per-page="5"
          class="elevation-1"
        >

          <template v-slot:item.action="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="editItem(item)"
            >
              edit
            </v-icon>
            <v-icon
              small
              @click="deleteItem(item)"
            >
              delete
            </v-icon>
          </template>
       
        </v-data-table>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "usersData",
  data() {
    return {
      headers: [
        {
          text: 'Name',
          align: 'left',
          sortable: true,
          value: 'name',
        },
        {
          text: 'Email',
          align: 'left',
          sortable: true,
          value: 'email',
        },
        {
          text: 'Actions',
          align: 'left',
          sortable: false,
          value: 'actions',
        },
    ],
      expanded: [],
      singleExpand: false,
    }
  },
  methods: {
    ...mapActions(['fetchUsers'])
  },
  computed: mapGetters(['allUsers']),
  created() {
    this.fetchUsers()
  }
}
</script>>