<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>JSON</span>
        <span class="font-weight-light">PLACEHOLDER</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
