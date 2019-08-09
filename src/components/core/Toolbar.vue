<template>
    <nav>
      <v-toolbar dark style="background: #424242;">
        <v-toolbar-title>
          <span>Laravel CRUD-VUEJS</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-icon class="toolbar-items" @click="logout">exit_to_app</v-icon>
        </v-toolbar-items>
      </v-toolbar>
    </nav>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  data() {
    return {
        responsive: false,
    }
  },
    methods: {
      logout: function() {
        localStorage.removeItem("token");
        router.push("/");
        this.snackbar = true;
    }
  }
}
</script>

