<template>
  <v-app>
    <h1 class="display-2 font-weight-bold mb-3">Utilisateurs</h1>
    <v-text-field v-model="search" label="Rechercher un nom ou un email ?" outlined shaped></v-text-field>
    <div class="myWarning" v-if="loadError">{{loadError}}</div>
    <v-container>
      <UserCard v-for="user of filteredUsers" :key="user.id" :user="user" />
    </v-container>
    <router-view></router-view>
  </v-app>
</template>

<script>
import UserCard from "@/components/UserCard.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "Users",
  computed: {
    ...mapState(["users"]),
    filteredUsers: function() {
      return !this.search
        ? this.users
        : this.users.filter(
            user =>
              user.name.toLowerCase().includes(this.search.toLowerCase()) ||
              user.email.toLowerCase().includes(this.search.toLowerCase())
          );
    }
  },
  data() {
    return {
      search: "",
      loadError: ""
    };
  },
  async mounted() {
    try {
      {
        this.users.length > 0 ? (this.loadError = "") : await this.getUsers();
      }
    } catch (error) {
      this.loadError =
        "⚠ Une erreur s'est produite lors du chargement des informations. Essayez de rafraichir la page.";
    }
  },
  methods: {
    ...mapActions(["getUsers"])
  },
  components: {
    UserCard
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
.v-input {
  flex: initial !important;
}
.myWarning {
  background-color: #fb8c0024 !important;
  border-color: #fb8c00 !important;
  text-align: center;
  font-weight: 900;
  padding: 11px;
}
</style>