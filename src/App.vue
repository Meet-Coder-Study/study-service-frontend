<template>
  <div class="flex justify-center items-center flex-col">
    <AppNav />
    <router-view />
  </div>
</template>
<script>
import AppNav from "@/components/AppNav";
import { defineComponent } from "vue";
export default defineComponent({
  components: { AppNav },
});
</script>

<style>
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);

#app {
  font-family: "Spoqa Han Sans", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
