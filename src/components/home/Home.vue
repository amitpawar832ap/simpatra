<template>
  <div id="home">
    <Banner></Banner>
    <Directory></Directory>
    <BestSeller></BestSeller>
    <Tools></Tools>
  </div>
</template>

<script>
import Banner from './Banner';
import Directory from './Directory';
import BestSeller from './BestSeller';
import Tools from './Tools';

export default {
  name: "Home",
  components: {
    Banner,
    Directory,
    BestSeller,
    Tools
  },
  data() {
    return {
      title: ""
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>