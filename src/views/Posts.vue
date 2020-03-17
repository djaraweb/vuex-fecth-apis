<template>
  <div>
    <h1>Lista de Posts</h1>
    <div v-if="!getLoading">
      <div v-for="post of getArrayPosts" :key="post.id">
        <b-card bg-variant="light" :header="post.title">
          <b-card-text>{{ post.body }}</b-card-text>
          <div class="float-right">
            <b-button size="sm" :to="{ name: 'Comments', params: { postId: post.id } }">
              <i class="fa fa-search"></i>
              Ver Comments
            </b-button>
          </div>
        </b-card>
        <br />
      </div>
    </div>
    <div v-else class="text-center">
      <i class="fa fa-spinner fa-pulse fa-5x fa-fw"></i>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Posts",
  computed: {
    ...mapGetters(["getArrayPosts", "getLoading"])
  },
  methods: {
    ...mapActions(["getApiPosts"])
  },
  created() {
    let userId = this.$route.params.userId;
    this.getApiPosts(userId);
  }
};
</script>
