<template>
  <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      dark
      app
    >
  <v-layout tag="v-list" column>
    <!-- avatar -->
    <v-list-item>
    <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
    </v-list-item-avatar>

    <v-list-item-title>John Leider</v-list-item-title>

    <v-btn
        icon
        @click.stop="mini = !mini"
    >
        <v-icon>chevron_left</v-icon>
    </v-btn>
    </v-list-item>
    <!-- end of avatar -->
    <v-divider />
    <!-- main menu -->
      <v-list>
        <div v-bind:key="i" v-for="(link, i) in links">
          <v-list-item
            v-if="!link.subLinks"
            :key="i"
            :to="link.to"
            class="v-list-item"
          >
            <v-list-item-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-action>

            <v-list-item-title v-text="link.text" />
          </v-list-item>

          <v-list-group v-else :key="link.text" no-action>
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title v-text="link.text" />
                </v-list-item-content>
              </v-list-item>
            </template>

            <v-list-item
              v-for="sublink in link.subLinks"
              :to="sublink.to"
              :key="sublink.text"
            >
              <v-list-item-title v-text="sublink.text" />
            </v-list-item>
          </v-list-group>
        </div>
      </v-list>
    </v-layout>
    </v-navigation-drawer>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  data: () => ({
    drawer: true,
    links: [
      {
        to: '/dashboard',
        text: 'Dashboard',
        icon: 'dashboard'
      },
      {
        to: '/users',
        text: 'Users',
        icon: 'account_circle'
      },
       {
        to: '/add-snd-member',
        text: 'Add SND Member',
        icon: 'person_add'
      },
      {
        text: "Registration",
        subLinks: [
          {
            to: "/snd",
            text: "SND Registration",
            icon: 'view_module',
          },
          {
            to: "/freedom_culture",
            text: "Freedom Culture",
            icon: 'view_list'
          }
        ]
      },
       {
        to: '/add-roles',
        text: 'Add Roles',
        icon: 'settings'
      },
    ],
    mini: false,
  }),
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
