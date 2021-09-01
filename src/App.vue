<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import "@/assets/css/style.css";
import Header from "./components/Header";

export default {
  components: {
    Header,
  },
};
</script>

<style></style>
