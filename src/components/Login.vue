<template>
  <v-content>
    <v-container fluid dark>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <form v-on:submit.prevent="login">
                <v-text-field
                  prepend-icon="person"
                  name="email"
                  label="Email"
                  type="email"
                  v-model="email"
                ></v-text-field>
                <v-text-field
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  id="password"
                  type="password"
                  v-model="password"
                ></v-text-field>
              </form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="login">Login</v-btn>
            </v-card-actions>
            <v-snackbar v-model="snackbar" color="error" :top="true">
              {{ errorMessages }}
              <v-btn dark text @click="snackbar = false">Close</v-btn>
            </v-snackbar>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  data() {
    return {
      email: "",
      password: "",
      snackbar: false,
      errorMessages: "Incorrect login info"
    };
  },
  methods: {
    login() {
      axios
        .post(
          "http://localhost:8000/api/login",
          {
            email: this.email,
            password: this.password
          },
          {
            headers: { "Content-Type": "application/json" }
          }
        )
        .then(response => {
          localStorage.setItem("token", response.data.token);
          this.email = "";
          this.password = "";
          router.push("/dashboard");
        })
        .catch(err => {
          console.log(err);
          this.snackbar = true;
        });
    }
  }
};
</script>
