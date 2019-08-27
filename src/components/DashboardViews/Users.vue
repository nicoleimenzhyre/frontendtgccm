<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center>
        <v-data-table
          :headers="headers"
          :items="allUsers"
          sort-by="id"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>SND Members</v-toolbar-title>
              <v-divider
                class="mx-4"
                inset
                vertical
              ></v-divider>
              <div class="flex-grow-1"></div>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark class="mb-2" v-on="on">Add New Member</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>
                    <v-form>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="12" md="12">
                              <v-text-field v-model="editedItem.first_name" label="First Name"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="12">
                              <v-text-field v-model="editedItem.last_name" label="Last Name"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="12">
                              <v-select
                                v-model="editedItem.tribe_leader"
                                :items="allTribeLeaders"
                                item-text="full_name"
                                item-value="id" 
                                single-line 
                                auto 
                                prepend-icon="group_work" 
                                label="Select Tribe Leader"></v-select>
                            </v-col>

                              <v-col cols="12" sm="12" md="12">
                              <v-select
                                v-model="editedItem.cell_leader"
                                :items="allTribeLeaders"
                                item-text="full_name"
                                item-value="id" 
                                single-line 
                                auto 
                                prepend-icon="group_work" 
                                label="Select Cell Leader"></v-select>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-col cols="12" sm="12" md="12">
                        <v-btn class="mr-4" @click="submit" color="primary">submit</v-btn>
                      </v-col>
                    </v-form>
                  <v-card-actions>
                    <div class="flex-grow-1"></div>
                    <!-- <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="save">Save</v-btn> -->
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
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
          text: 'First Name',
          align: 'left',
          sortable: true,
          value: 'first_name',
        },
        {
          text: 'Last Name',
          align: 'left',
          sortable: true,
          value: 'last_name',
        },
        {
          text: 'Actions',
          align: 'left',
          sortable: false,
          value: 'action',
        },
      ],
      dialog: false,
      editedIndex: -1,
      editedItem: {
        id: '',
        first_name: '',
        last_name: '',
        tribe_leader: '',
        cell_leader: ''
      },
      defaultItem: {
        id: '',
        first_name: '',
        last_name: '',
        full_name: '',
        tribe_leader: '',
        cell_leader: ''
      },
    }
  },
  methods: {
    ...mapActions(['fetchUsers', 'fetchTribeLeaders', 'updateUser']),
    submit() {
      this.updateUser({
        'id': this.editedItem.id,
        'first_name': this.editedItem.first_name,
        'last_name': this.editedItem.last_name,
        'tribe_leader': this.editedItem.tribe_leader,
        'cell_leader': this.editedItem.cell_leader
      })
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    editItem (item) {
      this.editedIndex = this.allUsers.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
  },
  computed: {
    ...mapGetters(['allUsers', 'allTribeLeaders']),
     formTitle () {
      return this.editedIndex === -1 ? 'Add New Member' : 'Edit Member Details'
    },
  },
  watch: {
    dialog (val) {
      val || this.close()
    },
  },
  created() {
    this.fetchUsers(),
    this.fetchTribeLeaders()

  }
}
</script>>