<template>
  <div class="w-1024 flex h-16 items-center">
    <router-link to="/">포스팅 블로그</router-link>
    <div class="ml-auto">
      <button>로그인</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
