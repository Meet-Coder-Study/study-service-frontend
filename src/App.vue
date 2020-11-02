<template>
  <div class="container px-4">
    <AppNav />
    <router-view />
  </div>
</template>
<script>
import AppNav from "@/components/AppNav";
import { defineComponent } from "vue";
export default defineComponent({
  components: { AppNav }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
