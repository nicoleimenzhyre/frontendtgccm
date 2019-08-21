<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center>
        <v-flex text-xs-center>
          Add Roles
          <v-form>
            <v-container>
                <v-row>
                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-text-field
                        v-model="role_name"
                        label="Role Name"
                        required
                        ></v-text-field>
                    </v-col>
            
                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-text-field
                        v-model="description"
                        label="Description"
                        required
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-btn class="mr-4" @click="submit" color="primary">submit</v-btn>
            </v-container>
            </v-form>
            <v-divider> </v-divider> <v-divider> </v-divider>
           <v-data-table
          
            :headers="headers"
            :items="allRolesData"
            sort-by="name"
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
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';


export default {
  data() {
      return {
        dialog: false,
        role_name: '',
        description: '',
        snackbar: false,
         nameRules: [
            v => !!v || 'Name is required'
            ],
        headers: [
            {
                text: 'Role Name',
                align: 'left',
                sortable: true,
                value: 'role_name',
            },
            {
                text: 'Description',
                align: 'left',
                sortable: true,
                value: 'description',
            },
            { 
               text: 'Actions', 
               value: 'action', 
               sortable: false
            },
            
        ],
        editedItem: {
            role_name: '',
            description: '',
        },
      }
  },
  methods: {
    ...mapActions(['fetchRolesData']),
    ...mapActions(['postRoleData']),
    submit() {
        this.postRoleData({'role_name': this.role_name, 'description': this.description})
    }
  
  },
    computed: mapGetters(['allRolesData']),
    created() {
      this.fetchRolesData()
  }
};
</script>
