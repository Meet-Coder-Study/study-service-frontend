<template>
  <div class="flex flex-wrap ">
    <FeedCard v-for="item in dummy" :key="item.title" v-bind="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FeedCard from "@/components/FeedCard.vue";
import dummy from "@/dummy/card.json";

export default defineComponent({
  components: {
    FeedCard,
  },
  setup(props, ctx) {
    console.log(dummy);
    return {
      dummy,
    };
  },
});
</script>

<style scoped></style>
