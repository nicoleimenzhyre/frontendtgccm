<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center>
        <v-flex text-xs-center>
          SND First Timers Registration
            <v-col cols="12" v-for="item in allTribeLeaders" v-bind:key="item.id">
              <v-btn color="secondary" dark>{{ item.full_name }}</v-btn>
            </v-col>
           </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
      return {
           text: 'Customize me',
           customLoad: false,
      }
  },
  methods: {
      ...mapActions(['fetchTribeLeaders'])
  },
  computed: {
      ...mapGetters(['allTribeLeaders'])
  },
  created() {
       this.fetchTribeLeaders()
  }
};
</script>
