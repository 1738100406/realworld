<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/views/Layout/Header.vue";
import Footer from "@/views/Layout/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
