<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  --fontFamily: "Avenir", Helvetica, Arial, sans-serif;
  width: 100vw;
  height: 100vh;
  font-family: var(--fontFamily);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  overflow-x: hidden;
}
</style>
