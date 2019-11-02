<template>
  <v-app>
    <v-btn @click="back">Back</v-btn>
    <h1 class="display-2 font-weight-bold mb-3">Albums !</h1>
    <div class="myWarning" v-if="loadError">{{loadError}}</div>
    <v-container>
      <AlbumCard v-for="album of albums" :key="album.id" :album="album" />
    </v-container>
    <router-view></router-view>
  </v-app>
</template>

<script>
import router from "@/router";
import { mapActions, mapState } from "vuex";
import AlbumCard from "../components/AlbumCard.vue";

export default {
  name: "Albums",
  data() {
    return {
      loadError: ""
    };
  },
  async mounted() {
    try {
      this.albums.length > 0
        ? (this.loadError = "")
        : await this.getAlbums(this.$route.params);
    } catch (error) {
      this.loadError =
        "⚠ Une erreur s'est produite lors du chargement des informations. Essayez de rafraichir la page.";
    }
  },
  computed: {
    ...mapState(["albums"])
  },
  methods: {
    ...mapActions(["getAlbums"]),
    back() {
      router.go(-1);
    }
  },
  components: {
    AlbumCard
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
}
h1 {
  text-align: center;
  margin-top: 28px;
  color: cornflowerblue;
}
.myWarning {
  background-color: #fb8c0024 !important;
  border-color: #fb8c00 !important;
  text-align: center;
  font-weight: 900;
  padding: 11px;
}
</style>