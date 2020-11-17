

<template>
  <div class="Comdtiy">
    <Foltnav></Foltnav>
    <leftnav></leftnav>
    <!-- <Title></Title> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
        import Foltnav from "../components/Folt_nav";
        import leftnav from "../components/left_nav";
        import Title from "../components/Title";
export default {
  name: "Comdtiy",
  components: {
        Foltnav,
        leftnav,
        Title
  }
};
</script>
<style scoped>
  
</style>