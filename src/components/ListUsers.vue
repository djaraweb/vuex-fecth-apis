<template>
  <div class="grid-container">
    <User v-for="user of arrayUsers" :key="user.id" :item="user" />
  </div>
</template>
<script>
import User from "@/components/User.vue";
export default {
  name: "ListUsers",
  components: {
    User
  },
  props: {
    arrayUsers: {
      type: Array,
      required: true
    }
  }
};
</script>
<style scoped>
.grid-container {
  display: grid;
  /*grid-template-columns: repeat(3, 1fr);*/
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 10px 10px;
}
</style>
