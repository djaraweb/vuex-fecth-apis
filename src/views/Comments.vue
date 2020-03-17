<template>
  <div>
    <h1>List of Comments</h1>
    <div v-if="!getLoading">
      <div v-for="comment of getArrayComments" :key="comment.id">
        <b-card bg-variant="light" :header="comment.name">
          <b-card-text>{{ comment.body }}</b-card-text>
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
  name: "Comments",
  computed: {
    ...mapGetters(["getArrayComments", "getLoading"])
  },
  methods: {
    ...mapActions(["getApiComments"])
  },
  created() {
    let postId = this.$route.params.postId;
    this.getApiComments(postId);
  }
};
</script>