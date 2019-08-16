<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center>
        <v-flex text-xs-center>
          DASHBOARD
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  name: "DashboardData",
  methods: {
    ...mapActions(['fetchDashboardData'])
  },
  computed: mapGetters(['allDashboardData']),
  created() {
    this.fetchDashboardData()
  },
};
</script>
