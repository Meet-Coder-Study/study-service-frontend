<template>
  <div class="p-2 w-11/12 xl:w-1280 flex h-16 items-center">
    <router-link to="/">블로그</router-link>
    <div class="ml-auto">
      <template v-if="loggined">
        <button>로그인</button>
      </template>
      <template v-else>
        <button>로그아웃</button>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    console.log(store);
    console.log(store.state.auth);
    const loggined = ref(true);
    return { loggined };
  },
});
</script>

<style scoped></style>
