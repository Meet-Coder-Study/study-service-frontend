<template>
  <div class="flex justify-between">
    <router-link to="/">블로그</router-link>
    <template v-if="loggined">
      <button>로그인</button>
    </template>
    <template v-else>
      <button>로그아웃</button>
    </template>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const loggined = ref(true);
    return { loggined };
  }
});
</script>

<style scoped></style>
