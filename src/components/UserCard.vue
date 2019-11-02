<template>
  <v-card class="userCard">
    <div class="name">{{user.name}}</div>
    <br />
    ➡ {{user.username}}
    <br />
    📧 {{user.email}}
    <br />
    📞 {{user.phone}}
    <br />
    🕸{{user.website}}
    <br />
    <router-link :to="{ name: 'Albums', params: { userId: user.id }}">🎵 Albums</router-link>
    <router-link :to="{ name: 'Photos', params: { userId: user.id }}">📷 Photos</router-link>
  </v-card>
</template>

<script>
export default {
  props: ["user"]
};
</script>
<style lang="scss" scoped>
.userCard {
  padding: 27px;
  margin: 18px;
  display: flex;
  width: 34%;
  flex-direction: column;
  border-radius: 12px !important;
}
.name {
  color: #6395ed;
  font-weight: bold;
  font-size: 19px;
}
</style>