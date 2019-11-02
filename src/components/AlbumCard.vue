<template>
  <v-card class="albumCard">
    <div class="name">{{album.title}}</div>

    <v-img
      src="http://42mguj1qp4ys3aklm227ro2v-wpengine.netdna-ssl.com/wp-content/uploads/2013/03/missing-itunes-album-art-icon.png"
      class="image"
      max-width="500"
      max-height="300"
    ></v-img>
  </v-card>
</template>

<script>
export default {
  props: ["album"]
};
</script>
<style lang="scss" scoped>
.albumCard {
  padding: 27px;
  margin: 18px;
  display: flex;
  width: 34%;
  flex-direction: column;
  border-radius: 12px !important;
}
.v-responsive.v-image.image {
  border-radius: 0px !important;
}
.name {
  text-align: center;
  color: #6395ed;
  font-weight: bold;
  font-size: 19px;
  height: 59px;
}
</style>