<template>
  <div id="app">
    <navigation />
    <router-view></router-view>
  </div>
</template>

<script>
  import './assets/scss/main.scss';
  import Navigation from "./components/Navigation";
  export default {
    name: "App",
    components: {
      navigation: Navigation
    }
  };
</script>