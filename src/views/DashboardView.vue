<template>
    <v-app id="dashboard-view">
    <Toolbar />
    <Drawer />
    <transition mode="out-in">
        <router-view/>
    </transition>
    </v-app>
</template>

<script>
import Toolbar from "@/components/core/Toolbar";
import Drawer from "@/components/core/Drawer";

export default {
  components: {
    Toolbar,
    Drawer
  }
}
</script>

