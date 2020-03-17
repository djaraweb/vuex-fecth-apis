<template>
  <div class="home">
    <ListUsers :arrayUsers="getArrayUsers" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ListUsers from "@/components/ListUsers.vue";

export default {
  name: "Home",
  components: {
    ListUsers
  },
  computed: {
    ...mapGetters(["getArrayUsers"])
  },
  methods: {
    ...mapActions(["getApiUsers"])
  },
  created() {
    this.getApiUsers();
  }
};
</script>
