<template>
  <b-card bg-variant="light" :header="item.username">
    <b-card-text>
      <div class="grid-container">
        <strong>user </strong>
        <span><strong>:</strong> {{ item.name }}</span>
        <strong>email </strong>
        <span><strong>:</strong> {{ item.email }}</span>
        <strong>phone</strong>
        <span><strong>:</strong> {{ item.phone }}</span>
        <strong>website</strong>
        <span><strong>:</strong> {{ item.website }}</span>
      </div>
    </b-card-text>
    <div class="pull-right">
      <b-button size="sm" :to="{ name: 'Posts', params: { userId: item.id } }">
        <i class="fa fa-search"></i>
        Ver Posts
      </b-button>
    </div>
  </b-card>
</template>
<script>
export default {
  name: "User",
  data() {
    return {};
  },
  props: {
    item: {
      required: true,
      type: Object
    }
  }
};
</script>
<style scoped>
.grid-container {
  display: grid;
  text-align: left;
  grid-template-columns: 60px 200px;
}
</style>
