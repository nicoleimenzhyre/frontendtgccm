<template>
    <v-app id="dashboard-view">
     <Toolbar/>
     <Drawer />
     <router-view/>
    </v-app>
</template>

<script>
import Drawer from "@/components/core/Drawer";
import Toolbar from "@/components/core/Toolbar";

export default {
  components: {
    Toolbar,
    Drawer
  }
};
</script>
