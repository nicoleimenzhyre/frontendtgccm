<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center>
        <v-flex text-xs-center>
          Add SND Member
            <v-form>
              <v-text-field
                v-model="first_name"
                label="First Name"
                required
              ></v-text-field>

               <v-text-field
                v-model="middle_name"
                label="Middle Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="last_name"
                label="Last Name"
              ></v-text-field>

              <v-radio-group label="Gender" v-model="gender">
                <v-radio name="gender" label="Female" :value="0" key=0 color="red"></v-radio>
                <v-radio name="gender" label="Male" :value="1" key=1 color="indigo"></v-radio>
              </v-radio-group>
        
              <v-select
                v-model="role_name"
                :items="allRolesData"
                item-text="role_name" 
                item-value="id" 
                single-line 
                auto 
                prepend-icon="group_work" 
                label="Select Role"></v-select>

            <v-btn class="mr-4" @click="submit" primary>submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
        </v-form>
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
      first_name: '',
      middle_name: '',
      last_name: '',
      select: null,
      gender: 0,
      role_name: '',
      checkbox: true,
    }
  },
  methods: {
    ...mapActions(['fetchRolesData', 'postMember']),
    submit() {
        this.postMember({
          'first_name': this.first_name,
          'middle_name': this.middle_name,
          'last_name': this.last_name,
          'gender': this.gender,
          'role_name': this.role_name
          })
    },
    clear () {
        this.first_name = '',
        this.middle_name = '',
        this.last_name = ''
        this.select = null
        this.gender = ''
        this.role_name = ''
      }
  },
  computed: mapGetters(['allRolesData']),
    created() {
      this.fetchRolesData()
  }
};
</script>
