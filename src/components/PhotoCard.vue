<template>
  <v-card class="photoCard">
    <div class="name">{{photo.title}}</div>
    <v-img :src="photo.url" class="image" max-width="100" max-height="100"></v-img>
  </v-card>
</template>

<script>
export default {
  props: ["photo"]
};
</script>
<style lang="scss" scoped>
.photoCard {
  padding: 27px;
  margin: 18px;
  display: flex;
  width: 34%;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 12px !important;
}
.v-responsive.v-image.image {
  border-radius: 0px !important;
}
.name {
  color: #6395ed;
  font-weight: bold;
  font-size: 19px;
  text-align: center;
}
</style>