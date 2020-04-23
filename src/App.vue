<template>
  <div id="app">
    <div id="nav">

        <TheNavigation />
        <!-- IMPORTANT :key="$route.path" triggers a relod of the same components is used. Otherwise, in that case it does not change -->
        <router-view :key="$route.path" />

    </div>
  </div>
</template>

<script>

import TheNavigation from "@/components/TheNavigation";

export default {
    components: {
        TheNavigation
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
