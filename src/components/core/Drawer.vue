drawer

<template>
  <v-navigation-drawer
    id="app-drawer"
    app
    dark
    floating
    persistent
    mobile-break-point="991"
    width="260"
  >
    <v-img
      height="100%"
    >
      <v-layout
        class="fill-height"
        tag="v-list"
        column
      >
        <v-list-tile avatar>
          <v-list-tile-avatar
            color="grey"
          >
            <v-img
              :src="logo"
              height="100"
              contain
            />
          </v-list-tile-avatar>
          <v-list-tile-title class="title">
            CRUD LaravelVuejs
          </v-list-tile-title>
        </v-list-tile>
        <v-divider/>
        <v-list-tile
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          :active-class="color"
          avatar
          class="v-list-item"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            v-text="link.text"
          />
        </v-list-tile>
      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  data: () => ({
    logo: require('@/assets/logo.png'),
    links: [
      {
        to: '/',
        icon: 'dashboard',
        text: 'Dashboard'
      },
      {
        to: '/users',
        icon: 'account_box',
        text: 'User List'
      },
      {
        to: '/user-profile',
        icon: 'assignment_ind',
        text: 'User Profile'
      },
      {
        to: '/map',
        icon: 'location_on',
        text: 'Map'
      },
      {
        to: '/settings',
        icon: 'settings',
        text: 'Settings'
      }
    ],
    responsive: false
  })
}
</script>

<style lang="scss">
  #app-drawer {
    .v-list__tile {
      border-radius: 4px;

      &--buy {
        margin-top: auto;
        margin-bottom: 17px;
      }
    }

    .v-image__image--contain {
      top: 9px;
      height: 60%;
    }

    .search-input {
      margin-bottom: 30px !important;
      padding-left: 15px;
      padding-right: 15px;
    }
  }
</style>
