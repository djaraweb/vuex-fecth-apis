<template>
  <div id="app" class="container">
    <Nabvar />
    <router-view />
  </div>
</template>
<script>
import Nabvar from "@/components/Navbar.vue";
export default {
  name: "AppBase",
  components: {
    Nabvar
  }
};
</script>
